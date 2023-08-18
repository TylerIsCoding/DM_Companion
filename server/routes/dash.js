const express = require("express");
const router = express.Router();
const dashController = require("../controllers/dash");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, dashController.getDash);

module.exports = router;
