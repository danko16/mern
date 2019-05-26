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
    user: null
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
                isAuthorize: true,
                isLoading: false,
                user: action.payload
            };               
        case LOGIN_SUCCESS:      
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
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
                isAuthorize: false,
                isLoading: false
            };          
        default:
            return state;
    }
}