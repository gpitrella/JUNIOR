// import { applyMiddleware } from 'redux';
// import { configureStore, combineReducers} from '@reduxjs/toolkit';

// // import { composeWithDevTools } from 'redux-devtools-extension';
// // import homepage from '../reducer/index.js';
// import rootReducer from '../reducer/index';
// import thunk from 'redux-thunk';

// // const reducer = combineReducers({
// //   homepage: homepage
// // });

// export const store = configureStore({
//   rootReducer
// });
// // composeWithDevTools(applyMiddleware(thunk))

// export default store;


// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from '../reducer/index';
// import thunk from 'redux-thunk';


// const store = createStore(
//     rootReducer,
//     compose(applyMiddleware(thunk), 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );

// export default store;