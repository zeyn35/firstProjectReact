import MainCounter from "../ui/MainCounter"
import Favorites from "../MainComponents/Favorites"
import { useState } from "react"
import { Link } from "react-router-dom"

function ProductCard({id, image, name, description, price, discountedPrice, onBuyClick}) {
  const [isVisible, setIsVisible] = useState(true)
  const [count, setCount] = useState(1)

    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

        <Favorites isVisible={isVisible} setIsVisible={setIsVisible}/>

        <div className="text-6xl mb-4 text-center" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }} />
        </div>
        
        <Link to={"/product/" + id}>
        <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ minHeight: '60px' }}>
          {name}
        </h3>
        </Link>

        <p className="text-gray-600 mb-4" style={{ flex: 1, minHeight: '80px' }}>
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-bold text-gray-900 line-through">
            {price}$
          </span>
          <span className="text-2xl font-bold text-gray-900">
            {discountedPrice}$
          </span>
        </div>
        
        <MainCounter
        count={count}
        setCount={setCount}
        />

        
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-lg text-lg shadow-md"
        onClick={() => { 
          onBuyClick();
        }}>
          🛒 Купить
        </button>

      </div>

      
    )
}

export default ProductCard