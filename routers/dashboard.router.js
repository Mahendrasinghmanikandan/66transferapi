const express = require("express");
const router = express.Router();
const { getOneUserData } = require("../controller/dashboard.controller");

router.get("/get_one_user", getOneUserData);

module.exports = router;
