import axios from 'axios';
import dotenv from "dotenv";
import {
  GET_ALL_USERS,
  GET_USER_BY_ID,
} from './actiontype';
dotenv.config();

const BASE_URL = process.env.REACT_APP_BASE_URL_FLY || "http://localhost:4001";

// Get all Users
export function getAllUsers(){
    return function(dispatch){
        return axios.get(`${BASE_URL}/user/allusers`)
                    .then(users => dispatch({ type: GET_ALL_USERS, payload: users.data }))
                    .catch(error => console.log(error))
    }
  };
  // Get Projects by ID
  export function getUserById(id){
    return function(dispatch){
        return axios.get(`${BASE_URL}/user/${id}`)
                    .then(user => dispatch({ type: GET_USER_BY_ID, payload: user.data }))
                    .catch(error => console.log(error))
    }
  };