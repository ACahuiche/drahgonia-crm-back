const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/save", userController.saveUser);
router.put("/update", userController.updateUser);
router.delete("/delete", userController.deleteUser);
router.get("/getbyid", userController.getUserById);
router.get("/getall",userController.getAll);

module.exports = router;