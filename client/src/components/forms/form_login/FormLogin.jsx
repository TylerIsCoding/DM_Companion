import { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import axios from "../../../api/axios";
import Button from "../../button/Button";
import HeaderBook from "../../header_book/HeaderBook";
import { Link } from "react-router-dom";
import "../form.css";

const LOGIN_URL = "/auth";

const Login = () => {
    const { setAuth } = useContext(AuthContext);

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/login",
                JSON.stringify({ user, pwd }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser("");
            setPwd("");
            setSuccess("");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No server response.");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing username or password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login failed.");
            }
            errRef.current.focus();
        }
    };

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
            <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
            >
                {errMsg}
            </p>
        </>
    );
};

export default Login;
