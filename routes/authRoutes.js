const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/authtenticateUser", authController.authtenticateUser);

module.exports = router;