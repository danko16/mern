import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/type';

const initState = {
    token: localStorage.getItem('token'),
    isAuthorize: null,
    isLoading: false,
    user: {
        id: null,
        name: null,
        email: null
    }
};

export default function(state=initState,action){
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };    
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                user: {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email
                },
                isAuthorize: true
            };               
        case LOGIN_SUCCESS:      
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isAuthorize: true,
                isLoading: false
            }; 
        case AUTH_ERROR:          
        case LOGOUT_SUCCESS:    
        case LOGIN_FAIL:    
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                isLoading: false,
                isAuthorize: false
            };          
        default:
            return state;
    }
}