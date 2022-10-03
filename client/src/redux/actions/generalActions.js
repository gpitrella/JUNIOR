import axios from 'axios';

import {
  // FILTER_PROJECTS,
  GET_USER,
  LOG_IN,
  LOG_OUT,
  LOG_IN_ERROR,
  BASE_URL,
  SIGN_UP,
  SIGN_IN_GOOGLE,
  SIGN_IN_GITHUB,
  OPEN_MESSSAGE_MUST_LOGIN,
  CLOSE_MESSSAGE_MUST_LOGIN,
  OPEN_MODAL_INFO_COLLABORATOR,
  CLOSE_MODAL_INFO_COLLABORATOR
} from './actiontype';

// Take Auth User
export const getUser = function() {
  return function(dispatch){
    return axios.get(`${BASE_URL}/auth/login/success`)
                .then((response) => {
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
                .catch(error => console.log(error))
  }
};

// Log In User Google Account
export const signinGoogle = function(auser) {
  return function(dispatch){
    return axios.post(`${BASE_URL}/auth/google`, { auser })
                .then(data => dispatch({ type: SIGN_IN_GOOGLE, payload: data.data}))
                .catch(error => dispatch({ type: LOG_IN_ERROR, payload: error.response}))
  }
};

// Log In User GitHub Account
export const getUserGitHub = function(code) {
  return function(dispatch){
    return axios.get(`${BASE_URL}/auth/login/github/callback/?code=${code}`)
                .then(data => dispatch({ type: SIGN_IN_GITHUB, payload: data.data}))
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

// Open Message Must Login
export function openMessageMustLogin(msg){
  return function(dispatch){
      return dispatch({ type: OPEN_MESSSAGE_MUST_LOGIN, payload: msg})
  }
}; 

// Close Message Must Login
export function closeMessageMustLogin(){
  return function(dispatch){
      return dispatch({ type: CLOSE_MESSSAGE_MUST_LOGIN })
  }
};

// Open Message Must Login
export function openModalInfoCollaborator(){
  return function(dispatch){
      return dispatch({ type: OPEN_MODAL_INFO_COLLABORATOR })
  }
}; 

// Close Message Must Login
export function closeModalInfoCollaborator(){
  return function(dispatch){
      return dispatch({ type: CLOSE_MODAL_INFO_COLLABORATOR })
  }
};