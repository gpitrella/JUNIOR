import { applyMiddleware } from 'redux';
import {configureStore, combineReducers} from "@reduxjs/toolkit";
//import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import homepage from '../reducer/homepageReducer.js';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  homepageReducer: homepage,
})
export const store = configureStore({
  reducer
  //composeWithDevTools(applyMiddleware(thunk))
});

export default store;
/*
import {configureStore, combineReducers} from "@reduxjs/toolkit";


const reducer = combineReducers({
pokemonSearch: pokemonSearchSlice
});

const store = configureStore({
reducer
});



export default store;
*/
