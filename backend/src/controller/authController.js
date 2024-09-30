import User  from '../models/User.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import createHttpError from 'http-errors';
import createError from 'http-errors'
const JWT_KEY = "ffff" ; 


const login =async (req,res,next)=>{
  
   try{
    const {email,password} = req.body ; 
    console.log(email) ;
    console.log(password) ;
    const user = await User.findOne({email})

    if(!user){
        throw createError(401,'User not found with this mail') ; 
    }
    // const isMatch = await bcrypt.compare(password,user.password)
    // if(!isMatch){
    //     throw createError(401,'User password is not matched') ; 
    // }

    const token = jwt.sign({_id:user._id , role:user.role},
        JWT_KEY,{expiresIn:"1d"}
    )
    res.status(200).json({
        suceess:true,
        message:'User Login Successfully',
        token , 
        user:{_id:user._id, name:user.name , role:user.role },
    })

   }catch(error){
      next(error);
   }
}

export default login