import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./Types";
import setauthtoken from "../Utils/setauthtoken";
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom'

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("http://localhost:4000/users/signup", userData)
    .then((res) => history.push("/Signin"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login - Get User Token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("http://localhost:4000/users/login", userData)
    .then((res) => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setauthtoken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

  //Log user out
export const logoutUser = ( history) => (dispatch) => {
  // history.push('/Signin')
  window.location.href = "/Signin";
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setauthtoken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

