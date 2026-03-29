import FetchProductosService from '../../services/productos.service'
import { useQuery } from '@tanstack/react-query';

const UseProductos = ()=> {

    const { data, isLoading, isError, error } = useQuery({

        queryKey: ['productos'],
        queryFn: FetchProductosService,
        retry: 1,
    });
    
    return { data, isLoading, isError, error}
};

export default UseProductos;