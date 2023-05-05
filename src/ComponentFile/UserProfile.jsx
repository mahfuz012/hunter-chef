import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';

const UserProfile = () => {
const {user} = useContext(AuthContext)

console.log(user);

    return (
        <div className="mx-auto border-8 p-5 border-purple-500 rounded-lg my-10">

            <div style={{alignItems:"center"}} className="sm:flex">

            <img className='w-52' src={user?.photoURL} alt="" />
        
        <div className=''>
          <p className='text-xl text-blue-600 font-bold'>Email Address: {user?.email}</p>
          <p className='text-xl text-blue-600 font-bold'>Name : {user?.displayName}</p>
          </div>

          </div>
        </div>
    );
};

export default UserProfile;