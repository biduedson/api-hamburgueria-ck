import express from 'express'
import app from './server.js'
import multer from 'multer'

app.use(express.json())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        const uniqueFileName = Date.now() + '-' + Math.round(Math.random() * 1E9)
    }
})

export const upload = multer({ storage })

app.listen(8080, () => {
    console.log('Servidor rodando!')
})