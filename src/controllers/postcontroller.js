const pool = require('../models/database.js');

async function addHamburguer(req, res) {
    const { hamburguer_name, description, preco, image } = req.body

    try {
        const newHamburguer = await pool.query(
            `INSERT INTO hamburguers (hamburguer_name, description, preco, image) 
             VALUES ($1, $2, $3, $4) returning *`, [hamburguer_name, description, preco, image])

        return res.status(201).json(newHamburguer.rows[0])
    } catch (err) {
        return res.status(400).json({ Message: 'Erro ao inserir os dados' })
    }
}

async function addBebidas(req, res) {
    const { refri_name, description, preco, image } = req.body

    try {
        const newBebida = await pool.query(
            `INSERT INTO bebidas (refri_name, description, preco, image) 
                 VALUES ($1, $2, $3, $4) returning *`, [refri_name, description, preco, image])
        return res.status(201).json(newBebida.rows[0])

    } catch (err) {
        return res.status(500).json({ Message: 'Erro ao inserir os dados' })
    }
}

async function addCombos(req, res) {
    const { combo_name, description, preco, image } = req.body

    try {
        const newCombo = await pool.query(
            `INSERT INTO combos (combo_name, description, preco, image) 
                 VALUES ($1, $2, $3, $4) returning *`, [combo_name, description, preco, image])
        return res.status(201).json(newCombo.rows[0])
    } catch (err) {
        return res.status(500).json({ Message: 'Erro ao inserir os dados' })
    }
}

module.exports = {
    addHamburguer,
    addBebidas,
    addCombos,
}