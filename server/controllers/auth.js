const User = require("../models/User");
const validator = require("validator");
const passport = require("passport");

exports.postLogin = async (req, res) => {
    const validationErrors = [];
    if (validator.isEmpty(req.body.username))
        validationErrors.push({ msg: "Please enter a valid username." });
    if (validator.isEmpty(req.body.password))
        validationErrors.push({ msg: "Password cannot be blank." });

    if (validationErrors.length) {
        req.flash("errors", validationErrors);
        return res.redirect("/login");
    }

    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log(user);
            return res.send({ err: "Username or password incorrect" });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            console.log(user);
            res.redirect("/dashboard");
        });
    })(req, res);
};

exports.postSignup = async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username });
    console.log(existingUser);
    if (existingUser) {
        res.send("Username already taken.");
    } else {
        const newUser = new User({ username: username, password: password });
        const saveUser = await newUser.save();
        if (saveUser) {
            console.log(newUser);
            res.send("Signed up!");
        }
    }
};
