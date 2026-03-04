import Header from '../layouts/Header.jsx'
import FormElements from '../components/FormElements.jsx'

const Login = ()=> {

    return (
        <div className="p-2 flex flex-col justify-evenly h-dvh max-w-2xl m-auto bg-gray-300/50 shadow-2xl">
            <Header />
            <FormElements id="form_login">

                <div className='flex flex-col gap-3 w-full p-2'>
                    <div className='flex flex-col gap-2'>

                        <FormElements.LabelForm name="email" content="Correo:" />
                        <FormElements.InputForm type="email" name="email"/>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <FormElements.LabelForm name="password" content="Contraseña:" />
                        <FormElements.InputForm type="password" name="password" />
                    </div>
                </div>

                <input type="submit" className="bg-blue-600 text-white p-2 rounded-xl"/>
            </FormElements>
        </div>
    )
};

export default Login;