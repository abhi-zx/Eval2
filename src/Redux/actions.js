import {
    SORT_PRICE,
    GET_PRODUCT_DATA_ERROR,
    GET_PRODUCT_DATA_LOADING,
    GET_PRODUCT_DATA_SUCCESS,
  } from "./actionTypes";

// action for get products request
const getProductsReq = () => ({
    type: GET_PRODUCT_DATA_LOADING,
});

// action for get products success

const getProductsSuccess = (payload) => ({
type:GET_PRODUCT_DATA_SUCCESS,
payload
});

// action for get products failure

const getProductsFailure = (message) => ({
    type:GET_PRODUCT_DATA_ERROR,
    payload:message
});

// thunk call to fetch products  list
const getproductsData = () => ({
    
}); 

// action object for sort  feature

const sortProducts = (payload) => ({
    type:SORT_PRICE,
    payload
});

export{getProductsSuccess,getProductsFailure,getproductsData,getProductsReq,sortProducts,}
