const express = require("express");
const router = express.Router();
const droneController = require("../controllers/droneController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, droneController.createDrone);
router.put("/:id", authMiddleware, droneController.updateDrone);
router.delete("/:id", authMiddleware, droneController.deleteDrone);

module.exports = router;
