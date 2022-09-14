import {
  GET_ALL_PROJECTS,
} from '../actions/actiontype';

const initialState = {
  allProjects: [],
};

const projectsReducer = function(state = initialState, { type, payload }) {
  switch(type) {
    case GET_ALL_PROJECTS:
      return {
        ...state,
        allProjects: payload
      }
    default:
      return state;
  }
}

export default projectsReducer;