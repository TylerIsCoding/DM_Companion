import { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import axios from "../../../api/axios";
import MainMenu from "../../menus/main/MainMenu";
import Button from "../../button/Button";
import HeaderBook from "../../header_book/HeaderBook";
import { Link } from "react-router-dom";
import "../form.css";

const LOGIN_URL = "login";

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
                LOGIN_URL,
                JSON.stringify({ username: user, password: pwd }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser(user);
            setPwd("");
            setSuccess(true);
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
        <>
            {success ? (
                <section>
                    <MainMenu user={user} />
                </section>
            ) : (
                <section>
                    <HeaderBook
                        title="Welcome"
                        body={
                            <>
                                Welcome, Dungeon Master... <br></br> Please
                                enter your details below.
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
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
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
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                placeholder="Enter your password"
                                className="input__text"
                            ></input>
                        </label>
                        <label
                            className="label__rememberMe"
                            htmlFor="remember_me"
                        >
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
                        <button
                            className="button__sign_in_google"
                            type="button"
                            onClick={(e) => e.preventDefault()}
                        >
                            <img
                                src="/images/google.png"
                                alt="Google icon"
                            ></img>
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
            )}
        </>
    );
};

export default Login;
