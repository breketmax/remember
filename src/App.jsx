import React, { useEffect, useState } from 'react';
import {publicRouter,privateRouter} from "./components/utils/router";
import { AuthContext } from './context';
import { RouterProvider } from 'react-router';

const App = () => {
    const [isAuth,setIsAuth] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        } 
    },[])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <RouterProvider router={isAuth ? publicRouter: privateRouter}/> 
        </AuthContext.Provider>
    );
};

export default App;