import { useState, useEffect } from "react"

function PriceFilter({products, setFilteredProducts}) { 
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    
    useEffect(() => {
        
        if (minPrice !== "") {
            products = products.filter(product => Number(product.discountedPrice) >= Number(minPrice))
        }
        
        if (maxPrice !== "") {
            products = products.filter(product => Number(product.discountedPrice) <= Number(maxPrice))
        }
        
        setFilteredProducts(products)
    }, [minPrice, maxPrice, products, setFilteredProducts])

    return (
        <div className="flex gap-2">
            <input 
                type="number"
                placeholder="Мин. цена"
                className="border p-2 rounded"
                value={minPrice}
                onChange={(event) => setMinPrice(event.target.value)}
            />
            <input 
                type="number"
                placeholder="Макс. цена"
                className="border p-2 rounded"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
            />
        </div>
    )
}

export default PriceFilter