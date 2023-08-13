import Button from "../button/Button";
import "./login.css";

const Login = () => {
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData);
    }
    return (
        <>
            <form method="post" onSubmit={handleSubmit} className="form__login">
                <label className="label__email">
                    Email:{" "}
                    <input
                        type="email"
                        name="input__email"
                        placeholder="Enter your email address"
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
                />
                <Button
                    text="Sign in as Guest"
                    className="button__sign_in_guest"
                />
            </form>
            <div className="text__sign_up">
                Don't have an account?{" "}
                <a className="text__sign_up_link" href="/about">
                    Sign up
                </a>
            </div>
        </>
    );
};

export default Login;
