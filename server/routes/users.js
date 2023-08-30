const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const ROLES_LIST = require("../config/roles_list");
const verifyRoles = require("../middleware/verifyRoles");

router.get("/", verifyRoles(ROLES_LIST.User), usersController.getAllUsers);

module.exports = router;
