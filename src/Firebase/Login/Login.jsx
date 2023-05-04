import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';




const Login = () => {

    const {loginId} = useContext(AuthContext)


    const [errorMessage,setErrorMessage] = useState('')


function loginSubmit(e){
    setErrorMessage('')
    e.preventDefault()

    const email= e.target.email.value
    const password = e.target.password.value

    loginId(email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
        e.target.reset()
       

    })
    .catch((error) => {
        const errorCode = error.code;

       if(errorCode === "auth/wrong-password"){
        setErrorMessage("password not match, please again") 
       }else if(errorCode === "auth/user-not-found"){
        setErrorMessage("You have no account, register Now ") 
       }
   



        
      });
}















    return (


 <div className='container sm:flex justify-center '>
<form onSubmit ={loginSubmit} className=' my-5 py-5  sm:text-center'>
 <h1 className='text-red-600 text-3xl font-bold my-5'>Login</h1>
<input className='border sm:w-64 my-2 p-2 rounded' type='email' placeholder='type your email' name ='email' required>
    </input>  <br/>

 <input className='sm:w-64 border  my-2 p-2 ' type='password' placeholder='type your password' name = 'password' required></input>  <br/>

 

 <input  className=' border sm:w-52 rounded-2 my-2 p-2 rounded-md bg-red-700 text-white' type='submit' ></input>  
<p className='text-red-700 font-bold my-3'>{errorMessage}</p>
 <p className='my-5 px-5'>If Registration has not yet, then 
 
 <Link to={'/register'} className='font-bold text-xl mx-1 text-blue-700'> Registration</Link></p>


            

 </form>    



        
        </div>
    );
};

export default Login;