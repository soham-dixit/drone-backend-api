const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const siteRoutes = require("./routes/sites");
const droneRoutes = require("./routes/drones");
const missionRoutes = require("./routes/missions");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/sites", siteRoutes);
app.use("/api/drones", droneRoutes);
app.use("/api/missions", missionRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.error(err));
