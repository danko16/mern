import {combineReducers} from 'redux';
import projectReducer from './projectReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
   project: projectReducer,
   auth: authReducer,
   error: errorReducer
});

export default rootReducer;
