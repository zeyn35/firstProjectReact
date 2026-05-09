import Header from "../Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://69ec8be8af4ff533142b135e.mockapi.io/products/" + params.id)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            });
    }, [params.id]);

    if (loading) {
        return (
            <div>
                <Header />
                <div className="flex flex-col items-center justify-center min-h-[70vh]">
                    <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
                    <p className="mt-6 text-xl text-gray-600">Загрузка товара...</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div>
                <Header />
                <div className="flex flex-col items-center justify-center min-h-[70vh]">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">Товар не найден</h2>
                    <p className="text-xl text-gray-600">К сожалению, запрашиваемый товар отсутствует.</p>
                </div>
            </div>
        );
    }

    const discountPercent = Math.round(((product.price - product.discountedPrice) / product.price) * 100);
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);

    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
                        <div className="space-y-4">
                            <div className="flex justify-center items-center bg-gray-50 rounded-2xl p-10 min-h-[500px]">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="max-w-full max-h-[450px] object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">{product.name}</h1>
                                <p className="text-gray-600 text-xl leading-relaxed">{product.description}</p>
                            </div>

                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-4 mb-4">
                                    {product.discountedPrice ? (
                                        <>
                                            <span className="text-gray-400 line-through text-2xl">${product.price}</span>
                                            <span className="text-5xl font-bold text-red-600">${product.discountedPrice}</span>
                                            <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-xl text-base font-semibold">
                                                -{discountPercent}%
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-5xl font-bold text-gray-900">${product.price}</span>
                                    )}
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-green-700 font-medium text-lg">В наличии</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span className="text-gray-700 text-lg">Бесплатная доставка</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-700 text-lg">Доставка {deliveryDate.toLocaleDateString('ru-RU')}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-6 mt-2">
                                <div className="flex gap-6 justify-center">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">2 года</div>
                                        <div className="text-gray-500 text-sm">Гарантия</div>
                                    </div>
                                    <div className="w-px bg-gray-200"></div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">30 дней</div>
                                        <div className="text-gray-500 text-sm">На возврат</div>
                                    </div>
                                    <div className="w-px bg-gray-200"></div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">24/7</div>
                                        <div className="text-gray-500 text-sm">Поддержка</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;