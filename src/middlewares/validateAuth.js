function validateRegister(req, res, next) {
    const { user_name, email, senha } = req.body
    if (!user_name) {
        return res.status(400).json({ Message: "Campo usuario não pode estar vazio" })
    }

    if (!email) {
        return res.status(400).json({ Message: "Campo email não pode estar vazio" })
    }

    if (!senha) {
        return res.status(400).json({ Message: "Campo senha não pode estar vazio" })
    }
    next()
}

function validateLogin(req, res, next) {
    const { email, senha } = req.body

    if (!email) {
        return res.status(400).json({ Message: "Campo email não pode estar vazio" })
    }

    if (!senha) {
        return res.status(400).json({ Message: "Campo senha não pode estar vazio" })
    }
    next()

}

module.exports = {
    validateLogin,
    validateRegister
}