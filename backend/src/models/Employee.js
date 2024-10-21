import mongoose from "mongoose";



const employeeSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    //employeeId:{type:String,required:true , unique:true},
    dob: {type:Date},
    gender:{type:String},
    maritalStatus:{type:String},
    designation:{type:String},
    // department:{type:mongoose.Schema.Types.ObjectId,ref:"Department" },
    department:{type:String},
    salary:{type:String, required:true},

},{ timestamps: true })

const Employee = mongoose.model("Employee",employeeSchema)

export default Employee