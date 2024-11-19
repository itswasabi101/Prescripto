import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudnary.js'
import adminRouter from './routes/adminRoute.js'


const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.use('/api/admin',adminRouter)

app.get('/',(req,res)=>{
    res.send('Api working yooo haha')
})

app.listen(port,()=>console.log("Server started",port))