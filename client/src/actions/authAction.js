import axios from 'axios';
import {returnErrors} from './errorAction';

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './type';

export const loadUser = () => (dispatch, getState) => {
   
    dispatch({type: USER_LOADING});  

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(user => {
            dispatch({
                type: USER_LOADED,
                payload: user.data
            });
        })
        .catch(err=>{
            dispatch(returnErrors(err.response.data.msg, err.response.status, 'GET_PROJECT_FAIL'));
            dispatch({
                type: AUTH_ERROR
            });
        })
}

export const registerUser = ({firstName, lastName, email, password}) => (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({firstName, lastName, email, password});

    axios.post('/api/user', body, config)
        .then(user => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: user.data
            })
        })
        .catch(err=>{
            dispatch(returnErrors(err.response.data.msg, err.response.status, 'REGISTER_FAIL'));        
            dispatch({
                type: REGISTER_FAIL
            })
        });
}

export const loginUser = ({email, password}) => (dispatch) => {
    dispatch({type: USER_LOADING});

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({email,password});

    axios.post('/api/auth', body,config)
        .then(user=>{
            dispatch({
                type: LOGIN_SUCCESS,
                payload: user.data
            });
        })
        .catch(err=>{
            dispatch(returnErrors(err.response.data.msg, err.response.status, 'LOGIN_FAIL'));        
            dispatch({
                type: LOGIN_FAIL
            })
        });
}

export const logoutUser = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const tokenConfig = (getState) => {
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    if(token){
        config.headers['x-auth-token'] = token;
    }

    return config;
}