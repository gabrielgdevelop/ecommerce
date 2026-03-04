

const Messages = ()=> {

}

Messages.IsLoading = ({message})=> { 

    return (
    
        <p className="p-2  text-blue-500 rounded w-fit m-auto mt-10">
            {message}
        </p>
    )
}

Messages.IsError = ({error})=> {

    return (
        <p className="p-2  text-red-500 rounded w-fit m-auto mt-10">
            {error.message}
        </p>
    )
}

Messages.IsEmpty = ({message})=> {

    return (
        <p className="p-2  text-red-500 rounded w-fit m-auto mt-10">
            {message}
        </p>
    )
}

export default Messages;