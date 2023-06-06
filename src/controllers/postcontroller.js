import pool from "../models/database.js";

export async function addHamburguer(req, res) {
    try {
        const { hamburguer_name, description, preco, image } = req.body
        const client = await pool.connect()
        const query = 'INSERT INTO hamburguers (hamburguer_name, description, preco, image) VALUES ($1, $2, $3, $4)'
        const values = [
            hamburguer_name,
            description,
            preco,
            image
        ]
        await client.query(query, values)
        client.release();
        res.status(201).json({ Message: 'Hamburguer inserido no menu com sucesso' })
    } catch (err) {
        console.log('Erro ao inserir os dados', err)
        res.status(400).json({ Message: 'Erro ao inserir os dados' })
    }
}

export async function addBebidas(req, res) {
    try {
        const { refri_name, description, preco, image } = req.body
        const client = await pool.connect()
        const query = 'INSERT INTO bebidas (refri_name, description, preco, image) VALUES ($1, $2, $3, $4)'
        const values = [
            refri_name,
            description,
            preco,
            image
        ]
        await client.query(query, values)
        client.release();
        res.status(201).json({ Message: 'Bebida inserida no menu com sucesso' })
    } catch (err) {
        console.log('Erro ao inserir os dados', err)
        res.status(400).json({ Message: 'Erro ao inserir os dados' })
    }
}

export async function addCombos(req, res) {
    try {
        const { combo_name, description, preco, image } = req.body
        const client = await pool.connect()
        const query = 'INSERT INTO combos (combo_name, description, preco, image) VALUES ($1, $2, $3, $4)'
        const values = [
            combo_name,
            description,
            preco,
            image
        ]
        await client.query(query, values)
        client.release();
        res.status(201).json({ Message: 'Combo inserido no menu com sucesso' })
    } catch (err) {
        console.log('Erro ao inserir os dados', err)
        res.status(400).json({ Message: 'Erro ao inserir os dados' })
    }
}