const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const tokenValidate = require("../middleWare/tokenValidator");
const UserValidate = require("../middleWare/UserValidator");

router.post("/createUser", userController.createUser);

router.post("/loginUser", userController.loginUser);

router.get("/getUserData/:userId",UserValidate.UserValidator,tokenValidate.tokenValidator,userController.getUserData);

router.put("/updateUser/:userId",UserValidate.UserValidator,tokenValidate.tokenValidator,userController.updateUser);

router.delete("/deleteUser/:userId",UserValidate.UserValidator,tokenValidate.tokenValidator,userController.deleteData);

module.exports = router;
