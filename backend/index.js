import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import authRouter from './src/router/authRouter.js';
import  seedRouter  from "./src/router/seedRouter.js";
import deparmentRouter from "./src/router/department.js";


const app = express() ; 
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cookieParser()) ;



app.use('/api/auth',authRouter)
 app.use('/api/seed',seedRouter)
 app.use('/api/departments',deparmentRouter)

const mongodbURL = "mongodb+srv://joycseru:f01765711177@cluster0.l9t1yml.mongodb.net/ems" 

// connect to db and run server 
app.listen(process.env.PORT,async()=>{   
    console.log('server is running on port') ;    
    await mongoose.connect(mongodbURL) ; 
    console.log('Connection to db Successfully established') ;
})