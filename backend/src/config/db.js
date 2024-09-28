// const mongoose = require('mongoose') ;
const mongoose = require("mongoose") ; 

const mongodbURL = "mongodb+srv://joycseru:f01765711177@cluster0.l9t1yml.mongodb.net/bookStore" 

const connectDB = async() =>{
    try{
        await mongoose.connect(mongodbURL) ; 
        console.log('Connection to db Successfully established') ;
    }catch(error){
        console.log(error) ;
    }
    
}

 module.exports = {connectDB} ; 
 //exports.connectDB = connectDB;

// export default connectDB ; 