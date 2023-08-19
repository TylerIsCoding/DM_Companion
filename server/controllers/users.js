const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
    let users = await User.find({});
    if (users) {
        res.send(users);
    }
};
