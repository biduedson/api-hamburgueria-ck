const express = require('express')

const app = require('./server.js')

app.use(express.json())

app.listen(8080, () => {
    console.log('Servidor rodando!')
})