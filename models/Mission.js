const mongoose = require("mongoose");

const waypointSchema = new mongoose.Schema({
  alt: { type: Number, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const missionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  speed: { type: Number, required: true },
  waypoints: [waypointSchema],
  site: { type: mongoose.Schema.Types.ObjectId, ref: "Site", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Mission = mongoose.model("Mission", missionSchema);
module.exports = Mission;
