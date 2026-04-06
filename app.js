const dashboardRoutes = require("./routes/dashboardRoutes");
const authRoutes = require("./routes/authRoutes");
const recordRoutes = require("./routes/recordRoutes");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Zorvyn API Running 🚀");
});

// DB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => {
  console.error("❌ DB ERROR:", err);
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});