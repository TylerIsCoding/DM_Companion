const User = require("../models/User");

const handleSignup = async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username }).exec();
    if (existingUser) {
        res.status(409).send("Username already taken.");
    } else {
        const newUser = await User.create({
            username: username,
            password: password,
        });
        if (newUser) {
            res.status(201).send(`New user ${username} created!`);
        }
    }
};

module.exports = { handleSignup };
