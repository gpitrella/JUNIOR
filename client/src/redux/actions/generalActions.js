import axios from 'axios';
import { getHeaderWithToken } from '../../util/util';
import {
  // FILTER_PROJECTS,
  GET_USER,
  LOG_IN,
  LOG_OUT,
  LOG_IN_ERROR,
  CLEAN_LOG_IN_ERROR,
  SIGN_UP,
  SEND_EMAIL,
  CLEAN_SEND_EMAIL,
  UPDATE_PASSWORD,
  SIGN_IN_GOOGLE,
  SIGN_IN_GITHUB,
  OPEN_MESSSAGE_MUST_LOGIN,
  CLOSE_MESSSAGE_MUST_LOGIN,
  GET_ALL_USERS,
  OPEN_MODAL_INFO_COLLABORATOR,
  CLOSE_MODAL_INFO_COLLABORATOR,
  UPDATE_DATA_USER,
  LOAD_STORAGE,
  OPEN_MODAL_SEND_INVITATION
} from './actiontype';
import dotenv from "dotenv";
dotenv.config()

const BASE_URL = process.env.REACT_APP_BASE_URL_FLY || "http://localhost:4001";


// Log In User
export const logIn = function(email, password) {
  return function(dispatch){
    return axios.post(`${BASE_URL}/auth/signin`, {email, password})
                .then(data => dispatch({ type: LOG_IN, payload: data.data}))
                .catch(error => dispatch({ type: LOG_IN_ERROR, payload: error.response}))
  }
};

// Log In User Google Account
export const signinGoogle = function(auser) {
  return function(dispatch){
    console.log('AUSER ACTIONS:', auser)
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


// CLEAN_LOG_IN_ERROR
export function cleanLogInError(){
  return function(dispatch){
    return dispatch({ type: CLEAN_LOG_IN_ERROR })
  }
};

// Recover Email 
export const sendEmail = function(email) {
  return function(dispatch){
    return axios.put(`${BASE_URL}/password/recoverpassword`, { email })
    .then(data => dispatch({ type: SEND_EMAIL, payload: data.data}))
    .catch(error => dispatch({ type: LOG_IN_ERROR, payload: error.response}))
  }
}; 

// CLEAN_SEND_EMAIL
export function cleanSendEmail(){  /// NO FUNCIONA
  return {
       type: CLEAN_SEND_EMAIL 
  };
};

// Update Password 
export const updatePassword = function(newpassword, token) {
  return function(dispatch){
    return axios.put(`${BASE_URL}/password/newpassword/${newpassword}?token=${token}`, getHeaderWithToken(token))
                .then(data => console.log(data))
                .catch(error => dispatch({ type: LOG_IN_ERROR, payload: error.response}))
  }
};


// Log Out User
export const logOut = function() {
  return function(dispatch){
    return dispatch({ type: LOG_OUT })
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

// Take All Users
export function getAllUsers(){
  return function(dispatch){
      return axios.get(`${BASE_URL}/user/allusers`)
                  .then(users => dispatch({ type: GET_ALL_USERS, payload: users.data }))
                  .catch(error => console.log(error))
  }
};
                  
// Open Modal Send Info Collaborate to Project Creator
export function openModalInfoCollaborator(idProject){
  return function(dispatch){
      return dispatch({ type: OPEN_MODAL_INFO_COLLABORATOR, payload: idProject})
  }
}; 

// Close Message Must Login
export function closeModalInfoCollaborator(){
  return function(dispatch){
      return dispatch({ type: CLOSE_MODAL_INFO_COLLABORATOR })
  }
};

// Update Data USER 
export function updateDataUsers(id, data){
  return function(dispatch){
      return axios.put(`${BASE_URL}/user/update/${id}`, data)
                  .then(users => dispatch({ type: UPDATE_DATA_USER, payload: users.data }))
                  .catch(error => console.log(error))
  }
};

// LOAD USER STORAGE
export const loadStorage = function() {
  return {
    type: LOAD_STORAGE
  }
};

// Open Modal Send Invitation to Project 
export function openModalInvitationProject(emailUserToInvite){
  return function(dispatch){
      return dispatch({ type: OPEN_MODAL_SEND_INVITATION, payload: emailUserToInvite})
  }
};