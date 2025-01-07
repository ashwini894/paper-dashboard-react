import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// ProtectedRoute component
const ProtectedRoute = ({ component: Component, ...rest }) => {
  // To Get authentication status from context
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props => 
        isAuthenticated ? ( // If authenticated, render the component
          <Component {...props} />
        ) : ( // If not authenticated, redirect to login page
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
