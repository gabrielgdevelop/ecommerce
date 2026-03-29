import UseProductos from '../hooks/productos/UseProductos';
import Messages from './Messages'
import ProductItem from './ProductItem';

const ProductosList = ()=> {

    const { data, isLoading, isError, error } = UseProductos();
    
    if (isLoading) return <Messages.IsLoading message="Cargando productos..." />
    if (isError) return <Messages.IsError message="Error al obtener los productos" />
    if (!data) return <Messages.IsEmpty message="No hay productos disponibles" />
    return (

        <ul>
            {
                data.map(producto => (
                    <li key={producto.id}> 
                        
                        <ProductItem nombre={producto.nombre} precio={producto.precio} descripcion={producto.descripcion} id={producto.id} disponible={producto.disponible}/>
                    </li >
                ))
            }
        </ul>

    )

}   

export default ProductosList;