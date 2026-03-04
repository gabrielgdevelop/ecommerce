
const FormElements = ({children, name})=> {

    return (
        <form id={name}
        className="flex flex-col gap-3 p-2 w-full rounded-lg h-[50dvh] justify-evenly">
            {children}
        </form>
    )
}
// Label para el sistema

FormElements.LabelForm = ({name, content})=> {

    return (

        <label htmlFor={name}
        className="font-medium text-blue-600">{content}</label>
        
    )
}
// Input para el sistema
FormElements.InputForm = ({type, name})=> {

    return (
        <>
            <input type={type} name={name} id={name}
            className="border-blue-600 border-2 focus-visible:outline-none rounded-md px-3 py-2"/>
        </>
    )
}

export default FormElements;