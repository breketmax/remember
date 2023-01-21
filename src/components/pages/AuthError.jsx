import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthError = () => {
  return (
    <div>
        <h1>Sorry but you need to log in</h1>
        <NavLink to="login">Log in</NavLink>
    </div>
  );
};

export default AuthError;