import {
  FILTER_PROJECTS,
  GET_USER
} from '../actions/actiontype';

const initialState = {
  filterProjects: [],
  auser: {},

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

    default:
      return state;
  }
}

export default homepageReducer;