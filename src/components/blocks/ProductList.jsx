import ProductCard from './ProductCard'
import { useState } from "react"
import MainSearchBlock from '../MainComponents/MainSearchBlock'
import PriceFilter from '../MainComponents/PriceFilter'
import PriceSort from '../MainComponents/PriceSort'
import { useEffect } from 'react'
import { Modal, Box, Button } from '@mui/material'

function ProductList() {
    const [products, setProducts] = useState([])  
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const handleOpen = (product) => {
        setSelectedProduct(product)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setSelectedProduct(null)
    }
    
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
            
            <div className='flex flex-wrap gap-5 mt-5 px-5' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {filteredProducts.length === 0 ? (
                    <div className="w-full text-center mt-10">
                        <p className="text-gray-500 text-xl">Нет товаров</p>
                    </div>
                ) : (
                    filteredProducts.map((product) => (
                        <div key={product.id} style={{ width: 'calc(25% - 15px)', minWidth: '280px', flex: '1 1 auto' }}>
                            <ProductCard
                                image={product.image}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                discountedPrice={product.discountedPrice}
                                id={product.id}
                                onBuyClick={() => handleOpen(product)}
                            />
                        </div>
                    ))
                )}
            </div>

            <Modal open={open} onClose={handleClose}>
                <Box sx={{bgcolor: 'white', p: 3, mt: 10, mx: "auto", width: 400, borderRadius: 2}}>
                    {selectedProduct && (
                        <div>
                            <img 
                                src={selectedProduct.image} 
                                alt={selectedProduct.name} 
                                style={{ 
                                    width: '100%', 
                                    height: '250px', 
                                    objectFit: 'contain', 
                                    borderRadius: '8px',
                                    marginBottom: '16px'
                                }} 
                            />
                            <div className="product-content">
                                <h3 className="product-title" style={{ margin: '0 0 8px 0' }}>{selectedProduct.name}</h3>
                                <p style={{ margin: '0 0 8px 0', color: '#666' }}>{selectedProduct.description}</p>
                                <p className="product-price" style={{ fontSize: '24px', fontWeight: 'bold', color: '#000', margin: '8px 0' }}>{selectedProduct.price} $</p>
                            </div>

                            <Button onClick={handleClose} variant="contained" fullWidth sx={{ mt: 2 }}>
                                Закрыть
                            </Button>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    )
}

export default ProductList