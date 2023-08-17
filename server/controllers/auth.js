const passport = require("passport");
const User = require("../models/User");

exports.postLogin = (req, res, next) => {
    passport.authenticate("local", (err, user) => {
        console.log(user);
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log(user);
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/dashboard");
        });
    })(req, res, next);
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
