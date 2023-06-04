import express from "express";
import { hamburguerList } from "../controllers/getController.js"
const getRoutes = express.Router();

getRoutes.get("/hamburguers", hamburguerList)
getRoutes.get("/bebidas")
getRoutes.get("/combos")

export default getRoutes


