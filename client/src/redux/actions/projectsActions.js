import axios from 'axios';

import {
  GET_ALL_PROJECTS,
  GET_ALL_TECHS,
  FILTER_PROJECTS,
  UPDATE_STATUS_FILTER,
  BASE_URL
} from './actiontype';



// Get all Projects
export function getAllProjects(){
  return function(dispatch){
      return axios.get(`${BASE_URL}/projects/allprojects`)
                  .then(projects => dispatch({ type: GET_ALL_PROJECTS, payload: projects.data }))
                  .catch(error => console.log(error))
  }
};

// Get all Techs
export function getAllTechs(){
  return function(dispatch){
      return axios.get(`${BASE_URL}/tech/alltechs`)
                  .then(projects => dispatch({ type: GET_ALL_TECHS, payload: projects.data }))
                  .catch(error => console.log(error))
  }
};

// Filter Projects
export function updateFilterProjects(filters){
  console.log('redux: filtros para ruta', filters)
  return function(dispatch){
      return axios.post(`${BASE_URL}/filters`, filters)
                  .then(projects => dispatch({ type: FILTER_PROJECTS, payload: projects.data }))
                  .catch(error => console.log(error))
  }
};

// {
//   "teches": ["React"],
//   "payment": false
// }

// Update Status Filter Projects
export function updateStatusFilter(data){
  return function(dispatch){
    console.log('como llega al redux:', data)
      return dispatch({ type: UPDATE_STATUS_FILTER, payload: data })
  }
};




