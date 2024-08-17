const express = require("express");
const router = express.Router();
const securityToken = require("../middlewares/securityToken");

const userController = require("../controllers/userController");

router.post("/", securityToken.validate, userController.saveUser);
router.post("/saveadmin17653", userController.saveUser);
router.put("/", securityToken.validate, userController.updateUser);
router.delete("/:id", securityToken.validate, userController.deleteUser);
router.get("/getbyid/:id", securityToken.validate, userController.getUserById);
router.get("/getall", securityToken.validate, userController.getAll);

module.exports = router;