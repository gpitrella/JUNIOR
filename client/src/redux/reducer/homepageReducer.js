import {
  FILTER_PROJECTS,
  GET_USER,
  LOG_IN,
  LOG_OUT,
  LOG_IN_ERROR,
  CLEAN_LOG_IN_ERROR,
  SIGN_UP,
  SIGN_IN_GOOGLE,
  SIGN_IN_GITHUB,
  SEND_EMAIL,
  CLEAN_SEND_EMAIL,
  OPEN_MESSSAGE_MUST_LOGIN,
  CLOSE_MESSSAGE_MUST_LOGIN,
  GET_ALL_USERS,
  CLOSE_MODAL_INFO_COLLABORATOR,
  OPEN_MODAL_INFO_COLLABORATOR,
  UPDATE_DATA_USER,
  LOAD_STORAGE,
  OPEN_MODAL_SEND_INVITATION
} from '../actions/actiontype';
import { LocalStorage } from '../../util/localStorage';

const initialState = {
  filterProjects: [],
  user: {},
  logInError: {},
  mustLoginMessage: { open: false, msg: 1 },
  allUsers: [],
  modalInfoCollaborator: false,
  passRecoveryMessage: {},
  idProject: '',
  updateDataUsersMsg: '',
  modalInvitationProject: false,
  emailUserToInvite: ''
};


const homepageReducer = function(state = initialState, { type, payload }) {
  switch(type) {
    case FILTER_PROJECTS:
      return {
        ...state,
        filterProjects: payload
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
      LocalStorage.removeItem('user');
      return { 
        ...state,
        user: {},
      }

    case LOG_IN_ERROR: 
      return {
        ...state,
        logInError: payload
      }

    case CLEAN_LOG_IN_ERROR:
      return {
        ...state,
        logInError: {}
      }
    case SEND_EMAIL: 
      return {
        ...state,
        passRecoveryMessage: payload
      }

    case CLEAN_SEND_EMAIL:
      return {
        ...state,
        passRecoveryMessage: {}
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
        modalInfoCollaborator: true,
        idProject: payload
      }

    case CLOSE_MODAL_INFO_COLLABORATOR:
      return {
        ...state,
        modalInfoCollaborator: false,
        modalInvitationProject: false,
      }
    
    case UPDATE_DATA_USER:
      return {
        ...state,
        user: payload,
        updateDataUsersMsg: payload.msg
      }
      
      case LOAD_STORAGE: {
        let user = LocalStorage.getItem('user');
        return {
          ...state,
          user: user ? user : state.user,
        }
      }

      case OPEN_MODAL_SEND_INVITATION:
        return {
          ...state,
          modalInvitationProject: true,
          idUserToInvite: payload
        }

    default:
      return state;
  }
}

export default homepageReducer;