import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div>
           <h1>Oops...</h1> 
           {error.data}
        </div>
    );
};

export default Error;