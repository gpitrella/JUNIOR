import {
  GET_ALL_TECHS,
  UPDATE_STATUS_FILTER
} from '../actions/actiontype';

const initialState = {
  allTechs: [],
  tech: "All",
  payment: "All"
};

const filterProjectsReducer = function(state = initialState, { type, payload }) {
  switch(type) {
    case GET_ALL_TECHS:
      return {
        ...state,
        allTechs: payload
      }
      
    case UPDATE_STATUS_FILTER:
      return {
        ...state,
        [payload.field]: payload.newValue
      }
    default:
      return state;
  }
}

export default filterProjectsReducer;