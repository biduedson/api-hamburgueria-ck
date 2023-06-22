const express = require('express');
const patchRoutes = express.Router();
const { validatePatchHamburguers, validatePatchBebidas, validatePatchCombos } = require('../middlewares/validatePatch.js')
const { patchHamburguer, patchBebidas, patchcombos } = require('../controllers/patchController.js')
const userAuthentication = require('../middlewares/authentication.js')

patchRoutes.use(userAuthentication)
patchRoutes.patch("/hamburguers", validatePatchHamburguers, patchHamburguer)
patchRoutes.patch("/bebidas", validatePatchBebidas, patchBebidas)
patchRoutes.patch("/combos", validatePatchCombos, patchcombos)

module.exports = patchRoutes


