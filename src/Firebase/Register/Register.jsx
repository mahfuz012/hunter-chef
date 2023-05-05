import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import swal from 'sweetalert';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [valid, setValid] = useState([])
    const [Passwordmatch, setPasswordmatch] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const { registerForm, LogoutSubmit } = useContext(AuthContext)
    const navigation = useNavigate()





    function registerSubmit(e) {

        setErrorMessage('')
        setPasswordmatch('')
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const displayName = e.target.text.value;
        const confirm = e.target.confirm.value;
        const photoURL = e.target.url.value;



        if (password === confirm) {
            registerForm(email, password, displayName, photoURL)
                .then((userCredential) => {
                    e.target.reset()
                    const user = userCredential.user;
                    console.log(user);



                    updateProfile(userCredential.user, {
                        displayName: displayName, photoURL: String(photoURL)
                    }).then(() => {
                        console.log("Profile updated successfully.");
                    }).catch((error) => {
                        console.log("Error updating profile: ", error);
                    });





                    swal({
                        text: "successfully completed",
                        icon: "success",
                    });


                    LogoutSubmit()

                    navigation('/login')





                })
                .catch((error) => {

                    const errorMessage = error.message;
                    if (errorMessage) {
                        setErrorMessage("You are use same email")

                    }
                })

        } else {
            setPasswordmatch("password is not same")
        }
    }




    function passwordValidation(e) {
        const password = e.target.value;
        if (!/(?=.*[A-Z])/.test(password)) {
            setValid("password should be UpperCase")

        }
        else if (! /(?=.*[0-9])/.test(password)) {
            setValid("password should be number")
        }
        else if (!/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/.test(password)) {
            setValid("password should be spceial character")
        }
        else if (password.length < 6) {
            setValid("password should be 6 digit or more ")
        } else {
            setValid("")
        }
    }










    return (
        <div className='container sm:flex justify-center '>
            <form onSubmit={registerSubmit} className=' my-5 py-5  sm:text-center'>
                <h1 className='text-red-600 text-3xl font-bold my-5'>Registration</h1>


                <input className='border sm:w-64 my-2 p-2 rounded' type='text' placeholder='Type your Name' name='text' required>
                </input>  <br />

                <input className='border sm:w-64 my-2 p-2 rounded' type="url" placeholder='Type your Profile URL' name='url' required>
                </input>  <br />

                <input className='border sm:w-64 my-2 p-2 rounded' type='email' placeholder='type your email' name='email' required>
                </input>  <br />

                <input onInput={passwordValidation} className='sm:w-64 border  my-2 p-2 ' type='password' placeholder='type your password' name='password' required></input>  <br />
                <p className='text-red-700 font-bold'>{valid}</p>
                <input className='sm:w-64 border  my-2 p-2 ' type='password' placeholder='Confirm your password' name='confirm' required></input> <br />



                <input value="Register" className=' border sm:w-52 rounded-2 my-2 p-2 rounded-md bg-red-700 text-white' type='submit' ></input>

                <p className='text-red-700 font-bold'>{Passwordmatch}</p>
                <p className='text-red-700 font-bold'>{errorMessage}</p>


                <p className='my-5 px-5'>Login if you have registered before, click

                    <Link to={'/login'} className='font-bold text-xl mx-1 text-blue-700'>Login</Link></p>




            </form>




        </div>
    );
};

export default Register;