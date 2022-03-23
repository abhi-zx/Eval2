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
          return { ...state,isLoading: false, isError: true };
        case SORT_PRICE :
          // console.log(payload)
            // if(payload =='asc'){
            //     const newData=  state.products.sort((a,b)=>{return a.price > b.price })
            //     return   { ...state,
            //        products:  [...state.products,  newData]
            //     }
            // }
            // else{
            //     const newData=  state.products.sort((a,b)=>{return a.price < b.price })
            //     return   { ...state,
            //        products:  [...state.products,  newData]
            //     }
            // }
            if(payload =='asc'){
              console.log('anny')
            const data = state.products[0]?.sort((a,b)=>{
              return a.price-b.price
            })
            console.log(data)
            return {...state, products: [...state.products, data]}
          }
          else{
            console.log('abhi')
            const data2 = state.products[0]?.sort((a,b)=>{
              return b.price - a.price
            })
            return {...state, products: [...state.products, data2]}
          }
           
        //    return { ...state.products,newData}
        default:
          return state;
      }

}