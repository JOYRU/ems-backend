import User  from '../models/User.js'
// const data = require("../data");

import data from '../data.js'

const seedUser =async (req,res,next)=>{

    try{
      await User.deleteMany({}) ; 
      const users = await User.insertMany(data.users) ; 

       return res.status(201).json(users) ; 

    }catch(error){
        next(error) ; 
    }
}

export default seedUser ; 