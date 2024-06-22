const Mission = require("../models/Mission");

exports.createMission = async (req, res) => {
  const { name, speed, waypoints, site } = req.body;

  try {
    const mission = new Mission({
      name,
      speed,
      waypoints,
      site,
      user: req.user._id,
    });
    await mission.save();
    res.status(201).send(mission);
  } catch (err) {
    console.error("Error creating mission:", err);
    res.status(400).send(err);
  }
};

exports.updateMission = async (req, res) => {
  const { name, speed, waypoints, site } = req.body;
  const missionId = req.params.id;

  try {
    const mission = await Mission.findById(missionId);
    if (!mission) {
      return res.status(404).send({ message: "Mission not found" });
    }

    mission.name = name;
    mission.speed = speed;
    mission.waypoints = waypoints;
    mission.site = site;

    await mission.save();
    res.send(mission);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteMission = async (req, res) => {
  const missionId = req.params.id;

  try {
    const mission = await Mission.findById(missionId);
    if (!mission) {
      return res.status(404).send({ message: "Mission not found" });
    }

    await Mission.deleteOne({ _id: missionId });
    res.send({ message: "Mission deleted successfully" });
  } catch (err) {
    res.status(400).send(err);
  }
};
