import axios from 'axios';

import {
  GET_ALL_PROJECTS,
  GET_ALL_TECHS,
  FILTER_PROJECTS,
  UPDATE_STATUS_FILTER,
  CREATE_PROJECTS,
  SHOW_MODAL_ADD_IMAGE,
  CLOSE_MODAL_ADD_IMAGE,
  BASE_URL,
  SELECTPAG,
  GET_PROJECTS_BY_USER
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
  return function(dispatch){
      return axios.post(`${BASE_URL}/filters`, filters)
                  .then(projects => dispatch({ type: FILTER_PROJECTS, payload: projects.data }))
                  .catch(error => console.log(error))
  }
};

// Update Status Filter Projects
export function updateStatusFilter(data){
  return function(dispatch){
      return dispatch({ type: UPDATE_STATUS_FILTER, payload: data })
  }
};

// Pagination
export function selectPag(payload) {
  return {
    type: SELECTPAG,
    payload,
  };
}

// Get Projects by USER
export function getProjectsByUser(id){
  return function(dispatch){
    console.log('como llega al redux:', id)
      return axios.post(`${BASE_URL}/user/projects`, id)
                  .then(project => dispatch({ type: GET_PROJECTS_BY_USER, payload: project.data }))
                  .catch(error => console.log(error))
  }
};

// axios.post(url, data, {
//   'headers': {
//     'Authorization': 'Bearer ' + jwtStr
//   });

// CreateProject
export function createProject(dataProject){
  return function(dispatch){
      return axios.post(`${BASE_URL}/projects/newproject`, dataProject)
                  .then(project => dispatch({ type: CREATE_PROJECTS, payload: project.data }))
                  .catch(error => console.log(error))
  }
};

// Modal para subir imagen:
export function showModalAddImage() {
  return {
    type: SHOW_MODAL_ADD_IMAGE
  }
}


export function closeModalAddImage() {
  return {
    type: CLOSE_MODAL_ADD_IMAGE
  }
}




