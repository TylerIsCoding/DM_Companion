import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";
import "./navbar.css";

const Navbar = () => {
    const { auth } = useAuth();
    const logout = useLogout();

    return (
        <>
            {auth?.accessToken ? (
                <nav className="nav__main">
                    <ul className="nav__list">
                        <li>
                            <NavLink to="/dashboard">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={logout} to="/">
                                Logout
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            ) : (
                <nav className="nav__main">
                    <ul className="nav__list">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Navbar;
