const express = require('express')
const deleteRoutes = express.Router();

deleteRoutes.delete("/hamburguers")
deleteRoutes.delete("/bebidas")
deleteRoutes.delete("/combos")

module.exports = deleteRoutes


