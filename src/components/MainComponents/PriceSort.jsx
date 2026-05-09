import { useState } from "react"

function PriceSort({products, setFilteredProducts}) {
    const [sortType, setSortType] = useState("asc")

    const handleSortChange = (e) => {
        const newSortType = e.target.value
        setSortType(newSortType)
        
        setFilteredProducts(products => 
            [...products].sort((a, b) => 
                newSortType === "asc" 
                    ? a.discountedPrice - b.discountedPrice
                    : b.discountedPrice - a.discountedPrice
            )
        )
    }

    return (
        <select value={sortType} onChange={handleSortChange} className="w-full p-2 border rounded">
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
        </select>
    )
}

export default PriceSort