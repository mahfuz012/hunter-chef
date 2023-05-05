import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';



const Login = () => {
    const navigation = useNavigate()

    const location = useLocation()
    const from = location?.state?.from?.pathname || "/"

    const { loginId, handleGoogle, handleGithub } = useContext(AuthContext)


    const [errorMessage, setErrorMessage] = useState('')



    function handleGoogles() {
        handleGoogle()
            .then(() => {
                navigation(from, { replace: true })
            })
            .catch((error) => {

                console.log(error);
            });
    }


    function handleGithubb() {
        handleGithub()
            .then(() => {
                navigation(from, { replace: true })
            })
            .catch((error) => {

                console.log(error);
            });


    }

    function loginSubmit(e) {
        setErrorMessage('')
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value


        loginId(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                e.target.reset()
                navigation(from, { replace: true })

            })
            .catch((error) => {
                const errorCode = error.code;

                if (errorCode === "auth/wrong-password") {
                    setErrorMessage("password not match, please again")
                } else if (errorCode === "auth/user-not-found") {
                    setErrorMessage("You have no account, register Now ")
                }





            });
    }



    return (


        <div className='container  justify-center '>
            <form onSubmit={loginSubmit} className=' my-5 py-5  sm:text-center'>
                <h1 className='text-red-600 text-3xl font-bold my-5'>Login</h1>
                <input className='border sm:w-64 my-2 p-2 rounded' type='email' placeholder='type your email' name='email' required>
                </input>  <br />

                <input className='sm:w-64 border  my-2 p-2 ' type='password' placeholder='type your password' name='password' required></input>  <br />



                <input className=' border sm:w-52 rounded-2 my-2 p-2 rounded-md bg-red-700 text-white' type='submit' ></input>
                <p className='text-red-700 font-bold my-3'>{errorMessage}</p>
                <p className='my-5 px-5'>If Registration has not yet, then

                    <Link to={'/register'} className='font-bold text-xl mx-1 text-blue-700'> Registration</Link></p>




            </form>

            <div className='flex justify-center my-5'>

                <button onClick={handleGoogles} className='btn bg-white text-black mx-2'>
                    <AiOutlineGoogle className='text-xl mx-2' />
                    Google Login</button>

                <button onClick={handleGithubb} className='btn bg-white text-black'>
                    <BsGithub className='text-xl mx-2' />
                    Github Login</button>
            </div>


        </div>





    );
};

export default Login;