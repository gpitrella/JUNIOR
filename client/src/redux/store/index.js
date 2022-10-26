import {configureStore, combineReducers} from "@reduxjs/toolkit";
import homepage from '../reducer/homepageReducer.js';
import project from '../reducer/projectsReducer.js';
import filterProjects from "../reducer/filterProjectsReducer.js";
import user from '../reducer/usersReducer.js';

const reducer = combineReducers({
  homepageReducer: homepage,
  projectsReducer: project,
  filterReducer: filterProjects,
  usersReducer: user
})

export const store = configureStore({
  reducer
});

export default store;