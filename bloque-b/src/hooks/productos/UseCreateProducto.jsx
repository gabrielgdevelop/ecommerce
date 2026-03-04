import { FetchCreateProducto } from '../../services/productos.service'
import { useMutation, useQueryClient } from '@tanstack/react-query';

// mutate
const UseCreateProducto = ()=> {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: FetchCreateProducto,
        onSuccess: ()=> {

            queryClient.invalidateQueries({ queryKey: ['productos']})
        }

    });

}

export default UseCreateProducto;