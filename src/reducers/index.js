import { combineReducers } from 'redux';
import  authreducer from './authreducer';
import ErrorsReducer from './ErrorsReducer'
import profilereducer from './profilereducer'



export default combineReducers ({ 
    auth : authreducer,
    errors: ErrorsReducer,
    profile : profilereducer
});