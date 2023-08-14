import HeaderBook from "../../header_book/HeaderBook";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
    faCheck,
    faTimes,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        setSuccess(true);
    };

    return (
        <>
            <HeaderBook
                title="Sign Up"
                body="Please enter your information below."
            />
            <form onSubmit={handleSubmit} className="form__login">
                <label className="label__email" htmlFor="username">
                    <div className="nameHolder">
                        Username:
                        <span className={validName ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span
                            className={validName || !user ? "hide" : "invalid"}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </div>
                    <input
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        type="text"
                        className="input__text"
                        placeholder="Username"
                        required
                        onChange={(e) => setUser(e.target.value)}
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p
                        id="uidnote"
                        className={
                            userFocus && user && !validName
                                ? "instructions"
                                : "offscreen"
                        }
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />{" "}
                        <u>Requirements</u>
                        <br />
                        * 3 to 24 characters.
                        <br />
                        * Must begin with a letter.
                        <br />* Letters, numbers, underscores, hyphens allowed.
                    </p>
                </label>
                <label className="label__password" htmlFor="password">
                    <div className="nameHolder">
                        Password:
                        <span className={validPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validPwd || !pwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </div>
                    <input
                        id="password"
                        type="password"
                        className="input__text"
                        placeholder="Password"
                        required
                        onChange={(e) => setPwd(e.target.value)}
                        aria-invalid={validPwd ? "false" : "true"}
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p
                        id="pwdnote"
                        className={
                            pwdFocus && !validPwd ? "instructions" : "offscreen"
                        }
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />{" "}
                        <u>Requirements</u>
                        <br />
                        * 8 to 24 characters.
                        <br />
                        * Must include uppercase and lowercase letters, a
                        number, and a special character.
                        <br />* Allowed special characters:{" "}
                        <span aria-label="exclamation mark">!</span>{" "}
                        <span aria-label="at symbol">@</span>{" "}
                        <span aria-label="hashtag">#</span>{" "}
                        <span aria-label="dollar sign">$</span>{" "}
                        <span aria-label="percent">%</span>
                    </p>
                </label>
                <label
                    className="label__password"
                    htmlFor="passwordConfirmation"
                >
                    <div className="nameHolder">
                        Confirm Password:
                        <span
                            className={
                                validMatch && matchPwd ? "valid" : "hide"
                            }
                        >
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span
                            className={
                                validMatch || !matchPwd ? "hide" : "invalid"
                            }
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </div>

                    <input
                        id="passwordConfirmation"
                        type="password"
                        className="input__text"
                        placeholder="Confirm password"
                        required
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p
                        id="confirmnote"
                        className={
                            matchFocus && !validMatch
                                ? "instructions"
                                : "offscreen"
                        }
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                    </p>
                </label>
                <Button
                    text={"Sign Up"}
                    className="button__sign_up"
                    disabled={
                        !validName || !validPwd || !validMatch ? true : false
                    }
                />
            </form>
            <div className="text__sign_up">
                Already have an account?{" "}
                <Link to="/" className="text__sign_up_link">
                    Sign in
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

export default SignUp;
