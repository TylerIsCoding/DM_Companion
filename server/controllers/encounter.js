const User = require("../models/User");

// Dice Roller API requests
const getRolls = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();
    return res.send(foundUser);
};

const updateRolls = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;
    console.log(req.body.roll);
    const roll = parseInt(
        JSON.stringify(Object.keys(req.body)[0]).replaceAll('"', "")
    );
    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        { $push: { rollHistory: { $each: [roll], $position: 0 } } }
    ).exec();
    return res.send(foundUser.rollHistory);
};

const clearRolls = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        { rollHistory: [] }
    ).exec();

    return res.send(foundUser.rollHistory);
};

// Initiative Tracker API Requests
const getPlayers = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();
    return res.send(foundUser);
};

const addPlayer = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;
    const playerName = req.body.name;
    const playerModifier = parseInt(req.body.modifier);
    const playerColor = req.body.color;
    function getTextColor(hex) {
        let r = parseInt(hex.substr(1, 2), 16);
        let g = parseInt(hex.substr(3, 2), 16);
        let b = parseInt(hex.substr(5, 2), 16);
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        console.log(`Hex: ${hex}, RGB: ${[r, g, b]}, YIQ: ${yiq}`);
        return yiq >= 170 ? "black" : "white";
    }
    const textColor = getTextColor(playerColor);
    const obj = {
        id: Math.floor(Math.random() * 100000000000),
        name: playerName,
        modifier: playerModifier,
        color: playerColor,
        textColor: textColor,
        totalRoll: 0,
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
    function getTextColor(hex) {
        let r = parseInt(hex.substr(1, 2), 16);
        let g = parseInt(hex.substr(3, 2), 16);
        let b = parseInt(hex.substr(5, 2), 16);
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        console.log(`Hex: ${hex}, RGB: ${[r, g, b]}, YIQ: ${yiq}`);
        return yiq >= 170 ? "black" : "white";
    }
    const textColor = getTextColor(playerColor);
    const foundUser = await User.findOneAndUpdate(
        { refreshToken, "initMembers.id": id },
        {
            $set: {
                "initMembers.$.id": id,
                "initMembers.$.name": playerName,
                "initMembers.$.modifier": playerModifier,
                "initMembers.$.color": playerColor,
                "initMembers.$.textColor": textColor || "black",
            },
        }
    );
    return res.send(foundUser);
};

const clearPlayers = async (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);
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

// Health Tracker API requests
const getEnemies = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();
    return res.send(foundUser);
};

const addEnemy = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;
    function getTextColor(hex) {
        let r = parseInt(hex.substr(1, 2), 16);
        let g = parseInt(hex.substr(3, 2), 16);
        let b = parseInt(hex.substr(5, 2), 16);
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        console.log(`Hex: ${hex}, RGB: ${[r, g, b]}, YIQ: ${yiq}`);
        return yiq >= 170 ? "black" : "white";
    }
    const textColor = getTextColor(req.body.color);
    const obj = {
        id: Math.floor(Math.random() * 100000000000),
        name: req.body.name,
        hp: Number(req.body.hp),
        maxHP: Number(req.body.hp),
        type: req.body.type,
        color: req.body.color,
        textColor: textColor,
    };

    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        {
            $push: { enemies: obj },
        }
    ).exec();

    return res.send(foundUser);
};

const editEnemy = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const id = parseInt(req.body.id);
    const newMaxHP = parseInt(req.body.maxHP);
    function getTextColor(hex) {
        let r = parseInt(hex.substr(1, 2), 16);
        let g = parseInt(hex.substr(3, 2), 16);
        let b = parseInt(hex.substr(5, 2), 16);
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        console.log(`Hex: ${hex}, RGB: ${[r, g, b]}, YIQ: ${yiq}`);
        return yiq >= 170 ? "black" : "white";
    }
    const textColor = getTextColor(req.body.color);
    const foundUser = await User.findOneAndUpdate(
        { refreshToken, "enemies.id": id },
        {
            $set: {
                "enemies.$.id": id,
                "enemies.$.name": req.body.name || "",
                "enemies.$.maxHP": newMaxHP,
                "enemies.$.type": req.body.type,
                "enemies.$.color": req.body.color,
                "enemies.$.textColor": textColor,
            },
        }
    );
    return res.send(foundUser);
};

const deleteEnemy = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        {
            $pull: {
                enemies: { id: parseInt(req.body.id) },
            },
        }
    ).exec();

    return res.send(foundUser);
};

const clearEnemies = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOneAndUpdate(
        { refreshToken },
        { enemies: [] }
    ).exec();

    return res.send(foundUser);
};

const adjustHealth = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content status
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOneAndUpdate(
        { refreshToken, "enemies.id": req.body.id },
        {
            $set: {
                "enemies.$.hp": req.body.adjustment,
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
    getEnemies,
    editEnemy,
    addEnemy,
    deleteEnemy,
    clearEnemies,
    adjustHealth,
};
