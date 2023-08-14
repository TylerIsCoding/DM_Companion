import Button from "../../button/Button";
import HeaderBook from "../../header_book/HeaderBook";
import { Link } from "react-router-dom";
import "../form.css";

const Login = () => {
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
            <form method="" onSubmit={handleSubmit} className="form__login">
                <label className="label__email">
                    Username:{" "}
                    <input
                        type="email"
                        name="input__email"
                        placeholder="Enter your username"
                        className="input__text"
                    ></input>
                </label>
                <label className="label__password">
                    Password:{" "}
                    <input
                        type="password"
                        name="input__password"
                        placeholder="Enter your password"
                        className="input__text"
                    ></input>
                </label>
                <label className="label__rememberMe">
                    <input
                        type="checkbox"
                        name="input__rememberMe"
                        defaultChecked={false}
                        className="input__rememberMe"
                    ></input>
                    Remember me
                </label>
                <Button text="Sign in" className="button__sign_in" />
                <Button
                    text="Sign in with Google"
                    className="button__sign_in_google"
                    img="/images/google.png"
                    alt="Google icon"
                />
                <Button
                    text="Continue as Guest"
                    className="button__sign_in_guest"
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
