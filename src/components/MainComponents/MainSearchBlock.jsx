import { useState } from "react"


function MainSearchBlock({products, setSearchFilter}) {
    const [query, setQuery] = useState("")

    function handleChange(event) {
        const value = event.target.value
        const listFiltered = products.filter(product=>
            product.name.toLowerCase().includes(value.toLowerCase()))
            
        setSearchFilter(listFiltered)
        setQuery(value)
        console.log(value)
    }

    return (
        <input
        type="text"
        value={query}
        placeholder="Поиск..."
        onChange={handleChange}
        />
    )
}

export default MainSearchBlock