import { useRef, useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import HeaderBook from "../../header_book/HeaderBook";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import useToggle from "../../../hooks/useToggle";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../form.css";

const LOGIN_URL = "login";

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/dashboard";

    const userRef = useRef();
    const errRef = useRef();

    const [user, resetUser, userAttribs] = useInput("user", "");
    const [pwd, setPwd] = useState("");
    const [userFocus, setUserFocus] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [check, toggleCheck] = useToggle("persist", false);

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
                LOGIN_URL,
                JSON.stringify({ username: user, password: pwd }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, roles, accessToken });
            resetUser();
            setPwd("");
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No server response.");
            } else if (err.response?.status === 400) {
                setErrMsg(err.response?.data);
            } else if (err.response?.status === 401) {
                setErrMsg(err.response?.data);
            } else {
                setErrMsg("Login failed.");
            }
            errRef.current.focus();
        }
    };

    return (
        <section>
            <HeaderBook
                title="Welcome!"
                body="Please enter your details below"
            />
            <form
                onSubmit={handleSubmit}
                className="form__login"
                autoComplete="off"
            >
                <label className="label__form" htmlFor="username">
                    Username:{" "}
                    <input
                        id="username"
                        ref={userRef}
                        type="text"
                        name="input__username"
                        placeholder="Enter your username"
                        {...userAttribs}
                        required
                        className="input__text"
                        aria-describedby="uidnote"
                        spellCheck="false"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    ></input>
                    <p
                        id="uidnote"
                        className={
                            userFocus && user ? "instructions" : "offscreen"
                        }
                    >
                        <FontAwesomeIcon icon={faInfoCircle} /> Username is case
                        sensitive
                    </p>
                </label>
                <label className="label__form" htmlFor="password">
                    Password:{" "}
                    <input
                        type="password"
                        name="input__password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        placeholder="Enter your password"
                        className="input__text"
                    ></input>
                </label>
                <label className="label__rememberMe" htmlFor="remember_me">
                    <input
                        id="remember_me"
                        type="checkbox"
                        onChange={toggleCheck}
                        checked={check}
                        name="input__rememberMe"
                        className="input__rememberMe"
                    ></input>
                    Remember me
                </label>
                <button
                    className="button__sign_in"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Sign in
                </button>
                <button
                    className="button__sign_in_google"
                    type="button"
                    onClick={(e) => e.preventDefault()}
                >
                    <img src="/images/google.png" alt="Google icon"></img>
                    Sign in with Google
                </button>
                <button
                    className="button__sign_in_guest"
                    type="button"
                    onClick={(e) => e.preventDefault()}
                >
                    Continue as Guest
                </button>
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
        </section>
    );
};

export default Login;
