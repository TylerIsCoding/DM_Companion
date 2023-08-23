const User = require("../models/User");

const getAllUsers = async (req, res) => {
    let users = await User.find({});
    if (users) {
        res.send(users);
    }
};

module.exports = { getAllUsers };
