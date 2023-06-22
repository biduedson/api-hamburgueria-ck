const pool = require('../models/database.js');

async function patchHamburguer(req, res) {
    try {
        const { id, hamburguer_name, description, preco, image } = req.body
        const selectQuery = "SELECT * FROM hamburguers WHERE id = $1"
        const valueId = [
            id
        ]
        const client = await pool.connect();
        const result = await client.query(selectQuery, valueId)
        const data = result.rows

        if (data.length === 0) return res.status(404).json({ Message: 'Item não encontrado.' })

        const updateValues = {
            nome: hamburguer_name || data.hamburguer_name,
            description: description || data.description,
            preco: preco || data.preco,
            image: image || data.image,
        }
        const values = Object.values(updateValues)

        const updateQuery = "UPDATE hamburguers set hamburguer_name = $1, description =$2, preco = $3, image = $4"
        await client.query(updateQuery, values)

        client.release();
        res.status(200).json({ Messagwe: 'Item atualizado com sucesso.' })
    } catch (err) {
        res.status(400).json({ Message: 'Erro ao atualizar os dados.' })
    }
}

async function patchBebidas(req, res) {
    try {
        const { id, refri_name, description, preco, image } = req.body
        const selectQuery = "SELECT * FROM bebidas WHERE id = $1"
        const valueId = [
            id
        ]
        const client = await pool.connect();
        const result = await client.query(selectQuery, valueId)
        const data = result.rows

        if (data.length === 0) return res.status(404).json({ Message: 'Item não encontrado.' })

        const updateValues = {
            nome: refri_name || data.hamburguer_name,
            description: description || data.description,
            preco: preco || data.preco,
            image: image || data.image,
        }
        const values = Object.values(updateValues)

        const updateQuery = "UPDATE bebidas set refri_name = $1, description =$2, preco = $3, image = $4"
        await client.query(updateQuery, values)

        client.release();
        res.status(200).json({ Messagwe: 'Item atualizado com sucesso.' })
    } catch (err) {
        res.status(400).json({ Message: 'Erro ao atualizar os dados.' })
    }
}

async function patchcombos(req, res) {
    try {
        const { id, combo_name, description, preco, image } = req.body
        const selectQuery = "SELECT * FROM combos WHERE id = $1"
        const valueId = [
            id
        ]
        const client = await pool.connect();
        const result = await client.query(selectQuery, valueId)
        const data = result.rows

        if (data.length === 0) return res.status(404).json({ Message: 'Item não encontrado.' })

        const updateValues = {
            nome: combo_name || data.hamburguer_name,
            description: description || data.description,
            preco: preco || data.preco,
            image: image || data.image,
        }
        const values = Object.values(updateValues)
        console.log(values)
        const updateQuery = "UPDATE combos set combo_name = $1, description =$2, preco = $3, image = $4"
        await client.query(updateQuery, values)

        client.release();
        res.status(200).json({ Messagwe: 'Item atualizado com sucesso.' })
    } catch (err) {
        res.status(400).json({ Message: 'Erro ao atualizar os dados.' })

    }
}

module.exports = {
    patchHamburguer,
    patchBebidas,
    patchcombos
}
