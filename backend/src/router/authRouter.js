import express from 'express'
import  {login,verify_user}  from '../controller/authController.js'
import verifyUser from '../middlewares/authMiddleware.js';
//import  verify_user  from '../controller/authController.js'



const authRouter = express.Router() ;
authRouter.post('/login',login)
authRouter.post('/verify',verifyUser,verify_user)


export default authRouter ;


