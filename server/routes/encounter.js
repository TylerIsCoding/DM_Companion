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
router.put("/addPlayer", encounterController.addPlayer);
router.get("/getPlayers", encounterController.getPlayers);
router.put("/editPlayer", encounterController.editPlayer);
router.put("/deletePlayer", encounterController.deletePlayer);
router.put("/clearPlayers", encounterController.clearPlayers);

// Enemy Health Tracker API Calls
router.put("/addEnemy", encounterController.addEnemy);
router.get("/getEnemies", encounterController.getEnemies);
router.put("/editEnemy", encounterController.editEnemy);
router.put("/deleteEnemy", encounterController.deleteEnemy);
router.put("/clearEnemies", encounterController.clearEnemies);
router.put("/adjustHealth", encounterController.adjustHealth);

module.exports = router;
