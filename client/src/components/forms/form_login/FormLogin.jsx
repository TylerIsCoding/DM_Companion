import { useRef, useEffect } from "react";
import axios from "axios";
import Button from "../../button/Button";
import HeaderBook from "../../header_book/HeaderBook";
import { Link, useNavigate } from "react-router-dom";
import "../form.css";

const Login = () => {
    const userRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    const axiosPostData = async (e) => {
        const form = e.target;
        const formData = new FormData(form);
        const [username, pwd] = [
            formData.get("input__username"),
            formData.get("input__password"),
        ];
        const postData = {
            username: username,
            password: pwd,
        };

        await axios
            .post("http://localhost:3001/login", postData)
            .then((res) => console.log(res));
    };

    function handleSubmit(e) {
        e.preventDefault();
        axiosPostData(e);
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
