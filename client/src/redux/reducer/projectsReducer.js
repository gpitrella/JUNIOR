import {
  GET_ALL_PROJECTS,
  FILTER_PROJECTS,
  CREATE_PROJECTS
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
    default:
      return state;
  }
}

export default projectsReducer;