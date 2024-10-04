import User  from '../models/User.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import createHttpError from 'http-errors';
import createError from 'http-errors'
const JWT_KEY = "ffff" ; 
 import  createJSONWebToken  from '../helper/jsonwebToken.js';
 import  successResponse  from './responseController.js';
// const { jwtActivationKey } = require("../secret");
import { cookie } from 'express-validator';
import jwtActivationKey from '../secret.js';




const login =async (req,res,next)=>{
  
   try{
    const {email,password} = req.body ; 
    console.log(email) ;
    console.log(password) ;
    const user = await User.findOne({email})

    if(!user){
        throw createError(401,'User not found with this mail') ; 
    }
  
    //   const isPasswordMatch = await bcrypt.compare(password,user.password) ; 
    //    if(!isPasswordMatch){
    //        throw createError(401,'Email/Pass did not match') ; }

    const accessToken = jwt.sign({_id:user._id , role:user.role},
        jwtActivationKey,{expiresIn:"1d"}
    )
    res.cookie('access_token',accessToken,{
    maxAge:15*60*1000,
    httpOnly:true,
    //secure:true,
    sameSite: 'none'
    });
        //successResponse

    return successResponse(res, {
        statusCode:200,
        message:'user login Successfully',
        payload:{user}
,         }) ; 




    // res.status(200).json({
    //     suceess:true,
    //     message:'User Login Successfully',
    //     token , 
    //     user:{_id:user._id, name:user.name , role:user.role },
    // })

   }catch(error){
      next(error);
   }
}
const verify_user = (req,res,next)=>{
    return successResponse(res,{
        success:true,
        statusCode:200 , 
        message:"User Verify successfully",
        user:req.user
    })
}

export  {login ,verify_user} ;  



// const handleLogin = async(req,res,next)=>{
//     try{
//         const {email,password} = req.body ; 
        
//         const user = await User.findOne({email}) ; 
       

//         if(!user){
//             throw createHttpError(404,'User does not exist with this email.Please Register First') ; 


//         }
//         //compare password same or not

//        const isPasswordMatch = await bcrypt.compare(password,user.password) ; 
//        if(!isPasswordMatch){
//            throw createError(401,'Email/Pass did not match') ; 

//        }
//        //isBanned
//        if(user.isBanned){
//         throw createError(403,'You are Banned.Please contact Authority') ; 

//        }
//        //token , cookie
//        //create jwt 
//        const accessToken = createJSONWebToken({isAdmin:user.isAdmin},
//         jwtActivationKey,
//         '15m'
//        );

//        res.cookie('access_token',accessToken,{
//         maxAge:15*60*1000,
//         httpOnly:true,
//         //secure:true,
//         sameSite: 'none'
//        });
//         //successResponse

//         return successResponse(res, {
//             statusCode:200,
//             message:'user login Successfully',
//             payload:{}
// ,         }) ; 

//     }
//     catch(error){
//        next(error) ; 
//     }
// };

// const handleLogOut = async(req,res,next)=>{
//     try{
        
//         res.clearCookie('access_token') ; 

//         return successResponse(res, {
//             statusCode:200,
//             message:'user logout Successfully',
//             payload:{}
// ,         }) ; 

//     }
//     catch(error){
//        next(error) ; 
//     }
// };
// const isAdmin = async(req,res,next)=>{
//     try{
        
//         res.clearCookie('access_token') ; 

//         return successResponse(res, {
//             statusCode:200,
//             message:'user logout Successfully',
//             payload:{}
// ,         }) ; 

//     }
//     catch(error){
//        next(error) ; 
//     }
// };

// module.exports = {handleLogin,handleLogOut }