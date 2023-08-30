const User = require("../models/User");

const handleSignup = async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
        res.status(409).send("Username already taken.");
    } else {
        const newUser = User.create({
            username: username,
            password: password,
            roles: { User: 2001 },
        });
        if (newUser) {
            res.status(201).send("User created!");
        }
    }
};

module.exports = { handleSignup };
