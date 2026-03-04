import ProductIcon from '../assets/imgs/product-icon.webp'

const ProductItem = ({nombre, precio, descripcion}) => {

    return (
        <article className="flex h-42 items-center">
            <div>
                <img src={ProductIcon} alt="" 
                className="min-h-24 min-w-24 object-contain h-24 w-24"/>
            </div>
            <div className="flex flex-col gap-2 p-2 bg-gray-300/60 w-full">
                <header className="flex gap-1 w-full">
                    <p className="text-lg font-normal">{nombre} - {descripcion}</p>
                </header>
                <p className="text-2xl font-bold text-green-500">${precio}</p>
            </div>
        </article>
    )
}

export default ProductItem;