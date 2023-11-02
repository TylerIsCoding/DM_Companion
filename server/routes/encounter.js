const express = require("express");
const router = express.Router();
const encounterController = require("../controllers/encounter");
const ROLES_LIST = require("../config/roles_list");
const verifyRoles = require("../middleware/verifyRoles");

// Dice Roller API Calls
router.get("/getRolls", encounterController.getRolls);
router.put("/updateRolls", encounterController.updateRolls);
router.put("/clearRolls", encounterController.clearRolls);

// Initiative Tracker API Calls
router.get("/getPlayers", encounterController.getPlayers);
router.put("/addPlayer", encounterController.addPlayer);
router.put("/editPlayer", encounterController.editPlayer);
router.put("/clearPlayers", encounterController.clearPlayers);
router.put("/deletePlayer", encounterController.deletePlayer);

// Enemy Health Tracker API Calls
router.get("/getEnemies", encounterController.getEnemies);

module.exports = router;
