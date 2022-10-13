import {
  GET_ALL_PROJECTS,
  FILTER_PROJECTS,
  CREATE_PROJECTS,
  SHOW_MODAL_ADD_IMAGE,
  CLOSE_MODAL_ADD_IMAGE,
  SELECTPAG,
  GET_PROJECTS_BY_USER,
  UPLOAD_IMAGE,
  UPDATE_PROJECTS,
  CLEAR_DATA_PROJECTS,
  ERROS_PROJECTS,
  ERROS_COLLABORATE,
  NEW_COLLABORATE
} from '../actions/actiontype';

const initialState = {
  allProjects: [],
  newProject: {},
  pagina: 1,
  projectByUser: [],
  numberAllProjects: 0,
  modalAddImage: {
    show: false,
    uploadedImage: ''
  },
  updateProjectResult: '',
  errorsProject: '',
  newCollaborate: {}
};

const projectsReducer = function(state = initialState, { type, payload }) {
  switch(type) {
    case GET_ALL_PROJECTS:
      return {
        ...state,
        allProjects: payload,
        numberAllProjects: payload.length
      }
    case FILTER_PROJECTS:
      return {
        ...state,
        allProjects: payload,
        pagina: 1
      }
    
    case SELECTPAG:
      return { ...state, pagina: payload };
      
    case CREATE_PROJECTS:
      return {
        ...state,
        newProject: payload
      }
    case SHOW_MODAL_ADD_IMAGE:
      return {
        ...state,
        modalAddImage: {
          ...state.modalAddImage,
          show: true,
          uploadedImage: '',
        }
      }

    case CLOSE_MODAL_ADD_IMAGE:
      return {
        ...state,
        modalAddImage: {
          ...state.modalAddImage,
          show: false,
          uploadedImage: ''
        }
      }
    case UPLOAD_IMAGE:
      return {
        ...state,
        modalAddImage: {
          ...state.modalAddImage,
          uploadedImage: payload.secure_url
        }
      }
    
    case GET_PROJECTS_BY_USER: 
      return {
        ...state,
        projectByUser: payload
      }
    
    case UPDATE_PROJECTS: 
      return {
        ...state,
        updateProjectResult: payload
      }
    
    case CLEAR_DATA_PROJECTS:
      return {
        ...state,
        updateProjectResult: '',
        errorsProject: '',
      }
    
    case ERROS_PROJECTS:
      return {
        ...state,
        errorsProject: payload,
      }

    case NEW_COLLABORATE:
      return {
        ...state,
        newCollaborate: payload,
      }

    case ERROS_COLLABORATE:
      return {
        ...state,
        errorsProject: payload,
      }

    default:
      return state;
  }
}

export default projectsReducer;