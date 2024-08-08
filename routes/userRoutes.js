const express = require("express");
const router = express.Router();
const securityToken = require("../middlewares/securityToken");

const userController = require("../controllers/userController");

router.post("/save", securityToken.validate, userController.saveUser);
router.post("/saveadmin17653", userController.saveUser);
router.put("/update", securityToken.validate, userController.updateUser);
router.delete("/delete", securityToken.validate, userController.deleteUser);
router.get("/getbyid", securityToken.validate, userController.getUserById);
router.get("/getall", securityToken.validate, userController.getAll);

module.exports = router;