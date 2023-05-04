import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from './firebase init';
import { useLocation, useNavigate } from 'react-router-dom';

export const  AuthContext = createContext([])

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)
 const [loading,setLoader] = useState(true) 




const auth = getAuth(app);

function registerForm (email,password){
    setLoader(true)
return createUserWithEmailAndPassword(auth,email, password)
}


function loginId(email,password){
    setLoader(true)
return signInWithEmailAndPassword(auth, email, password)
}

function LogoutSubmit(){
    return signOut(auth)
   }
   
const provider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider()




function handleGoogle(){
    setLoader(true)
return signInWithPopup(auth,provider)

}


function handleGithub(){
    setLoader(true)
return signInWithPopup(auth, githubprovider)

}








useEffect(()=>{
 const unsubcribe = onAuthStateChanged(auth, currentUser =>{
     setUser(currentUser )
     setLoader(false)
   })
 

       return () => {
        return unsubcribe()
       }


 },[])






const data = {handleGithub,handleGoogle,registerForm,loginId,user,LogoutSubmit,loading}

    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;