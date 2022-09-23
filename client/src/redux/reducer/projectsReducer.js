import {
  GET_ALL_PROJECTS,
  FILTER_PROJECTS,
  CREATE_PROJECTS,
  SHOW_MODAL_ADD_IMAGE,
  CLOSE_MODAL_ADD_IMAGE
} from '../actions/actiontype';

const initialState = {
  allProjects: [],
  newProject: {}
};

const projectsReducer = function(state = initialState, { type, payload }) {
  switch(type) {
    case GET_ALL_PROJECTS:
      return {
        ...state,
        allProjects: payload
      }
    case FILTER_PROJECTS:
      return {
        ...state,
        allProjects: payload
      }
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
    default:
      return state;
  }
}

export default projectsReducer;