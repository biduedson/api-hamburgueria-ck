import express from "express";
import { hamburguerList, bebidasList, combosList } from "../controllers/getController.js"
const getRoutes = express.Router();

getRoutes.get("/hamburguers", hamburguerList)
getRoutes.get("/bebidas", bebidasList)
getRoutes.get("/combos", combosList)

export default getRoutes


