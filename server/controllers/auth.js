const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.handleLogin = async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username: username });
    console.log(foundUser);
    if (!foundUser) {
        return res.send("Username not found.");
    }
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        // create JWT
        res.send("Logged in!");
    } else {
        res.send("Password incorrect.");
    }
};
