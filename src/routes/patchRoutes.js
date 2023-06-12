const express = require('express');
const patchRoutes = express.Router();


patchRoutes.patch("/hamburguers")
patchRoutes.patch("/bebidas")
patchRoutes.patch("/combos")

module.exports = patchRoutes


