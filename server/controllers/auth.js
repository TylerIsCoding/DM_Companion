const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "../config/.env" });

const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username: username }).exec();
    if (!foundUser) {
        return res.status(400).send("Username not found.");
    }
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles);
        const username = foundUser.username;
        // create JWT
        const accessToken = jwt.sign(
            {
                UserInfo: {
                    username: username,
                    roles: roles,
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "10m" }
        );
        const refreshToken = jwt.sign(
            { username: username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        );

        // Attach headers to user.
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            sameSite: "None",
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
        });
        res.json({ accessToken });
    } else {
        res.status(401).send("Password incorrect.");
    }
};

module.exports = { handleLogin };
