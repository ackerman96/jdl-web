import {request} from './http.util';
import {endpoints, URL} from './api.config.js';

const allProducts = () => request(URL, 'GET', endpoints.ALLPRODUCT);
const singleProduct = (id) => request(URL, 'GET',  endpoints.SINGLE.replace(':id',id));
const search= (search) => request(URL, 'GET',  endpoints.SEARCH.replace(':keyword', search));
const productCategories = () => request(URL, 'GET',  endpoints.CATEGORIES);
const productByCategory = (category) => request(URL, 'GET', endpoints.PRODUCT_BY_CATEGORY.replace(':category', category));

export { 
    allProducts,
    singleProduct,
    search,
    productCategories,
    productByCategory
}