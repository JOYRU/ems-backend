import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{type:String, requires:true},
    email:{type:String, requires:true},
    password: {type:String, requires:true},
    role:{type:String,enum:["admin","employee"] , requires:true},
    profileImage: {type:String},
}, { timestamps: true }) ; 

const User = mongoose.model("User",userSchema)
// module.exports = User 

export default User