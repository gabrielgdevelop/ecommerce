import UseCreateProducto from '../hooks/productos/UseCreateProducto';
import { useState } from "react";

const BtnCreate = ()=> {
    const [openDialog, setOPenDialog] = useState(false);
    const { mutate, isPending, isError } = UseCreateProducto();

    const handleSubmit = e => {

        e.preventDefault();

        const form = e.target;

        const producto = {
            nombre: form[0].value,
            descripcion: form[1].value,
            precio: Number(form[2].value),
            disponible: form[3].value,
        }
        
        setOPenDialog(!openDialog);
        mutate(producto);

    }

    if (isPending) return 'a la espera bb'
    if (isError) return 'rolo de error que tienes oyo'

    return (
        <>
        
            <button onClick={()=> setOPenDialog(!openDialog)} className="bg-green-500 text-white p-2 cursor-pointer rounded-md mt-5">Crear Producto</button>

            <dialog open={openDialog} className="absolute w-full h-full top-0 bg-black/30">
                

                    <button onClick={()=> setOPenDialog(!openDialog)}
                    className="bg-black p-2 px-5 rounded text-white">X</button>
                
                <div className="flex flex-col items-center min-h-[50dvh] justify-center gap-3 p-5 bg-white">
                    <h2>Formulario para crear productos</h2>
                    <form id="form-create-product" onSubmit={handleSubmit} 
                    className="flex flex-col gap-3">

                        {/* <input type="text" placeholder="Gafas de sol" /> */}
                        <input type="text" placeholder="Gafas de sol"
                        className="p-2 bg-blue-500/40 rounded"/>
                        <input type="text" placeholder="Descripción"
                        className="p-2 bg-blue-500/40 rounded"/>
                        <input type="number" step="any" placeholder="Precio"
                        className="p-2 bg-blue-500/40 rounded"/>
                        <label htmlFor="select_disponibilidad">Disponibilidad:</label>
                        <select name="" id="select_disponibilidad">
                            <option value="1">SI</option>
                            <option value="0">NO</option>
                        </select>

                        <input type="submit" 
                        className="bg-black/90 text-white p-2 rounded-md mt-5"></input>
                    </form>
                </div>
            </dialog>

        </>
    )
}

export default BtnCreate;