import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    dept_name:{type:String,required: true},
    description:{type:String}
},{ timestamps: true })

const Department = mongoose.model("Department",departmentSchema)

export default Department