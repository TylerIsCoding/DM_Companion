const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "../config/.env" });

const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username: username });
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

        // Attach headers to user.
        foundUser.refreshToken = refreshToken;
        await foundUser.save();

        console.log(foundUser);

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            sameSite: "None",
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.json({ accessToken });
    } else {
        res.send("Password incorrect.");
    }
};

module.exports = { handleLogin };
