import {NavLink} from 'react-router-dom'
import React from 'react'
const links = [

  {
    title: "Home",
    link: "/",
    id:1,
  },
  {
    title: "About",
    link: "/about",
    id:1,
  },
  {
    title: "Products",
    link: "/products",
    id:1,
  },
  
];
 const Navbar = () => {
  return (
    <>
    {links.map(({title,link},id)=>{
        return <NavLink key={id} to={link} style={{padding:10,textDecoration:'none'}}>{title}</NavLink>
    })}
    </>
  )
};

export default Navbar