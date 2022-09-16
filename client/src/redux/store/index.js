// import { applyMiddleware } from 'redux';
import {configureStore, combineReducers} from "@reduxjs/toolkit";
// import { composeWithDevTools } from 'redux-devtools-extension';
import homepage from '../reducer/homepageReducer.js';
import project from '../reducer/projectsReducer.js';
// import rootReducer from '../reducer';
// import thunk from 'redux-thunk';

const reducer = combineReducers({
  homepageReducer: homepage,
  projectsReducer: project,
})

export const store = configureStore({
  reducer
  //composeWithDevTools(applyMiddleware(thunk))
});

export default store;







