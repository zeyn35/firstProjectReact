import ProductCard from './ProductCard'
import { useState } from "react"
import MainSearchBlock from '../MainSearchBlock'
import PriceFilter from '../PriceFilter'
import PriceSort from '../PriceSort'

function ProductList() {
    const [products] = useState([
        {id: "1", image: "💻", name: "Ноутбук", description: "Хороший ноутбук", price: "1500", discountedPrice: "750"},
        {id: "2", image: "📱", name: "Телефон", description: "Современный телефон", price: "1000", discountedPrice: "500"},
        {id: "3", image: "🖥️", name: "Монитор", description: "Игровой монитор 240Hz", price: "1200", discountedPrice: "600"},
        {id: "4", image: "⌨️", name: "Клавиатура", description: "Механическая клавиатура", price: "240", discountedPrice: "120"},
        {id: "5", image: "🎧", name: "Наушники", description: "Хорошие наушники", price: "400", discountedPrice: "200"},
        {id: "6", image: "🖱️", name: "Мышка", description: "Современная мышка", price: "200", discountedPrice: "100"}
    ])

    const [filteredProducts, setFilteredProducts] = useState(products)

    return (
        <div>
            <div className='flex flex-wrap gap-5 mt-15 px-5'>
                <div className='w-80 flex-1 min-w-[250px]'>
                    <MainSearchBlock products={products} setSearchFilter={setFilteredProducts}/>
                </div>
                
                <div className='w-80 flex-1 min-w-[250px]'>
                    <PriceFilter products={products} setFilteredProducts={setFilteredProducts}/>
                </div>

                <div className='w-80 flex-1 min-w-[200px]'>
                    <PriceSort setFilteredProducts={setFilteredProducts}/>
                </div>
            </div>
            
            <div className='flex flex-wrap gap-5 mt-5 px-5'>
                {filteredProducts.length === 0 ? (
                    <div className="w-full text-center mt-10">
                        <p className="text-gray-500 text-xl">Нет товаров</p>
                    </div>
                ) : (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            discountedPrice={product.discountedPrice}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default ProductList