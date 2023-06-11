const express = require("express");
const { hamburguerList, bebidasList, combosList } = require("../controllers/getController.js")
const getRoutes = express.Router();

getRoutes.get("/hamburguers", hamburguerList)
getRoutes.get("/bebidas", bebidasList)
getRoutes.get("/combos", combosList)

module.exports = getRoutes


