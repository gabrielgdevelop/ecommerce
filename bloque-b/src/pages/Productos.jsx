import ProductosList from '../components/ProductosList';
import BtnCreate from '../components/BtnCreate'
import IconShop from '../assets/imgs/icons/shop-icon.png'

const Productos = ()=> {

    return (

        <div className='font-[sans-serif] flex flex-col gap-3 p-2'>
            <header className="flex justify-between items-center p-3">

                <h1 className="text-3xl font-bold text-(--color-blue)">Productos</h1>
                <div id="profile_img" className="bg-(--color-yellow) p-2 rounded-full w-15 h-15"></div>
            </header>
            <div className="bg-(--color-yellow) h-35 p-3 min-w-60 m-auto flex justify-center items-center rounded-xl shadow-lg">
                <h2 className="text-2xl text-black/70">Los mejores productos al mejor precio</h2>
                <img src={IconShop} alt="" className="h-15 w-15"/>
            </div>
            <BtnCreate />
            <ProductosList />        
        </div>
    )
}

export default Productos;