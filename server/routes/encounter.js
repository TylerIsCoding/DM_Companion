const express = require("express");
const router = express.Router();
const encounterController = require("../controllers/encounter");
const ROLES_LIST = require("../config/roles_list");
const verifyRoles = require("../middleware/verifyRoles");

router.get("/getRolls", encounterController.getRolls);
router.put("/updateRolls", encounterController.updateRolls);
router.put("/clearRolls", encounterController.clearRolls);

router.get("/getPlayers", encounterController.getPlayers);
router.put("/addPlayer", encounterController.addPlayer);
router.put("/clearPlayers", encounterController.clearPlayers);
router.put("/deletePlayer", encounterController.deletePlayer);

module.exports = router;
