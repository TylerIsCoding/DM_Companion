const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const verifyJWT = require("../middleware/verifyJWT");

router.get("/", verifyJWT, usersController.getAllUsers);

module.exports = router;
