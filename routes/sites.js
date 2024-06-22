const express = require("express");
const router = express.Router();
const siteController = require("../controllers/siteController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, siteController.createSite);
router.get("/", authMiddleware, siteController.getSites);
router.put("/:id", authMiddleware, siteController.updateSite);
router.delete("/:id", authMiddleware, siteController.deleteSite);
router.get("/:id/missions", authMiddleware, siteController.getMissions); 
router.get("/:id/drones", authMiddleware, siteController.getDrones); 

module.exports = router;
