import pool from "../models/database.js"

export async function hamburguerList(req, res) {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM hamburguers')
        const data = result.rows;
        client.release()
        res.status(200).json(data)
    } catch (err) {
        console.log('Erro ao consultar os dados solicitados', err);
        res.status(500).json({ error: 'Erro ao consultar os dados' })
    }
}

export async function bebidasList(req, res) {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM bebidas')
        const data = result.rows;
        client.release()
        res.status(200).json(data)
    } catch (err) {
        console.log('Erro ao consultar os dados solicitados', err)
        res.status(500).json({ error: 'Erro ao consultar os dados' })
    }
}

export async function combosList(req, res) {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM combos');
        const data = result.rows;
        client.release()
        res.status(200).json(data)
    } catch (err) {
        console.log('Erro ao consultar os dados solicitados', err)
        res.status(500).json({ error: 'Erro ao consultar os dados' })
    }
}

