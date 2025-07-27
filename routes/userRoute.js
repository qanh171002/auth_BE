const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/auth/signup", userController.signup);
router.post("/auth/login", userController.login);
router.get("/me", userController.getMe);

module.exports = router;
