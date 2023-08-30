const User = require("../models/User");

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken
    console.log(req.cookies);
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    // Is refreshToken in the DB?
    const foundUser = await User.findOne({ refreshToken }).exec();

    if (!foundUser) {
        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "None",
            secure: true,
        });
        console.log("User not found");
        return res.sendStatus(204);
    }

    foundUser.refreshToken = "";
    const result = await foundUser.save();
    console.log(result);

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    res.sendStatus(204);
};

module.exports = { handleLogout };
