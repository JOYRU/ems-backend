import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import authRouter from './src/router/authRouter.js';



const app = express() ; 
app.use(cors())
app.use(express.json())
app.use('/api/auth',authRouter)

const mongodbURL = "mongodb+srv://joycseru:f01765711177@cluster0.l9t1yml.mongodb.net/ems" 

// connect to db and run server 
app.listen(process.env.PORT,async()=>{   
    console.log('server is running on port') ;    
    await mongoose.connect(mongodbURL) ; 
    console.log('Connection to db Successfully established') ;
})