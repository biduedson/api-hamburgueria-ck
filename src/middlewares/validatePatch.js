const jwt = require('jsonwebtoken')
require('dotenv').config()

function validatePatchHamburguers(req, res, next) {
    const { hamburguer_name, description, preco, image, id } = req.body

    if (!hamburguer_name && !description && !preco && !image) {
        return res.status(400).json({ Message: 'Ao menos um um campo tem que estar preenchido.' })
    }

    if (!id) return res.status(400).json({ Message: 'Id não informado' })

    if (!Number.isInteger(id)) return res.status(400).json({ Message: 'Id com formato invalido' })
    next()


}

function validatePatchBebidas(req, res, next) {


    const { refri_name, description, preco, image, id } = req.body
    if (!refri_name && !description && !preco && !image) {
        return res.status(400).json({ Message: 'Ao menos um um campo tem que estar preenchido.' })
    }

    if (!id) {
        return res.status(400).json({ Message: 'Id não informado' })
    }

    if (!Number.isInteger(id)) return res.status(400).json({ Message: 'Id com formato invalido' })
    next()


}

function validatePatchCombos(req, res, next) {

    const { combo_name, description, preco, image, id } = req.body

    if (!combo_name && !description && !preco && !image) {
        return res.status(400).json({ Message: 'Ao menos um um campo tem que estar preenchido.' })
    }
    if (!id) return res.status(400).json({ Message: 'Id não informado' })

    if (!Number.isInteger(id)) return res.status(400).json({ Message: 'Id com formato invalido' })
    next()
}

module.exports = {
    validatePatchHamburguers,
    validatePatchBebidas,
    validatePatchCombos
}