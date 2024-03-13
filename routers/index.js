const express = require("express");

const router = express.Router();

// routes
const authRoutes = require("./auth.router");
const dashboardRoutes = require("./dashboard.router");
const { verify } = require("../middleware/verify");

router.use("/auth", authRoutes);
router.use("/dashboard", verify, dashboardRoutes);

module.exports = router;
