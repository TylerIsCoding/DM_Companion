const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
    const users = [
        {
            id: 1,
            username: "Tyler",
            password: "abcdefg",
        },
        {
            id: 2,
            username: "BingBong",
            password: "dingdongbingbong",
        },
    ];

    res.send(users);
});

router.post("/users", (req, res) => {
    const { id, username, password } = req.body;
    console.log(id, username, password);
    res.send("Signed up!");
});

module.exports = router;
