const express = require("express");
const router = express.Router();
const missionController = require("../controllers/missionController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, missionController.createMission);
router.put("/:id", authMiddleware, missionController.updateMission);
router.delete("/:id", authMiddleware, missionController.deleteMission);

module.exports = router;
