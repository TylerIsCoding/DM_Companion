const express = require("express");
const router = express.Router();
const registerController = require("../controllers/register");

router.post("/", registerController.handleSignup);

module.exports = router;
