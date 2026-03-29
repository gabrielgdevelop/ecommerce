import ProductIcon from '../assets/imgs/product-icon.webp'
// HOOKS Personalizados
import { use, useState } from 'react';
import useUpdateProducto from '../hooks/productos/useUpdateProducto';

const ProductItem = ({nombre, precio, descripcion, id, disponible}) => {
    const [openDialog, setOpenDialog] = useState(false);
    const { mutate, isPending, isError } = useUpdateProducto();
    const [form, setForm] = useState({
        id,
        nombre,
        descripcion,
        precio,
        disponible
    });
    const handleSubmit = (e) => {
        

        e.preventDefault();
        
        mutate(form.id);

        setOpenDialog(false);
    }

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
                <button className="bg-yellow-400 p-2 rounded" onClick={() => setOpenDialog(!openDialog)}>editar</button>
                <dialog id={`dialog-${id}`} open={openDialog}
                className="bg-black/60 w-full h-full">
                    <div className="bg-white/90">

                        <h2>edita el producto</h2>
                        <form className="flex flex-col gap-2">

                            <input type="text" placeholder="Gafas de sol"
                            className="p-2 bg-blue-500/40 rounded" value={form.nombre}
                            onChange={(e)=> setForm({...form, nombre: e.target.value})}/>
                            <input type="text" placeholder="Descripción"
                            className="p-2 bg-blue-500/40 rounded" value={form.descripcion}
                            onChange={e => setForm({...form, descripcion: e.target.value})}/>
                            <input type="number" step="any" placeholder="Precio"
                            className="p-2 bg-blue-500/40 rounded" value={form.precio}
                            onChange={e => setForm({...form, precio: e.target.value})}/>
                            <label htmlFor="select_disponibilidad">Disponibilidad:</label>
                            <select name="" id="select_disponibilidad">
                                <option value="1">SI</option>
                                <option value="0">NO</option>
                            </select>
                            <div>
                                <input type="submit" value={'Guardar'} onClick={handleSubmit}/>
                                <input type="button" onClick={() => setOpenDialog(!openDialog)} value={'cancelar'}/>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </article>
        
    )
}

export default ProductItem;