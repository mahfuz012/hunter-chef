import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {



function loginSubmit(){
    console.log("ok");
}















    return (


 <div className='container sm:flex justify-center '>
<form onClick={loginSubmit()} className=' my-5 py-5  sm:text-center'>
 <h1 className='text-red-600 text-3xl font-bold my-5'>Login</h1>
<input className='border sm:w-64 my-2 p-2 rounded' type='email' placeholder='type your email' name ='email' required>
    </input>  <br/>

 <input className='sm:w-64 border  my-2 p-2 ' type='password' placeholder='type your password' name = 'password' required></input>  <br/>

 

 <input  className=' border sm:w-52 rounded-2 my-2 p-2 rounded-md bg-red-700 text-white' type='submit' ></input>  

 <p className='my-5 px-5'>If Registration has not yet, then 
 
 <Link to={'/register'} className='font-bold text-xl mx-1 text-blue-700'> Registration</Link></p>


            

 </form>    



        
        </div>
    );
};

export default Login;