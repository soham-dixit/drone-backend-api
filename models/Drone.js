const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
  drone_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  drone_type: { type: String, required: true },
  make_name: { type: String, required: true },
  site: { type: mongoose.Schema.Types.ObjectId, ref: "Site", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Drone = mongoose.model("Drone", droneSchema);
module.exports = Drone;
