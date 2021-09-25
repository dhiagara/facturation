
import axios from 'axios';

import { GET_PROFILE,PROFILE_LOADING, PROFILE_NOT_FOUND,CLEAR_CURRENT_PROFILE,GET_PROFILES, GET_ERRORS} from './Types'

// GET CURRENT PROFILE 

export const getcurrentprofile = () =>  dispatch => {
    dispatch (setprofileloading());
    axios.get ('http://localhost:4000/addaccount')
    .then( res =>
        dispatch ({
            type : GET_PROFILE,
            payload : res.data
        })
        )
        .catch ( err => dispatch ({
            type : GET_PROFILE,
            payload : {}
            }))

    
}

// create profile 
 export const  createProfile = (profileData ,history) => dispatch => {
     axios
     .post('http://localhost:4000/addaccount', profileData)
     .then ( res => history.push('/Account'))
     .catch ( 
         err =>
         dispatch ({
             type : GET_ERRORS,
             payload : err.response.data
         })
     )
 }

// profile loading 
export const setprofileloading = () => {
    return {
        type :PROFILE_LOADING
    }
}
// clear profile
export const clearcurrentprofile = () => {
    return {
        type :CLEAR_CURRENT_PROFILE
    }
}