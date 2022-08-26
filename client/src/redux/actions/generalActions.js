import axios from 'axios';

import {
  FILTER_PROJECTS,
  GET_USER,
} from './actiontype';


// Change color Theme - Night / Day:
// export const changeTheme = function(theme) {
//   return {
//     type: CHANGE_THEME,
//     payload: theme
//   }
// }


// Filter Projects
// export function filterProjects(){
//   return function(dispatch){
//       return axios.get(`${BASE_URL}/filters`, { teches, payment })
//                   .then(projects => dispatch({ type: FILTER_PROJECTS, payload: product.data[0]}))
//                   .catch(error => console.log(error))
//   }
// };

// Take Auth User
export const getUser = function(uauth) {
  return {
    type: GET_USER,
    payload: uauth
  }
}