const User = require("../models/User");

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken
    console.log(req.body);
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;
    console.log(refreshToken);
    // Is refreshToken in the DB?
    const foundUser = await User.findOne({ refreshToken: refreshToken });

    if (!foundUser) {
        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "None",
            secure: true,
        });
        console.log("User not found");
        return res.sendStatus(204);
    }
    // Delete refreshToken in the DB

    // CHANGE THIS

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    res.sendStatus(204);
};

module.exports = { handleLogout };
