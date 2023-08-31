import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const HomeMenu = () => {
    const navigate = useNavigate();
    const handleClick = (route) => {
        navigate(route);
    };

    return (
        <>
            <section className="container__home">
                <img src="/images/dice.png" alt="dice" className="img__home" />
                <h1 className="header__h1__home">
                    Welcome to the Dungeon
                    <br />
                    Master's Companion
                </h1>
                <h3 className="header__h3__home">
                    Please choose an option below
                </h3>
                <div className="container__home__buttons">
                    <button
                        className="button__sign_in button_home"
                        type="button"
                        onClick={() => handleClick("/login")}
                    >
                        Log in
                    </button>
                    <button
                        className="button__sign_in button_home bg__purple"
                        type="button"
                        onClick={() => handleClick("/signup")}
                    >
                        Sign up
                    </button>
                    <button
                        className="button__sign_in button_home bg__blue"
                        type="button"
                        onClick={() => handleClick("/about")}
                    >
                        About
                    </button>
                    <button
                        className="button__sign_in button_home bg__teal"
                        type="button"
                        onClick={() => handleClick("/contact")}
                    >
                        Contact
                    </button>
                </div>
            </section>
        </>
    );
};

export default HomeMenu;
