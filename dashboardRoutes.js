const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const role = require("../middleware/role");

// Only import what exists
const { getSummary } = require("../controllers/dashboardController");

// Only one working route
router.get("/summary", auth, role(["ANALYST", "ADMIN"]), getSummary);

module.exports = router;