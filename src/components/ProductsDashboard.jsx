import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProductsSuccess,getProductsFailure,getproductsData,getProductsReq,sortProducts} from '../Redux/actions'
import "../App.css"
import { Link, NavLink } from 'react-router-dom'
export const Products = () => {
  const {data, isLoading, isError} = useSelector((state)=>({
    data : state.data,
    isLoading : state.isLoading,
    isError : state.isError
}))
  const [prod,setProd]= useState([])
  // const [check,setCheck] = useState('')
  // to get all products list on component mounts

  const dispatch = useDispatch()
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getProductsReq())

    axios("https://movie-fake-server.herokuapp.com/products")
    .then((res)=>{ dispatch(getProductsSuccess(res.data))
                    setProd(res.data)})
    .catch((err)=>dispatch(getProductsFailure(err)))

  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    // console.log(e.target.value)
    dispatch(sortProducts(e.target.value))
  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list container ">
        {/* map throught th products  list and display the results */}
        {data.map((prods)=>{ 
          // console.log(prods);
          return (<>
           <Link className="c2" to= {`/single/${prods.id}`} >
           <div >
           <img src={prods.image}/>
           <div className="c3"><h5> {prods.brand}</h5>
           <h5>Price: ${prods.price}</h5></div>
           
           </div>
           </Link>
           </>)
        })}
       
      </div>
    </>
  );
};
