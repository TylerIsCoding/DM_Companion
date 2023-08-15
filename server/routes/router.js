const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/users", (req, res) => {});

router.post("/users", async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username: username, password: password });
    const saveUser = await newUser.save();
    if (saveUser) {
        console.log(newUser);
        res.send("Signed up!");
    }
});

module.exports = router;
