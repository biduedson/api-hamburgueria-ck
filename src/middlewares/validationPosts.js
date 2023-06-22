const jwt = require("jsonwebtoken");
require('dotenv').config()


function hambuguerPost(req, res, next) {

    const { hamburguer_name, description, preco } = req.body

    if (!hamburguer_name) {
        return res.status(400).json({ Message: "Nome hambuguer não pode estar vazio" })
    }

    if (!description) {
        return res.status(400).json({ Message: "Descrição do hamburguer não pode estar vazio" })
    }

    if (!preco) {
        return res.status(400).json({ Message: "Preço do hamburguer não pode estar vazio" })
    }
    next()
}

function bebidasPost(req, res, next) {
    const { refri_name, description, preco } = req.body
    if (!refri_name) {
        return res.status(400).json({ Message: "Nome da bebida  não pode estar vazio" })
    }

    if (!description) {
        return res.status(400).json({ Message: "Descrição da bebida não pode estar vazio" })
    }

    if (!preco) {
        return res.status(400).json({ Message: "Preço da bebida  não pode estar vazio" })
    }
    next()
}

function combosPost(req, res, next) {
    const { combo_name, description, preco } = req.body
    if (!combo_name) {
        return res.status(400).json({ Message: "Nome do combo  não pode estar vazio" })
    }

    if (!description) {
        return res.status(400).json({ Message: "Descrição do combo não pode estar vazio" })
    }

    if (!preco) {
        return res.status(400).json({ Message: "Preço do combo  não pode estar vazio" })
    }
    next()
}

module.exports = {
    hambuguerPost,
    bebidasPost,
    combosPost
}