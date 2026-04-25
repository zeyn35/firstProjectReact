import ProductCard from './ProductCard'
import { useState } from "react"
import MainSearchBlock from '../MainSearchBlock'
import PriceFilter from '../PriceFilter'
import PriceSort from '../PriceSort'
import { useEffect } from 'react'

function ProductList() {
    const [products, setProducts] = useState([])  

    const [filteredProducts, setFilteredProducts] = useState(products)
    
    useEffect(()=>{

        fetch("https://69ec8be8af4ff533142b135e.mockapi.io/products")
        .then((res)=>res.json())
        .then((data)=>{
            setFilteredProducts(data)
            setProducts(data)
        })
    }, [])

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
                            id={product.id}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default ProductList