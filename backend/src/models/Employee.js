import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employee_name:{type:String,required: true},
    email:{type:String}
},{ timestamps: true })

const Employee = mongoose.model("Employee",employeeSchema)

export default Employee