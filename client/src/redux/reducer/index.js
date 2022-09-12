import {
  FILTER_PROJECTS
} from '../actions/actiontype';

const initialState = {
  filterProjects: []
};

// const rootReducer = (state = initialState, action) => {
const rootReducer = (state = initialState, { type, payload }) => {
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

export default rootReducer;

// export default homepageReducer;