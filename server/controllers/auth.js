const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "../config/.env" });

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
        const accessToken = jwt.sign(
            { username: foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "120s" }
        );
        const refreshToken = jwt.sign(
            { username: foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        );
        // Compare other users to current user.
        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.json({ accessToken, refreshToken });
    } else {
        res.send("Password incorrect.");
    }
};
