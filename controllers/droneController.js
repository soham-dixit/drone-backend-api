const Drone = require("../models/Drone");

exports.createDrone = async (req, res) => {
  const { drone_id, name, drone_type, make_name, site } = req.body;

  try {
    const drone = new Drone({
      drone_id,
      name,
      drone_type,
      make_name,
      site,
      user: req.user._id,
    });
    await drone.save();
    res.status(201).send(drone);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateDrone = async (req, res) => {
  const { drone_id, name, drone_type, make_name, site } = req.body;
  const droneId = req.params.id;

  try {
    const drone = await Drone.findById(droneId);
    if (!drone) {
      return res.status(404).send({ message: "Drone not found" });
    }

    drone.drone_id = drone_id;
    drone.name = name;
    drone.drone_type = drone_type;
    drone.make_name = make_name;
    drone.site = site;

    await drone.save();
    res.send(drone);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteDrone = async (req, res) => {
  const droneId = req.params.id;

  try {
    const drone = await Drone.findById(droneId);
    if (!drone) {
      return res.status(404).send({ message: "Drone not found" });
    }

    await Drone.deleteOne({ _id: droneId });
    res.send({ message: "Drone deleted successfully" });
  } catch (err) {
    res.status(400).send(err);
  }
};
