import {
    SORT_PRICE,
    GET_PRODUCT_DATA_ERROR,
    GET_PRODUCT_DATA_LOADING,
    GET_PRODUCT_DATA_SUCCESS,
  } from "./actionTypes";

const initState = {
    products:[],
    isLoading:false,
    isError:false
}

export const Reducer = (state= initState, {type,payload})=>{
    // add the switch statement for different actions
    switch (type) {
        case GET_PRODUCT_DATA_LOADING:
          return { ...state, isLoading: true };
        case GET_PRODUCT_DATA_SUCCESS:
          return { ...state, isLoading: false, products: [...state.products, payload] };
        case GET_PRODUCT_DATA_ERROR:
          return { ...state, isError: true };
        case SORT_PRICE :
            if(payload =='asc'){
                const newData=  state.products.sort((a,b)=>{return a.price > b.price })
                return   { ...state,
                   products:  [...state.products,  newData]
                }
            }
            else{
                const newData=  state.products.sort((a,b)=>{return a.price < b.price })
                return   { ...state,
                   products:  [...state.products,  newData]
                }
            }
        //    return { ...state.products,newData}
        default:
          return state;
      }

}