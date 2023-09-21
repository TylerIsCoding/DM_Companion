import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import jwt_decode from "jwt-decode";
import "./dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const { auth } = useAuth();

    const decoded = auth.accessToken ? jwt_decode(auth.accessToken) : undefined;

    const user = auth.accessToken ? decoded?.UserInfo?.username : undefined;

    const handleClick = (route) => {
        navigate(route);
    };

    return (
        <>
            <section className="container__home">
                <img src="/images/dice.png" alt="dice" className="img__home" />
                <h1 className="header__h1__home">Welcome, {user}!</h1>
                <h3 className="header__h3__home">
                    Please choose an option below
                </h3>
                <div className="container__home__buttons">
                    <button
                        className="button__sign_in button_home"
                        type="button"
                        onClick={() => handleClick("")}
                    >
                        Create Campaign
                    </button>
                    <button
                        className="button__sign_in button_home bg__purple"
                        type="button"
                        onClick={() => handleClick("")}
                    >
                        Login to Campaign
                    </button>
                    <button
                        className="button__sign_in button_home bg__blue"
                        type="button"
                        onClick={() => handleClick("/encounter")}
                    >
                        Encounter Tracker
                    </button>
                    <button
                        className="button__sign_in button_home bg__teal"
                        type="button"
                        onClick={() => handleClick("/monsters")}
                    >
                        Monster Manual
                    </button>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
