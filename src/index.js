import express from 'express'

import app from './server.js'

app.use(express.json())

app.listen(8080, () => {
    console.log('Servidor rodando!')
})