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

const getPlayers = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    // Is refreshToken in the DB?
    const foundUser = await User.findOne({ refreshToken }).exec();
    return res.send(JSON.stringify(foundUser.initMembers));
};

const addPlayer = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;
    const playerName = req.body.name;
    const playerModifier = parseInt(req.body.modifier);
    const playerColor = req.body.color;
    const obj = {
        id: Math.floor(Math.random() * 100000000000),
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

const clearPlayers = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        { initMembers: [] }
    ).exec();

    return res.send(JSON.stringify(foundUser.initMembers));
};

const deletePlayer = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        {
            $pull: {
                initMembers: { id: parseInt(req.body.id) },
            },
        }
    ).exec();

    return res.send(JSON.stringify(foundUser.initMembers));
};

module.exports = {
    getRolls,
    updateRolls,
    clearRolls,
    getPlayers,
    addPlayer,
    deletePlayer,
    clearPlayers,
};
