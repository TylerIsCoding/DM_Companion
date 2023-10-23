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
    return res.send(JSON.stringify(foundUser.rollHistory.flat()));
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
    const list = await foundUser.aggregate([
        {
            $unwind: "$initMembers",
        },
    ]);
    console.log(foundUser.initMembers);
    return res.send(foundUser);
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
    return res.send(foundUser);
};

const editPlayer = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const id = parseInt(req.body.id);
    const playerName = req.body.name || "";
    const playerModifier = parseInt(req.body.modifier) || 0;
    const playerColor = req.body.color || "#000000";

    const foundUser = await User.findOneAndUpdate(
        { refreshToken, "initMembers.id": id },
        {
            $set: {
                "initMembers.$.id": id,
                "initMembers.$.name": playerName,
                "initMembers.$.modifier": playerModifier,
                "initMembers.$.color": playerColor,
            },
        }
    );
    return res.send(foundUser);
};

const clearPlayers = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        { initMembers: [] }
    ).exec();

    return res.send(foundUser);
};

const deletePlayer = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    console.log(req.body.id);

    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        {
            $pull: {
                initMembers: { id: parseInt(req.body.id) },
            },
        }
    ).exec();

    return res.send(foundUser);
};

module.exports = {
    getRolls,
    updateRolls,
    clearRolls,
    getPlayers,
    addPlayer,
    deletePlayer,
    editPlayer,
    clearPlayers,
};
