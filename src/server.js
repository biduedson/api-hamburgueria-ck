
const express = require('express')
const cookieParser = require("cookie-parser")
const getRoutes = require('./routes/getRoutes.js')
const deleteRoutes = require('./routes/deleteRoutes.js')
const postRoutes = require('./routes/postRoutes.js')
const patchRoute = require('./routes/patchroutes.js')
const uploadRoute = require('./routes/uploads.js')
const authRoutes = require('./routes/authRoutes.js')

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/get', getRoutes)
app.use('/api/delete', deleteRoutes)
app.use('/api/patch', patchRoute)
app.use('/api/uploads', uploadRoute)



module.exports = app 