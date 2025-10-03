import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providedrs/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext);
   
    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>
    }

    if(user){
        return children;
    }
    
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;