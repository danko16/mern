import {GET_ERRORS, CLEAR_ERRORS, NOT_FOUND} from '../actions/type';

const initState = {
    msg: {},
    status: null,
    id: null,
    notFound: false
};

export default function (state = initState, action) {
    switch(action.type){
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            };
        case CLEAR_ERRORS:
            return{
                msg: {},
                status: null,
                id: null
            };
        case NOT_FOUND:
            return {
                ...state,
                notFound: action.payload
            };
        default:
            return state;        
    }
};