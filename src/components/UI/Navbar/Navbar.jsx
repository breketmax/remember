import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
import classes from "./Navbar.module.css";

const Navbar = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext);
    const logout = () =>{
        setIsAuth(false);
        localStorage.removeItem('auth')
    };
    return (
        <div className={classes.navbar}>
        <MyButton onClick={logout}>Выход</MyButton>
            <div className={classes.navbarLinks}>
                <NavLink to="about">About</NavLink>
                <NavLink to="posts">Posts</NavLink>
            </div>
        </div>

    );
};

export default Navbar;