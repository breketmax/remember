import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Posts from './components/pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';

const App = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    );
};

export default App;