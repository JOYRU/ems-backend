import Employee from "../models/Employee.js";
import Department from "../models/Employee.js";
import User from "../models/User.js";
import successResponse from "./responseController.js";
import multer from 'multer' ; 
import bcrypt, { hash } from 'bcrypt'
import path from "path"

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"public/uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})

const addEmployee =async(req,res,next)=>{
   
   

       
        const{employee_name,email,employee_id,dob,gender,maritul_status,designation,department,salary,password,role} = req.body ; 
          console.log(employee_name,email,employee_id,dob,gender,maritul_status,designation,department,salary,password,role)
        const user = await User.findOne({email}) ; 
    
        // if(user){
        //     return res.status(400).json({success:false,error:"User already registered in emp"})
        // }
     
     const hashPassword = await bcrypt.hash(password,10) ; 
   
      console.log("hello")  ; 
      console.log(employee_name)
     const newUser = new User({
        name:employee_name,
        email,
        password:hashPassword,
        role,
        profileImage:req.file ? req.file.filename:"",
        
     })

     const saveUser = await newUser.save() ;

     
        const newEmp = new Employee({
            userId:saveUser._id,
            employee_id,
            dob,
            gender,
            maritul_status,
            designation,
            department,
            salary
        })
       await newEmp.save() ; 
     // res.status(201).send('User department create successfully');
      return res.status(200).json({success:true,employyee:newEmp})
 
   
}

const getEmployees =async(req,res,next)=>{
   
    try{
        const employees = await Employee.find().populate('userId').populate('department')
        return res.status(200).json({
            success:true,
            employees
        })
       
    }catch(error){
       alert(error) 
       return res.status(500).json({success:false,error:"get Employees sever error"})
    }
   
}

const getEmployee=async(req,res)=>{
    try{
        const {id} = req.params ; 
        const employee= await Employee.findById({_id:id}) ;
        return res.status(200).json({success:true,employee})

    }catch(error){
        alert(error)
    }
}


const editEmployee=async(req,res)=>{
    try{
        const {id} = req.params ; 
        console.log(id) ; 
        const{employee_name,email} = req.body ; 
         const updateEmp = await Employee.findByIdAndUpdate({_id: id},{
            employee_name,
            email
         }) ; 

     // res.status(201).send('User department create successfully');
      return res.status(200).json({success:true,department:updateEmp})

    }catch(error){
       console.log(error)
    }
}

const deleteEmployee=async(req,res)=>{
    try{
        const {id} = req.params ; 
        console.log(id);
     
    
         const deleteEmp = await Employee.findByIdAndDelete({_id: id}) ; 

     // res.status(201).send('User department create successfully');
      return res.status(200).json({success:true,employee:deleteEmp})

    }catch(error){
       console.log(error)
    }
}


export  {upload,addEmployee,getEmployees,getEmployee,editEmployee,deleteEmployee}