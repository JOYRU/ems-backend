import Employee from "../models/Employee.js";
import Department from "../models/Employee.js";
import successResponse from "./responseController.js";

const addEmployee =async(req,res,next)=>{
   
    try{
       
        const{employee_name,email} = req.body ; 
     
        const newEmp = new Employee({
            employee_name,
            email
        })
       await newEmp.save() ; 
     // res.status(201).send('User department create successfully');
      return res.status(200).json({success:true,employyee:newEmp})

    //   return successResponse(res, {
    //                 statusCode:200,
    //                  message:'user login Successfully',
    //                  token:newDept,
    //                  user:''
    //             }) ; 

       

    }catch(error){
        console.log(error)
        next() 
     ///   return res.status(500).json({success:false,error:"server error in department"})
    }
   
}

const getEmployees =async(req,res,next)=>{
   
    try{
        const employees = await Employee.find()
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


export  {addEmployee,getEmployees,getEmployee,editEmployee,deleteEmployee}