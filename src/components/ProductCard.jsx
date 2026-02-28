

function ProductCard({image, name, description, price}) {

    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="text-6xl mb-4 text-center">
          {image}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {name}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-bold text-gray-900 line-through">
            {price}$
          </span>
          <span className="text-2xl font-bold text-gray-900">
            {price*0.5}$
          </span>
        </div>
        
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-lg text-lg shadow-md">
          🛒 Купить
        </button>
      </div>
    )
}

export default ProductCard