import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FetchUpdateProductos } from "../../services/productos.service";

const useUpdateProducto = () => {
    
    const queryClient = useQueryClient();
    
    return useMutation({

        // 1. petición fetchs
        mutationFn: FetchUpdateProductos,
        // 2. optimización de la UI (obtener estado viejo y obtener el estado nuevo para trabajar con ambos casos)
        onMutate: async (updateData) => {

            await queryClient.cancelQueries({ queryKey: ['productos'] });
            const previousData = queryClient.getQueryData(['productos']);

            queryClient.setQueryData(['productos'], (old = []) => {

                return old.map(producto => 

                    producto.id === updateData.id ? 
                    { ...producto, ...updateData } 
                    : producto
                )
            });

            return { previousData }
        },
        // 3. En caso de error, volver al estado anterior
        onError: (err, updateData, context) => {

            queryClient.setQueryData(['productos'], context.previousData);
        },
        // 4. En caso de éxito o error, invalidar la consulta para obtener los datos actualizados
        onSettled: () => {

            queryClient.invalidateQueries({ queryKey: ['productos'] });
        }
    })
}

export default useUpdateProducto;