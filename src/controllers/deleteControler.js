const pool = require('../models/database.js');
const httpErrors = require('../helpers/httpErrors.js')


async function deleteHamburguer(req, res) {
    const { id } = req.query
    try {
        const client = await pool.connect()

        const querySelect = 'SELECT * FROM hamburguers WHERE id = $1'
        const deleteQuery = 'DELETE FROM hamburguers WHERE id = $1'

        const values = [Number(id)]
        const result = await client.query(querySelect, values)
        const data = result.rows


        if (data.length === 0) return httpErrors.itemNaoEncontrado(res)

        await client.query(deleteQuery, values)
        client.release()

        res.status(200).json({ Message: 'Item excluido com sucesso.' })
    } catch (err) {
        res.send.status(400).json({ Message: 'Erro ao tentar excluir o item.' })
    }
}

async function deleteBebida(req, res) {
    const { id } = req.query
    try {
        const client = await pool.connect()

        const querySelect = 'SELECT * FROM bebidas WHERE id = $1'
        const deleteQuery = 'DELETE FROM bebidas WHERE id = $1'

        const values = [Number(id)]
        const result = await client.query(querySelect, values)

        if (result.rows.length === 0) return httpErrors.itemNaoEncontrado(res)

        await client.query(deleteQuery, values)
        client.release()

        res.status(200).json({ Message: 'Item excluido com sucesso.' })
    } catch (err) {
        res.send.status(400).json({ Message: 'Erro ao tentar excluir o item.' })
    }
}

async function deleteCombos(req, res) {
    const { id } = req.query
    try {
        const client = await pool.connect()

        const querySelect = 'SELECT * FROM combos WHERE id = $1'
        const deleteQuery = 'DELETE FROM combos WHERE id = $1'

        const values = [Number(id)]
        const result = await client.query(querySelect, values)

        if (result.rows.length === 0) return httpErrors.itemNaoEncontrado(res)

        await client.query(deleteQuery, values)
        client.release()

        res.status(200).json({ Message: 'Item excluido com sucesso.' })
    } catch (err) {
        res.send.status(400).json({ Message: 'Erro ao tentar excluir o item.' })
    }
}

module.exports = {
    deleteHamburguer,
    deleteBebida,
    deleteCombos
}