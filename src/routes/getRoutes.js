const express = require('express');
const { hamburguerList, bebidasList, combosList } = require("../controllers/getController.js")
const getRoutes = express.Router();
const userAuthentication = require('../middlewares/authentication.js')

getRoutes.use(userAuthentication)
getRoutes.get("/hamburguers", hamburguerList)
getRoutes.get("/bebidas", bebidasList)
getRoutes.get("/combos", combosList)

module.exports = getRoutes


