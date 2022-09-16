import {
  GET_ALL_PROJECTS,
  FILTER_PROJECTS
} from '../actions/actiontype';

const initialState = {
  allProjects: []
};

const projectsReducer = function(state = initialState, { type, payload }) {
  switch(type) {
    case GET_ALL_PROJECTS:
      return {
        ...state,
        allProjects: payload
      }
    case FILTER_PROJECTS:
      console.log('Payload filter Store:', payload);
      return {
        ...state,
        allProjects: payload
      }
    default:
      return state;
  }
}

export default projectsReducer;