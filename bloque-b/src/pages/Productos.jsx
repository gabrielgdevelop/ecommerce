import ProductosList from '../components/ProductosList';
import BtnCreate from '../components/BtnCreate'

const Productos = ()=> {

    return (

        <>
            <h1 className="text-2xl  p-2 border-t text-blue-500 text-center mt-5 border-b border-blue-500">Productos</h1>
            <BtnCreate />
            <ProductosList />        
        </>
    )
}

export default Productos;