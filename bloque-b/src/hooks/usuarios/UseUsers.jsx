// Acá se manejan los errores de la API
import { useEffect, useReducer } from 'react';
import UserService from '../../services/users.service';

const initialValue = {
    status: 'idle',
    data: [],
    error: null
}

function reducer (state, action) {

    switch (action.type) {

        case 'FETCH_INITIAL' :

            return {...state, error : null, status : 'loading'};
            
        case 'FETCH_SUCCESS' :

            return {...state, status : 'success', data : action.payload};

        case 'FETCH_ERROR' :
            return {...state, error : action.error, status : 'error'};
            
        default : 

            return state;
    }
}

const UseUsers = ()=> {
    const [state, dispatch] = useReducer(reducer, initialValue);

    useEffect(()=> {
        dispatch({type : 'FETCH_INITIAL'});

        UserService()
        .then(res => dispatch({type : 'FETCH_SUCCESS', payload : res}))
        .catch(err => dispatch({type : 'FETCH_ERROR', error : err}))

    }, []);

    return (
        
        state
    
    );

}

export default UseUsers;