import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbarLinks}>
                <NavLink to="about">About</NavLink>
                <NavLink to="posts">Posts</NavLink>
            </div>
        </div>

    );
};

export default Navbar;