const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  site_name: { type: String, required: true },
  position: {
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Site = mongoose.model("Site", siteSchema);
module.exports = Site;
