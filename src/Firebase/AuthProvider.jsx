import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase init';

export const  AuthContext = createContext([])
const AuthProvider = ({children}) => {





const auth = getAuth(app);

function registerForm (email,password){
return createUserWithEmailAndPassword(auth,email, password)
}









const data = {registerForm}

    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;