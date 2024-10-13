import createError from 'http-errors'
import User from "../models/User.js";
import jwt from  'jsonwebtoken'

const verifyUser = async(req,res,next)=>{
     try{
    //     console.log("he...") ; 
        const token = req.headers.authorization.split(" ")[1] ; 

    //     //const token = req.cookies.token ;

      
    //     //console.log(token) ;
         if(!token){
             throw createError('400',"Token not Provided") ; 
         }
         const decoded = jwt.verify(token,process.env.JWT_ACTIVATION_KEY) ;
       // console.log(decoded); 
         if(!decoded){
            throw createError('402',"Token not valid") ; 

         }
         const user = await User.findById({_id:decoded._id}).select('-password') ;
         //console.log(user)
        if(!user){
            throw createError(404,"User not found") ; 
        }

        req.user = user ; 
        next()


     }catch(error){
        // throw createError(500,"server Error") ; 
         console.log(error)

       }
}

export default verifyUser