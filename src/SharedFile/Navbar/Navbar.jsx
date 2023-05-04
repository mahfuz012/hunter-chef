import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
<div className=" navbar bg-lime-100   justify-between">
        <div className="navbar-start ">
          <div className="dropdown">
         <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80 ">
      <Link to={'http://localhost:5174/'}><li><a>Home</a></li></Link>
          <li><a>Blog </a></li>
          <button className='btn  btn-accent '>Login</button>
            </ul>
          </div>

          <a className=" btn btn-ghost normal-case text-xl">
            <img src='navicon.png' />
<span className='font-extrabold text-blue-700'>
Chef's </span>
         <span className='mx-1 italic'>Address</span></a>
        </div>

        <div className=" navbar-center hidden lg:flex  px-2">

          
          <ul className="menu  menu-horizontal px-1">
     
  <NavLink  className="focus:bg-red-950"
  
  to={'http://localhost:5174/'}> 
  
  <li  className='font-medium '>Home</li></NavLink>

   <Link><li className='font-medium sm:mx-3'>Blog</li></Link>  
      
          </ul>
          <button className='btn  bg-orange-700 border-none md:mx-3'>Login</button>

        </div>

      
      </div>
    );
};

export default Navbar;