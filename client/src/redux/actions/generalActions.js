import axios from 'axios';

import {
  // FILTER_PROJECTS,
  GET_USER,
  LOG_IN,
  LOG_OUT,
  LOG_IN_ERROR,
  BASE_URL,
  SIGN_UP,
  SIGN_IN_GOOGLE
} from './actiontype';


// Change color Theme - Night / Day:
// export const changeTheme = function(theme) {
//   return {
//     type: CHANGE_THEME,
//     payload: theme
//   }
// }


// Filter Projects
// export function filterProjects(){
//   return function(dispatch){
//       return axios.get(`${BASE_URL}/filters`, { teches, payment })
//                   .then(projects => dispatch({ type: FILTER_PROJECTS, payload: product.data[0]}))
//                   .catch(error => console.log(error))
//   }
// };

// Take Auth User
export const getUser = function() {
  return function(dispatch){
    return axios.get(`${BASE_URL}/auth/login/success`)
                .then((response) => {
                  console.log(response);
                  if (response.status === 200) return response;
                  throw new Error("authentication has been failed!");
                })
                .then((resObject) => dispatch({ type: GET_USER, payload: resObject.user}))      
                .catch((err) => {
                  console.log(err);
                });
  }
};


// Log In User
export const logIn = function(email, password) {
  return function(dispatch){
    return axios.post(`${BASE_URL}/auth/signin`, {email, password})
                .then(data => dispatch({ type: LOG_IN, payload: data.data}))
                .catch(error => dispatch({ type: LOG_IN_ERROR, payload: error.response}))
  }
};

// Log In User
export const signinGoogle = function(auser) {
  return function(dispatch){
    return axios.post(`${BASE_URL}/auth/google`, {auser})
                .then(data => dispatch({ type: SIGN_IN_GOOGLE, payload: data.data}))
                .catch(error => dispatch({ type: LOG_IN_ERROR, payload: error.response}))
  }
};

// SignUp User
export const signUp = function(name, email, password, confirm_password) {
  return function(dispatch){
    return axios.post(`${BASE_URL}/auth/signup`, {name, email, password, confirm_password})
                .then(data => dispatch({ type: SIGN_UP, payload: data.data}))
                .catch(error => dispatch({ type: LOG_IN_ERROR, payload: error.response}))
  }
};

// Log Out User
export const logOut = function() {
  return function(dispatch){
    return axios.post(`${BASE_URL}/auth/logout`)
                .then(data => dispatch({ type: LOG_OUT, payload: data.data}))
                .catch(error => dispatch({ type: LOG_IN_ERROR, payload: error.response}))
  }
};