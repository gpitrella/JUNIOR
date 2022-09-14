import axios from 'axios';

import {
  GET_ALL_PROJECTS,
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

