const User = require("../models/User");

const getRolls = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    // Is refreshToken in the DB?
    const foundUser = await User.findOne({ refreshToken }).exec();
    return res.send(JSON.stringify(foundUser));
};

const updateRolls = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const roll = parseInt(
        JSON.stringify(Object.keys(req.body)[0]).replaceAll('"', "")
    );

    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        { $push: { rollHistory: { $each: [roll], $position: 0 } } }
    ).exec();
    return res.send(JSON.stringify(foundUser.rollHistory));
};

const clearRolls = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        { rollHistory: [] }
    ).exec();

    return res.send(JSON.stringify(foundUser.rollHistory));
};

const addPlayer = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;
    const playerName = req.body.name;
    const playerModifier = parseInt(req.body.modifier);
    const playerColor = req.body.color;
    const obj = {
        name: playerName,
        modifier: playerModifier,
        color: playerColor,
    };

    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        {
            $push: { initMembers: obj },
        }
    ).exec();

    return res.send(`Player ${playerName} added...`);
};

module.exports = { getRolls, updateRolls, clearRolls, addPlayer };
