
const API = 'http://127.0.0.1:8000/api/productos'

const FetchProductosService = async ()=> {

    const res = await fetch(API);

    if (!res.ok) throw new Error('Error al obtener los productos');
    const data = await res.json();

    return data.data;
};

export const FetchCreateProducto = async producto => {

    const res = await fetch(API, {

        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
            'Accept' : 'application/json'},
        body: JSON.stringify(producto)
    });

    if (!res.ok) {
        const error = await res.json();
        console.log(error);
        throw new Error('Error al crear el producto')
    };
    
    const data = await res.json();
    
    return data;
}

export const FetchUpdateProductos = async (id, producto) => {

    const res = await fetch(`${API}/${id}`, {

        method: 'PUT',
        headers: {

            'Content-type': 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify(producto)
    })

    if (!res.ok) throw new Error('No se logró actualizar el producto')
}

export default FetchProductosService;
