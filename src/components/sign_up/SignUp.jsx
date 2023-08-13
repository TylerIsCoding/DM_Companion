import HeaderBook from "../header_book/HeaderBook";
import Button from "../button/Button";

const SignUp = () => {
    return (
        <>
            <HeaderBook
                title="Sign Up"
                body="Please enter your information below."
            />
            <form method="post" className="form__login">
                <label className="label__email">
                    First Name:
                    <input
                        type="text"
                        className="input__text"
                        placeholder="First name"
                        required={true}
                    />
                </label>
                <label className="label__email">
                    Email:
                    <input
                        type="email"
                        className="input__text"
                        placeholder="Email address"
                        required={true}
                    />
                </label>
                <label className="label__password">
                    Password:
                    <input
                        type="password"
                        className="input__text"
                        placeholder="Password"
                    />
                    <p className="text__password_requirement">
                        Must be at least 8 characters
                    </p>
                </label>
                <Button text="Submit" className="button__sign_up" />
            </form>
        </>
    );
};

export default SignUp;
