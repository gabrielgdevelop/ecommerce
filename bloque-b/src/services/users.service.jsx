// Acá se maneja la API para obtener o pasar la información (GET, POST)


const API_URL = 'http://127.0.0.1:8000/api'

const UserService = async ()=> {

    const response = await fetch(`${API_URL}/user`, { credentials: "include" });
    if (!response.ok) throw new Error('Error al contactar a los usuarios');

    const data = await response.json();
    
    return data.data;
    
}

export default UserService;