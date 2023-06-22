const jwt = require("jsonwebtoken");
require('dotenv').config()


function userAuthentication(req, res, next) {

    const token = req.cookies.access_token
    if (!token) return res.status(401).json({ mensagem: "Não autorizado" })

    try {
        const tokenUser = jwt.verify(token, process.env.JWT_PASS)
        next()
    }
    catch (err) {
        return res.status(401).json({ mensagem: "Não autorizado" })
    }

}

module.exports = userAuthentication