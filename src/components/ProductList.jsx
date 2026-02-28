import ProductCard from './ProductCard'
function ProductList() {

    return (
        <div className='flex flex-wrap gap-5 mt-15'>
        <ProductCard
            image={"💻"}
            name={"Ноутбук"}
            description={"Хороший ноутбук"}
            price={"1500"}
        />
        <ProductCard
         image={"📱"}
         name={"Телефон"}
         description={"Современный телефон"}
         price={"1000"}
        />
        <ProductCard
        image={"🖱️"}
        name={"Мышка"}
        description={"Современная мышка"}
        price={"200"}
        />
        <ProductCard
        image={"⌨️"}
        name={"Клавиатура"}
        description={"Механическая клавиатура"}
        price={"240"}
        />
        <ProductCard
        image={"🎧"}
        name={"Наушники"}
        description={"Хорошие наушники"}
        price={"400"}
        />
        <ProductCard
        image={"🖥️"}
        name={"Монитор"}
        description={"Игровой монитор 240Hz"}
        price={"1200"}
        /> 
    </div>
    )
}

export default ProductList