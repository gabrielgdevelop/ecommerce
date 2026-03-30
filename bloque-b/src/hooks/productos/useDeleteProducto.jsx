import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FetchDeleteProducto } from '../../services/productos.service';

const useDeleteProducto = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: FetchDeleteProducto,

        onMutate: async (id) => {

            await queryClient.cancelQueries({ queryKey : ['productos'] });

            const previousProductos = queryClient.getQueryData(['productos']);

            queryClient.setQueryData(['productos'], (old = []) => {

                old.filter(producto => producto.id !== id);
            });

            return { previousProductos };
        },

        onError : (error, id, context) => {

            queryClient.setQueryData(['productos'], context.previousProductos);
        },

        onSettled: () => {

            queryClient.invalidateQueries({ queryKey : ['productos'] });
        }

    })
}

export default useDeleteProducto;