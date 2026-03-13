import { FetchCreateProducto } from '../../services/productos.service'
import { useMutation, useQueryClient } from '@tanstack/react-query';

// mutate
const UseCreateProducto = ()=> {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: FetchCreateProducto,
        
        // ---------- ESTA ES LA FORMA CON ONSETTLE ------------.

        // 1. Antes de enviar al servidor.
        onMutate: async (newProducto) => {

            await queryClient.cancelQueries({ queryKey: ['productos'] }); // Cancelo las búsquedas para no generar sobre peticiones GET.

            const previousProductos = queryClient.getQueryData(['productos']); // Obtengo los datos anteriores a la mutación (los almacenados en cache).

            queryClient.setQueryData(['productos'], (old = []) => {

                return [
                    ...old,
                    {
                        newProducto,
                        id: Date.now(),
                        optimistic: true,
                    }
                ]
            })

            return { previousProductos };
        },

        // 2. En caso de un error, regresar a la versión anterior  

        onError: (error, newProducto, context) => { queryClient.setQueryData(['productos'], context.previousProductos) },
        
        onSettled: () => { queryClient.invalidateQueries({ queryKey: ['productos'] }) }

        // ---------- ESTA ES LA FORMA CON ONSUCCESS -----------.
        // 1. Se llama a onsuccess y adentro se usa queryClient.invalidateQueries para invalidar la cache y volver a hacer la petición GET para obtener los datos actualizados.     
        // onSuccess: ()=> {

        //     queryClient.invalidateQueries({ queryKey: ['productos']})
        // }

    });

}

export default UseCreateProducto;