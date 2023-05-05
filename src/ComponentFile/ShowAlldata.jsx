import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaBeer, FaUserCircle } from 'react-icons/fa';
import { AiFillLike, AiOutlineNumber } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import LazyLoad from 'react-lazy-load';
// show data 

const ShowAlldata = ({data}) => {

const {chef_id,chef_picture,chef_name,years_of_experience,recipes,likes} = data




    return (

        <div className="px-2 pt-5 sm:pt-0 sm:w-5/12 sm:mx-5 card border-8 border-green-200 lg:card-side bg-base-100 shadow-xl my-3">




        <figure className=''>

        <LazyLoad height={250} once >


            <img className='lazy-img w-44 p-2 rounded-full border-8 border-blue-400' src={chef_picture} alt="Album"/>

     </LazyLoad>


            
            </figure>

    

        <div className="card-body mt-7">
<p className="card-title font-semibold italic underline underline-offset-2">
    <FaUserCircle className="" />
    Chef information:</p>






    <p className='font-medium mt-2'>Chef Name : {chef_name}</p>


   

    
    <p className='font-medium'>Years of experience : {years_of_experience}</p>
    <p className='font-medium'>

        Numbers of recipes : {recipes.length}</p>


        
    <p className='font-medium  flex'>
    <AiFillLike className='mt-1 me-1 text-blue-700'/> Likes: {likes}</p>
       

          <div className="card-actions  justify-end ">
        
 <Link to={`/details/${chef_id}`}><button className="btn btn-primary ">View Recipes</button></Link>

          </div>
        
        </div>
      </div>
  
      )
}

export default ShowAlldata;