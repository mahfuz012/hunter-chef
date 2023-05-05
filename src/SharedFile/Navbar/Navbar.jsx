import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import { AuthContext } from '../../Firebase/AuthProvider';

const Navbar = () => {

  const { user, LogoutSubmit } = useContext(AuthContext);
  console.log(user);




  return (
    <div className=" navbar bg-gray-100   sm:justify-between">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80 ">


            <NavLink style={{ padding: "1rem" }} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
              to={'/'}> <li className='font-medium '>Home</li></NavLink>



            <NavLink style={{ padding: "1rem" }} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            } to={'/blog'}><li className='font-medium sm:mx-3 '>Blog</li></NavLink>

            <div className="tooltip  tooltip-bottom tooltip-warning" data-tip={user?.displayName}>

              {
                user ?
                  <Link to={"./profile"}><img className='w-12 rounded-full border  border-black'
                    src={user?.photoURL} /></Link> : ''}

            </div>


            {user ?
              <button onClick={LogoutSubmit} className='btn  btn-accent my-5'>Logout</button> :
              <Link to={"/login"}><button className='btn  bg-green-600 my-5'>Login</button></Link>
            }


          </ul>
        </div>

        <a className=" btn btn-ghost normal-case text-xl">
          <img src='https://i.ibb.co/Lxthc1r/navicon.png' />
          <span className='font-extrabold text-blue-700'>
            Chef's </span>
          <span className='mx-1 italic'>Address</span></a>
      </div>

      <div className=" navbar-center hidden lg:flex  px-2">


        <ul className="menu  menu-horizontal px-1">



          <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""
          } to={'/'}> <li className='font-medium p-2  '>Home</li></NavLink>




          <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to={'/blog'}><li className='font-medium p-2  sm:mx-3'>Blog</li></NavLink>

        </ul>

        <div className="tooltip  tooltip-bottom tooltip-warning" data-tip={user?.displayName}>

          {
            user ?
              <Link to={"./profile"}><img className='w-12 rounded-full mx-2 border p-1 border-black'
                src={user?.photoURL} /></Link> : ''}

        </div>


        {user ?
          <button onClick={LogoutSubmit} className='btn  btn-accent '>Logout</button> :
          <Link to={"/login"}><button className='btn  bg-green-600 '>Login</button></Link>
        }

      </div>


    </div>
  );
};

export default Navbar;