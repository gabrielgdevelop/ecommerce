import UseProductos from '../hooks/productos/useProductos';
import Messages from './Messages'
import ProductItem from './ProductItem';

const ProductosList = ()=> {

    const { data, isLoading, isError, error } = UseProductos();

    if (isLoading) return <Messages.IsLoading message="Cargando productos..." />
    if (isError) return <Messages.IsError error={error.message} />
    if (data.length === 0) return <Messages.IsEmpty message="No hay productos disponibles" />
    
    return (

        <ul>

            {
                data.map(producto => (
                    <li key={producto.id}> 
                    
                        <ProductItem nombre={producto.nombre} precio={producto.precio} descripcion={producto.descripcion} />
                    </li >
                ))
            }
        </ul>

    )

}   

export default ProductosList;