const User = require("../models/User");

exports.handleSignup = async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
        res.send("Username already taken.");
    } else {
        const newUser = new User({ username: username, password: password });
        const saveUser = await newUser.save();
        if (saveUser) {
            res.send("Signed up!");
        }
    }
};
