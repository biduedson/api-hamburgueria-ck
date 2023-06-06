import express from 'express'
import getRoutes from './routes/getRoutes.js'
import deleteRoutes from './routes/deleteRoutes.js'
import postRoutes from './routes/postRoutes.js'
import patchRoute from './routes/patchroutes.js'
import uploadRoute from './routes/uploads.js'
import authRoutes from './routes/authRoutes.js'
const app = express()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/get', getRoutes)
app.use('/api/delete', deleteRoutes)
app.use('/api/patch', patchRoute)
app.use('/api/uploads', uploadRoute)



export default app
