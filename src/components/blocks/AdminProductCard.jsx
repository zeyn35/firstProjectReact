function AdminProductCard({ id, image, name, description, price, discountedPrice, onDelete }) {
    return (
      <div className="border border-gray-200 rounded-lg p-4 mb-3 hover:shadow-md transition">
        <div className="flex gap-4 items-center">
          <div className="w-24 h-24 flex-shrink-0">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-contain" 
            />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
          </div>
          
          <div className="text-right">
            <div className="text-gray-500 line-through text-sm">{price}$</div>
            <div className="text-xl font-bold text-gray-900">{discountedPrice}$</div>
          </div>
  
          <button
            onClick={() => onDelete(id)}
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              marginLeft: "16px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Удалить
          </button>
        </div>
      </div>
    )
  }
  
  export default AdminProductCard