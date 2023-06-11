const pool = require("../models/database.js")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()


async function userRegister(req, res) {

    try {
        const { user_name, email, senha } = req.body
        const client = await pool.connect();

        const SelctQuery = 'SELECT * FROM users WHERE email = $1'
        const emailValue = [email]
        const result = await client.query(SelctQuery, emailValue)

        const rows = result.rows;

        if (rows.length > 0) return res.status(400).json({ message: 'Já existe um usuário cadastrado com o  email informado' })

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(senha, salt)
        const query = "INSERT INTO users (user_name, email, senha ) VALUES ($1, $2, $3)"
        const values = [
            user_name,
            email,
            hash
        ]
        await client.query(query, values)
        client.release()
        res.status(200).json({ message: 'Usuário cadastrado  com sucesso.' })
    } catch (err) {
        console.log('Erro ao inserir os dados de registro', err)
        res.status(500).json({ error: 'Erro ao inserir os dados' })
    }


}

async function authLogin(req, res) {
    try {
        const { email, senha } = req.body
        const client = await pool.connect();

        const query = "SELECT * FROM users WHERE email = $1"
        const value = [email]

        const result = await client.query(query, value)
        client.release()
        const rows = result.rows;

        if (rows.length === 0) {
            return res.status(404).json({ message: "E- mail  não encontrado" })
        }

        const passwordCheck = bcrypt.compareSync(senha, rows[0].senha)
        if (!passwordCheck) {
            res.status(400).json({ message: 'Usuario ou senha incorretos' })
        }

        const token = jwt.sign({ id: rows[0].id }, process.env.JWT_PASS, {
            expiresIn: '30m'
        })
        const { senha: retiraSenha, ...rest } = rows[0]
        res.cookie("acess_token", token, {
            httpOnly: true,
        }).status(200).json(rest)

    } catch (err) {

    }

}

module.exports = {
    userRegister,
    authLogin
}