import {
  FILTER_PROJECTS,
  GET_USER,
  LOG_IN,
  LOG_OUT,
  LOG_IN_ERROR,
  SIGN_UP,
  SIGN_IN_GOOGLE,
  SIGN_IN_GITHUB,
  OPEN_MESSSAGE_MUST_LOGIN,
  CLOSE_MESSSAGE_MUST_LOGIN,
  GET_ALL_USERS,
  CLOSE_MODAL_INFO_COLLABORATOR,
  OPEN_MODAL_INFO_COLLABORATOR,
} from '../actions/actiontype';
import { LocalStorage } from '../../util/localStorage';

const initialState = {
  filterProjects: [],
  auser: {},
  user: {},
  logInError: {},
  mustLoginMessage: { open: false, msg: 1 },
  allUsers: [],
  modalInfoCollaborator: false
};


const homepageReducer = function(state = initialState, { type, payload }) {
  switch(type) {
    case FILTER_PROJECTS:
      return {
        ...state,
        filterProjects: payload
      }
    case GET_USER:
      return {
        ...state,
        auser: payload
      }
    case LOG_IN:
      LocalStorage.saveItem('user', payload);      
      return {
        ...state,
        user: payload,
      } 
    case SIGN_IN_GOOGLE:
      LocalStorage.saveItem('user', payload);      
      return {
        ...state,
        user: payload,
      }

    case SIGN_IN_GITHUB:
      LocalStorage.saveItem('user', payload);      
      return {
        ...state,
        user: payload,
      }

    case SIGN_UP:
      LocalStorage.saveItem('user', payload);      
      return {
        ...state,
        user: payload,
      }

    case LOG_OUT:
      return { 
        ...state,
        auser: {},
        user: payload
      }

    case LOG_IN_ERROR: 
      return {
        ...state,
        logInError: payload
      }
    
    case OPEN_MESSSAGE_MUST_LOGIN:
      return {
        ...state,
        mustLoginMessage: payload
      } 
      
    case CLOSE_MESSSAGE_MUST_LOGIN:
      return {
        ...state,
        mustLoginMessage: { open: false, msg: 1 }
      }
      
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload
      }

    case OPEN_MODAL_INFO_COLLABORATOR:
      return {
        ...state,
        modalInfoCollaborator: true
      }

    case CLOSE_MODAL_INFO_COLLABORATOR:
      return {
        ...state,
        modalInfoCollaborator: false
      }

    default:
      return state;
  }
}

export default homepageReducer;