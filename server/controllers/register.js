const User = require("../models/User");

const handleSignup = async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
        res.send("Username already taken.");
    } else {
        const newUser = User.create({ username: username, password: password });
        if (newUser) {
            res.send("Signed up!");
        }
    }
};

module.exports = { handleSignup };
