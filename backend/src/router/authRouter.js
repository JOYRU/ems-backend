import express from 'express'
import  {register,login,verify_user}  from '../controller/authController.js'
import verifyUser from '../middlewares/authMiddleware.js';
//import  verify_user  from '../controller/authController.js'



const authRouter = express.Router() ;
authRouter.post('/register',register)
authRouter.post('/login',login)
authRouter.get('/verify',verifyUser,verify_user)


export default authRouter ;


