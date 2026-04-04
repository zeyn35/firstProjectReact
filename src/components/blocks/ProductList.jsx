import ProductCard from './ProductCard'
import { useState } from "react"
import MainSearchBlock from '../MainSearchBlock'

function ProductList() {
    const [products, setProducts] = useState([
        {id: "1", image: "💻", name: "Ноутбук", description: "Хороший ноутбук", price: "1500"},
        {id: "2", image: "📱", name: "Телефон", description: "Современный телефон", price: "1000"},
        {id: "3", image: "🖱️", name: "Мышка", description: "Современная мышка", price: "200"},
        {id: "4", image: "⌨️", name: "Клавиатура", description: "Механическая клавиатура", price: "240"},
        {id: "5", image: "🎧", name: "Наушники", description: "Хорошие наушники", price: "400"},
        {id: "6", image: "🖥️", name: "Монитор", description: "Игровой монитор 240Hz", price: "1200"}
    ])

    const [filteredProducts, setFilteredProducts] = useState(products)

    return (
        <div className='flex flex-wrap gap-5 mt-15 justify-center px-5'>
            <div className='flex flex-col'>
                <MainSearchBlock products={products} setSearchFilter={setFilteredProducts}/>
            </div>
            {filteredProducts.map((product) => (
                <ProductCard
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    )
}

export default ProductList