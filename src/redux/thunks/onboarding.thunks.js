import * as api from '../../utils/api.util';
import { saveData } from '../reducers/products.reducer';
import {result} from 'lodash';
import { saveCategories } from '../reducers/categories.reducer';

export function getAllProducts () {
    return (dispatch, getState) => {
      const state = getState();
      console.log('api pertama')
        return api.allProducts().then(res=>{
          console.log('jauh ada disini thunk')
            dispatch(saveData(result(res, 'products',[])));
        })
  }
}

export function getSingleProduct (id) {
  return (dispatch, getState) => {
    const state = getState();
    console.log('api kedua')
      return api.singleProduct(id).then(res=>{
        console.log('jauh ada disini thunk')
        console.log('res', res);
          // dispatch(saveData(result(res, 'products',[])));
      })
}
}

export function getCategories () {
  return (dispatch, getState) => {
    const state = getState();
      return api.productCategories().then(res=>{
          dispatch(saveCategories(res));
      })
}
}

export function productByCategory (selectedCategory) {
  return (dispatch, getState) => {
    const state = getState();
      return api.productByCategory(selectedCategory).then(res=>{
        dispatch(saveData(result(res, 'products',[])));
      })
}
}

export function searchingFunction (searchTerm) {
  return (dispatch, getState) => {
    const state = getState();
      return api.search(searchTerm).then(res=>{
        dispatch(saveData(result(res, 'products',[])));
      })
}
}