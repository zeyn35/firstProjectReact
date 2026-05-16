import { useState, useEffect } from "react"
import AdminProductCard from "../components/blocks/AdminProductCard"

function NewProduct() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [discountedPrice, setDiscountedPrice] = useState("")
  const [image, setImage] = useState("")
  const [products, setProducts] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({
      name,
      description,
      price,
      discountedPrice,
      image
    })
  }

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }

  useEffect(() => {
    fetch("https://69ec8be8af4ff533142b135e.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-5 font-sans">
      <h1 className="text-center text-gray-800 text-2xl mb-8">
        Добавление товара
      </h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10">
        <input
          type="text"
          placeholder="Название товара"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        />
        <input
          type="text"
          placeholder="Описание товара"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        />
        <input
          type="number"
          placeholder="Цена товара"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        />
        <input
          type="number"
          placeholder="Цена товара со скидкой"
          value={discountedPrice}
          onChange={(event) => setDiscountedPrice(event.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        />
        <input
          type="text"
          placeholder="Картинка товара"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        />
        <button 
          type="submit"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            marginTop: "16px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer"
          }}
        >
          Добавить товар
        </button>
      </form>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Список товаров</h2>
        {products.map((product) => (
          <AdminProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            discountedPrice={product.discountedPrice}
            id={product.id}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default NewProduct