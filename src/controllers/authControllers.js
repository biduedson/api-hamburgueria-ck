const pool = require('../models/database.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()


async function userRegister(req, res) {

    try {
        const { user_name, email, senha } = req.body
        const findUser = await pool.query('SELECT * FROM users WHERE email = $1', [email])

        if (findUser.rows.length > 0) return res.status(400).json({ message: 'Já existe um usuário cadastrado com o  email informado' })

        const passworCript = bcrypt.hashSync(senha, 10)

        const newUser = await pool.query(
            `INSERT INTO users (user_name, email, senha ) VALUES 
             ($1, $2, $3) returning *`, [user_name, email, passworCript])

        res.status(200).json(newUser.rows[0])
    } catch (err) {
        res.status(500).json({ error: 'Erro ao inserir os dados' })
    }
}

async function authLogin(req, res) {

    try {
        const { email, senha } = req.body

        const validateUser = await pool.query("SELECT * FROM users WHERE email = $1", [email])
        if (validateUser.rows.length < 1) {
            return res.status(404).json({ message: "E- mail  não encontrado" })
        }
        const passwordCheck = bcrypt.compareSync(senha, validateUser.rows[0].senha)
        console.log(passwordCheck)
        if (!passwordCheck) {
            res.status(400).json({ message: 'Usuario ou senha incorretos' })
        }

        const token = jwt.sign({ id: validateUser.rows[0].id }, process.env.JWT_PASS, {
            expiresIn: '24h'
        })
        const { senha: retiraSenha, ...rest } = validateUser.rows[0]
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