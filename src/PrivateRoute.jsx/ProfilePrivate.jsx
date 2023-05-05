import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProfilePrivate = ({ children }) => {

    const { user } = useContext(AuthContext)

    if (user) {
        return children
    }



    return <Navigate to={"/login"} state={{ from: location }} replace ></Navigate>




};

export default ProfilePrivate;