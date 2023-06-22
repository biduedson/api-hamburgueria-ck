const jwt = require('jsonwebtoken')
require('dotenv').config()


function validateDeleteHamburguers(req, res, next) {
    const { id } = req.query
    if (!id) return res.status(400).json({ Message: 'Id não informado' })
    next()

}

function validateDeleteBebidas(req, res, next) {
    const { id } = req.query
    if (!id) return res.status(400).json({ Message: 'Id não informado' })
    next()
}

function validateDeleteCombos(req, res, next) {
    const { id } = req.query
    if (!id) return res.status(400).json({ Message: 'Id não informado' })
    next()
}

module.exports = {
    validateDeleteHamburguers,
    validateDeleteBebidas,
    validateDeleteCombos
}