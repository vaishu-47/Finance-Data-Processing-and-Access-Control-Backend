const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const { createRecord, getRecords } = require("../controllers/recordController");

router.post("/", auth, role(["ADMIN"]), createRecord);
router.get("/", auth, getRecords);

module.exports = router;