require('dotenv').config
const express = require('express')
const app = require('./server')
const multer = require('multer')


app.use(express.json())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        const uniqueFileName = Date.now() + '-' + Math.round(Math.random() * 1E9)
    }
})

const upload = multer({ storage })
module.exports = upload

const port = process.env.PORT || 3003
app.listen(port)

