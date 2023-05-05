import React from 'react';
import { useRouteError } from 'react-router-dom';
import Navbar from '../SharedFile/Navbar/Navbar';
import Footer from '../SharedFile/Footer/Footer';

const Error = () => {

  const error = useRouteError()
  console.log(error);


  return (
    <div className='container-fluid'>

      <div className="row justify-center">
        <Navbar />

        <div className='flex justify-center'>
          <img className='w-10/12 my-10' src='https://i.ibb.co/J28BvBd/error-1.png' />

        </div>

        <p className='text-2xl p-2'><span className='font-bold text-red-600'>StatusText : </span> {error.statusText}</p>
        <p className='text-2xl p-2'><span className='font-bold text-red-600'>Status : </span>{error.status}</p>
        <p className='text-2xl p-2'><span className='font-bold text-red-600'>Data : </span>{error.data
        }</p>


        <Footer />
      </div>

    </div>
  );
};

export default Error;