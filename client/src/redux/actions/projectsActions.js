import axios from 'axios';
import { getHeaderWithToken } from '../../util/util';
import {
  GET_ALL_PROJECTS,
  GET_ALL_TECHS,
  FILTER_PROJECTS,
  UPDATE_STATUS_FILTER,
  CREATE_PROJECTS,
  SHOW_MODAL_ADD_IMAGE,
  CLOSE_MODAL_ADD_IMAGE,
  SELECTPAG,
  GET_PROJECT_DETAIL,
  GET_PROJECTS_BY_USER,
  CLOUDINARY,
  UPLOAD_IMAGE,
  UPDATE_PROJECTS,
  CLEAR_DATA_PROJECTS,
  ERROS_PROJECTS,
  NEW_COLLABORATE,
  ERROS_COLLABORATE,
  GET_PROYECT_COLLABORATION_BY_USER,
  LOADING_DATA,
  GET_PROJECT_COLLABORATORS
} from './actiontype';
import dotenv from "dotenv";
dotenv.config()

const BASE_URL = process.env.REACT_APP_BASE_URL_FLY || "http://localhost:4001";


// Get all Projects
export function getAllProjects(){
  return function(dispatch){
      return axios.get(`${BASE_URL}/projects/allprojects`)
                  .then(projects => dispatch({ type: GET_ALL_PROJECTS, payload: projects.data }))
                  .catch(error => console.log(error))
  }
};

// Get Projects by ID
export function getProjectById(id){
  return function(dispatch){
      return axios.get(`${BASE_URL}/projects/${id}`)
                  .then(project => dispatch({ type: GET_PROJECT_DETAIL, payload: project.data }))
                  .catch(error => console.log(error))
  }
};

// GET PROJECT COLLABORATORS
export function getProjectCollaborators(id){
  return function(dispatch){
      return axios.get(`${BASE_URL}/projects/collaborator/${id}`)
                  .then(project => dispatch({ type: GET_PROJECT_COLLABORATORS, payload: project.data }))
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

// Get Projects by CREATED BY USER
export function getProjectsByUser(id, token){
  return function(dispatch){
      return axios.get(`${BASE_URL}/user/projects/${id}`, getHeaderWithToken(token))
                  .then(project => dispatch({ type: GET_PROJECTS_BY_USER, payload: project.data }))
                  .catch(error => console.log(error))
  }
};

// Get Projects COLABORATIVE BY USER
export function getCollaborationByUser(id){
  return function(dispatch){
      return axios.post(`${BASE_URL}/user/mycollaborations`, { id })
                  .then(project => dispatch({ type: GET_PROYECT_COLLABORATION_BY_USER, payload: project.data }))
                  .catch(error => console.log(error))
  }
};


// Create Project 
export function createProject(dataProject){
  return function(dispatch){
      return axios.post(`${BASE_URL}/projects/newproject`, dataProject)
                  .then(project => dispatch({ type: CREATE_PROJECTS, payload: project.data }))
                  .catch(error => dispatch({ type: ERROS_PROJECTS, payload: error.response.data }))
  }
};

// Cargando Datos 
export function loadingData() {
  return {
    type: LOADING_DATA
  }
};

// Modal para subir imagen:
export function showModalAddImage() {
  return {
    type: SHOW_MODAL_ADD_IMAGE
  }
};

export function closeModalAddImage() {
  return {
    type: CLOSE_MODAL_ADD_IMAGE
  }
};

export function uploadImage(formData) {
  return function(dispatch) {
    return fetch(`${CLOUDINARY}`, { method: 'POST', body: formData })
      .then(response => response.json())
      .then(data => dispatch({ type: UPLOAD_IMAGE, payload: data }))
      .catch(error => console.LOG(error));
  }
};

// UPDATE PROJECTS
export function updateProject(input){
  return function(dispatch){
      return axios.put(`${BASE_URL}/projects/updateproject`, input)
                  .then(project => dispatch({ type: UPDATE_PROJECTS, payload: project.data }))
                  .catch(error => dispatch({ type: ERROS_PROJECTS, payload: error }))
  }
};

// Clear Errors and Success Messages update Project and create Project
export function clearDataProject() {
  return {
    type: CLEAR_DATA_PROJECTS
  }
};

// Enviar datos para Colaborar
export function sendCollaborate(data){
  return function(dispatch){
      return axios.post(`${BASE_URL}/user/collaboration`, data)
                  .then(project => dispatch({ type: NEW_COLLABORATE, payload: project.data }))
                  .catch(error => dispatch({ type: ERROS_COLLABORATE, payload: error.response.data }))
  }
};

