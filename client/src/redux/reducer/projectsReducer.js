import {
  GET_ALL_PROJECTS,
  FILTER_PROJECTS,
  CREATE_PROJECTS,
  SHOW_MODAL_ADD_IMAGE,
  CLOSE_MODAL_ADD_IMAGE,
  SELECTPAG,
  GET_PROJECTS_BY_USER
} from '../actions/actiontype';

const initialState = {
  allProjects: [],
  newProject: {},
  pagina: 1,
  projectByUser: [],
  numberAllProjects: 0
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
    
    case GET_PROJECTS_BY_USER: 
      return {
        ...state,
        projectUser: payload
      }
      
    default:
      return state;
  }
}

export default projectsReducer;