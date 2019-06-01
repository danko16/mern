import {GET_ERRORS, CLEAR_ERRORS,NOT_FOUND} from './type';

export const returnErrors = (msg, status, id = null) => {
    return { 
        type: GET_ERRORS,
        payload: {
            msg,
            status,
            id
        }
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const notFound = (isNotFound) => {
    return {
        type: NOT_FOUND,
        payload: isNotFound
    }
}