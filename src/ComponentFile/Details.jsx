import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardItems from './CardItems';
import { AiFillLike } from 'react-icons/ai';
import { AuthContext } from '../Firebase/AuthProvider';
import LazyLoad from 'react-lazy-load';



const Details = () => {
    const getData = useLoaderData()
    const getIdno = useParams()
  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        setLoading(true);
        fetch('https://myapp-eta-six.vercel.app/categories')
            .then((response) => response.json())
            .then((data) => setLoading(false));
    }, []);




    const findData = getData?.find(p => Number(getIdno.id) === p.chef_id)

    if (loading) {

        return (

            <div className="mx-auto  animate-spin inline-block w-52 h-52 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>

            </div>
        )

    }


    const { chef_picture, chef_name, years_of_experience, recipes, likes, description } = findData





    return (
        <div className='container-fluid '>


            <div className="sm:flex  my-5 sm:rounded-full border p-2 border-blue-800">

                <div className='sm:flex sm:flex-col sm:justify-center'>
                <LazyLoad>

                    <img className='w-screen  sm:rounded-full border-8 border-blue-300  p-3' src={chef_picture} />

                    </LazyLoad >
                </div>



                <div className='p-3 sm:flex sm:flex-col sm:justify-center'>

                    <hr className='bg-blue-500 sm:w-8/12 sm:h-2 my-5' />

                    <p className='text-2xl italic font-bold'><span className='text-blue-500 font-bold text-2xl'>Chef Name:</span> {chef_name} </p>

                    <p className='text-2xl italic font-bold'><span className='text-blue-500 font-bold text-2xl'>Years of Experience:</span> {years_of_experience} Years </p>
                    <p className='text-2xl italic font-bold'><span className='text-blue-500 font-bold text-2xl'>Number of Recipes:</span> {recipes.length}  </p>

                    <p className=' italic font-bold'><span className='text-blue-500 font-bold text-2xl'>Descriptione: </span> {description} </p>

                    <p className='my-2 flex text-xl italic font-bold'>
                        <AiFillLike className='mt-1 me-2 text-blue-800' />
                        Likes:  {likes}  </p>

                    <hr className='bg-blue-500 sm:w-8/12 sm:h-2 my-5' />

                </div>
            </div>


            <div className="row justify-center">
                <p className='font-bold text-3xl my-2 bg-orange-500 text-white px-3 py-2'>Here are all the recipes of this chef</p>
            </div>

            <div className="row px-3 sm:justify-center">
                {
                    recipes?.map(p => <CardItems key={p.recipe_id} userdata={p} />)
                }
            </div>
        </div>

    )
}





export default Details;