import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.user.isAuth);

  if (!isAuth) {
    toast.error('Please login to access this resource');
    return <Navigate to="/login" />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;