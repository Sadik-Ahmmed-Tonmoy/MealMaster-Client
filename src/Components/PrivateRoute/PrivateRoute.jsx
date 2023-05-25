import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
  const {user, loading} = useContext(AuthContext)

  const location = useLocation();

  if(loading){
    return <Spinner aria-label="Default status example" />
  }

  if(!user){
   return <Navigate to="/UserIdLayout/login" replace state={{from: location}}/>
  }

  return children;

};

export default PrivateRoute;