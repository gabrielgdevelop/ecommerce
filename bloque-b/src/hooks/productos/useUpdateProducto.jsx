import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FetchUpdateProductos } from "../../services/productos.service";

const useUpdateProducto = (data) => {
    
    const queryClient = useQueryClient();
    
    return useMutation({

        mutationFn: ()=> FetchUpdateProductos(data.id, data),

        onMutate: async (newData) => {

            await queryClient.cancelQueries({ queryKey: ['productos'] });
            const previousData = queryClient.getQueryData(['productos']);

            queryClient.setQueryData(['productos'], (old = []) => {

                return old.map(producto => 

                    producto.id === newData.id ? 
                    { ...producto, ...newData } 
                    : producto
                )
            });

            return { previousData }
        },

        onError: (err, newData, context) => {

            queryClient.setQueryData(['productos'], context.previousData);
        },

        onSettled: () => {

            queryClient.invalidateQueries({ queryKey: ['productos'] });
        }
    })
}

export default useUpdateProducto;