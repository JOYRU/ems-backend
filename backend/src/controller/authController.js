import User  from '../models/User.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import mongoose from 'mongoose';
const JWT_KEY = "ffff" ; 
const mongodbURL = "mongodb+srv://joycseru:f01765711177@cluster0.l9t1yml.mongodb.net/ems" ;


const login =async (req,res)=>{
   await  mongoose.connect(mongodbURL) ;
   try{
    const {email} = req.body ; 
    const user = await User.findOne({email})

    if(!user){
        res.status(404).json({
            success:false,
            error:"User not found"
        })
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        res.status(404).json({
            success:false,
            error:"Wrong Password"
        })
    }

    const token = jwt.sign({_id:user._id , role:user.role},
        JWT_KEY,{expiresIn:"1d"}
    )
    res.status(200).json({
        suceess:true,
        token , 
        user:{_id:user._id, name:user.name , role:user.role },
    })

   }catch(error){
    console.log(error) ;
   }
}

export {login}