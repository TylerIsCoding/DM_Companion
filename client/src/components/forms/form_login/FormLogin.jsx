import { useRef, useEffect } from "react";

import Button from "../../button/Button";
import HeaderBook from "../../header_book/HeaderBook";
import { Link } from "react-router-dom";
import "../form.css";

const Login = () => {
    const userRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData);
    }

    return (
        <>
            <HeaderBook
                title="Welcome"
                body={
                    <>
                        Welcome, Dungeon Master... <br></br> Please enter your
                        details below.
                    </>
                }
            />
            <form onSubmit={handleSubmit} className="form__login">
                <label className="label__form" htmlFor="username">
                    Username:{" "}
                    <input
                        id="username"
                        ref={userRef}
                        type="text"
                        name="input__username"
                        placeholder="Enter your username"
                        required
                        className="input__text"
                        aria-describedby="uidnote"
                    ></input>
                </label>
                <label className="label__form" htmlFor="password">
                    Password:{" "}
                    <input
                        type="password"
                        name="input__password"
                        required
                        placeholder="Enter your password"
                        className="input__text"
                    ></input>
                </label>
                <label className="label__rememberMe" htmlFor="remember_me">
                    <input
                        id="remember_me"
                        type="checkbox"
                        name="input__rememberMe"
                        defaultChecked={false}
                        className="input__rememberMe"
                    ></input>
                    Remember me
                </label>
                <Button
                    text="Sign in"
                    className="button__sign_in"
                    type="submit"
                    onClick={handleSubmit}
                />
                <Button
                    text="Sign in with Google"
                    className="button__sign_in_google"
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    img="/images/google.png"
                    alt="Google icon"
                />
                <Button
                    text="Continue as Guest"
                    className="button__sign_in_guest"
                    type="button"
                    onClick={(e) => e.preventDefault()}
                />
            </form>
            <div className="text__sign_up">
                Don't have an account?{" "}
                <Link to="/signup" className="text__sign_up_link">
                    Sign up
                </Link>
            </div>
        </>
    );
};

export default Login;
