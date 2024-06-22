const Site = require("../models/Site");
const Mission = require("../models/Mission");
const Drone = require("../models/Drone");

exports.createSite = async (req, res) => {
  const { site_name, position } = req.body;

  try {
    const site = new Site({ site_name, position, user: req.user._id });
    await site.save();
    res.status(201).send(site);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getSites = async (req, res) => {
  try {
    const sites = await Site.find({ user: req.user._id });
    res.send(sites);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateSite = async (req, res) => {
  const { site_name, position } = req.body;
  const siteId = req.params.id; 

  try {
    const site = await Site.findById(siteId);
    if (!site) {
      return res.status(404).send({ message: "Site not found" });
    }


    site.site_name = site_name;
    site.position = position;


    await site.save();
    res.send(site);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteSite = async (req, res) => {
  const siteId = req.params.id;

  try {
    const site = await Site.findById(siteId);
    if (!site) {
      return res.status(404).send({ message: "Site not found" });
    }

    await Site.deleteOne({ _id: siteId });
    res.send({ message: "Site deleted successfully" });
  } catch (err) {
    console.error("Error deleting site:", err);
    res.status(400).send(err);
  }
};

exports.getMissions = async (req, res) => {
  const siteId = req.params.id;

  try {
    const site = await Site.findById(siteId);
    if (!site) {
      return res.status(404).send({ message: "Site not found" });
    }

    const missions = await Mission.find({ site: siteId });
    res.send(missions);
  } catch (err) {
    console.error("Error fetching missions:", err);
    res.status(400).send(err);
  }
};

exports.getDrones = async (req, res) => {
  const siteId = req.params.id;

  try {
    const site = await Site.findById(siteId);
    if (!site) {
      return res.status(404).send({ message: "Site not found" });
    }

    const drones = await Drone.find({ site: siteId });
    res.send(drones);
  } catch (err) {
    console.error("Error fetching drones:", err);
    res.status(400).send(err);
  }
};
