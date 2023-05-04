import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Register = () => {
    const [Passwordmatch,setPasswordmatch] = useState('')
const {registerForm} = useContext(AuthContext)






function registerSubmit(e){
e.preventDefault()
const email = e.target.email.value;
const password = e.target.password.value;
const displayName = e.target.text.value;
const confirm = e.target.confirm.value;
const url = e.target.url.value;
console.log(email,password,displayName,confirm,url);

if(password === confirm){
    registerForm(email,password,displayName,url)
    .then((userCredential)=>{
        e.target.reset()
        const user = userCredential.user;
        console.log(user);
    })
    .catch(()=>{
        const errorCode = error.code;
        const errorMessage = error.message;
    })
    
}else{
    setPasswordmatch("password is not same")
}




}





    return (
        <div className='container sm:flex justify-center '>
        <form onSubmit={registerSubmit} className=' my-5 py-5  sm:text-center'>
         <h1 className='text-red-600 text-3xl font-bold my-5'>Registration</h1>


         <input className='border sm:w-64 my-2 p-2 rounded' type ='text' placeholder='Type your Name' name ='text' required>
            </input>  <br/>

            <input className='border sm:w-64 my-2 p-2 rounded' type ="url" placeholder='Type your Profile URL' name ='url' required>
            </input>  <br/>

        <input className='border sm:w-64 my-2 p-2 rounded' type ='email' placeholder='type your email' name ='email' required>
            </input>  <br/>
        
         <input className='sm:w-64 border  my-2 p-2 ' type ='password' placeholder='type your password' name = 'password' required></input>  <br/>

         <input className='sm:w-64 border  my-2 p-2 ' type ='password' placeholder='Confirm your password' name = 'confirm' required></input> <br/>
        
         
        
         <input value="Register" className=' border sm:w-52 rounded-2 my-2 p-2 rounded-md bg-red-700 text-white' type='submit' ></input>  
        
          <p>{Passwordmatch}</p>

         <p className='my-5 px-5'>Login if you have registered before, click
         
         <Link to={'/login'} className='font-bold text-xl mx-1 text-blue-700'>Login</Link></p>
        
        
                    
        
         </form>    
        
        
        
                
                </div>
    );
};

export default Register;