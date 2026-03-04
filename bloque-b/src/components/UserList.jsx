// COMPONENTS
import UserService from '../services/users.service.jsx'
import Messages from '../components/Messages.jsx'
// HOOKS
import { useQuery } from '@tanstack/react-query'


const UserList = ()=> {

    const { data, isLoading, isError, error } = useQuery({

        queryKey : ['data'],
        queryFn : UserService
    });

    if (isLoading) return <Messages.IsLoading message={'Cargando datos...'}/>
    if (isError) return <Messages.IsError error={error} />
    // if (data.length === 0) return <p>No hay datos</p>

    return (

        <>

            <h1>Información de Laravel</h1>
            <span>{data}</span>
            
        </>

    )
}

export default UserList