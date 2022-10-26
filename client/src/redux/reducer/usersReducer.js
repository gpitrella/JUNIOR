import {
    GET_ALL_USERS,
    GET_USER_BY_ID
  } from '../actions/actiontype';
  
  const initialState = {
    allUsers: [],
    newUser: {},
    user: {},
  };
  
  const usersReducer = function(state = initialState, { type, payload }) {

    switch(type) {

        case GET_ALL_USERS:
        return {
          ...state,
          allUsers: payload
        }
     
      case GET_USER_BY_ID: 
        return {
          ...state,
          user: payload
        }
        
      default:
        return state;
    }
  }
  
  export default usersReducer;