const express = require('express')
const deleteRoutes = express.Router();
const { deleteHamburguer, deleteBebida, deleteCombos } = require('../controllers/deleteControler.js')
const { validateDeleteHamburguers, validateDeleteBebidas, validateDeleteCombos } = require('../middlewares/validateDelete.js')
const userAuthentication = require('../middlewares/authentication.js')

deleteRoutes.use(userAuthentication)
deleteRoutes.delete("/hamburguers/:id", validateDeleteHamburguers, deleteHamburguer)
deleteRoutes.delete("/bebidas/:id", validateDeleteBebidas, deleteBebida)
deleteRoutes.delete("/combos/:id", validateDeleteCombos, deleteCombos)

module.exports = deleteRoutes


