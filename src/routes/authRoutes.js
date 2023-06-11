const express = require("express");
const { validateRegister, validateLogin } = require("../middlewares/validateAuth.js");
const { authLogin, userRegister } = require("../controllers/authControllers.js");
const authRoutes = express.Router()

authRoutes.post("/login", validateLogin, authLogin)
authRoutes.post("/logout")
authRoutes.post("/register", validateRegister, userRegister)

module.exports = authRoutes 