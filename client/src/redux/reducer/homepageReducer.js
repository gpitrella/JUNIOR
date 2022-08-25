import {
  FILTER_PROJECTS
} from '../actions/actiontype';

const initialState = {
  filterProjects: []
};

const homepageReducer = function(state = initialState, { type, payload }) {
  switch(type) {
    case FILTER_PROJECTS:
      return {
        ...state,
        filterProjects: payload
      }

    default:
      return state;
  }
}

export default homepageReducer;