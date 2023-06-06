import express from "express";
import { validateRegister, validateLogin } from "../middlewares/validateAuth.js";
import { authLogin, userRegister } from "../controllers/authControllers.js";
const authRoutes = express.Router()

authRoutes.post("/login", validateLogin, authLogin)
authRoutes.post("/logout")
authRoutes.post("/register", validateRegister, userRegister)

export default authRoutes