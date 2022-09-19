import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import rootReducer from './slices'; 
// import {screenTracking, debounceNavActions} from './reduxMiddlewares.js';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from './reducers/products.reducer';
import productDetailReducer from './reducers/productDetail.reducer';
import categoriesReducer from './reducers/categories.reducer';
import {reducer as formReducer }from 'redux-form';

const store = configureStore({
  reducer: {
    product: productReducer,
    productDetail: productDetailReducer,
    categories: categoriesReducer,
    form: formReducer
},
enchancers: [thunk, promise]
})

// const enhancer = compose(applyMiddleware(thunk, promise), ...enhancers);

// export const store = () => configureStore({rootReducer, {}, enhancer});

const makeStore = () => store;
console.log('store', store)
export {
    store,
    makeStore
}