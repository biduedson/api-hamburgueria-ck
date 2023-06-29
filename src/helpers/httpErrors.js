const httpErrors = {
    itemNaoEncontrado: (res) => {
        res.status(404).json({ Message: 'Item não encontrado' })
    }
}

module.exports = httpErrors