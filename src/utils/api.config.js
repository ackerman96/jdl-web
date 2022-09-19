import env from '../config/env.config';
export const URL = env.URL;

export const endpoints = {
    ALLPRODUCT: '/products',
    SINGLE: '/products/:id',
    SEARCH: '/products/search?q=:keyword',
    CATEGORIES:'/products/categories',
    PRODUCT_BY_CATEGORY: '/products/category/:category'

};

export const mockResponses = env.fixtures || {};
