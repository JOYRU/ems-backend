import Department from "../models/Department.js";
import successResponse from "./responseController.js";

const addDepartment =async(req,res,next)=>{
   
    try{
       
        const{dept_name,description} = req.body ; 
     
        const newDept = new Department({
            dept_name,
            description
        })
       await newDept.save() ; 
     // res.status(201).send('User department create successfully');
      return res.status(200).json({success:true,department:newDept})

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

const getDepartments =async(req,res,next)=>{
   
    try{
        const departments = await Department.find()
        return res.status(200).json({
            success:true,
            departments
        })
       
    }catch(error){
       alert(error) 
       return res.status(500).json({success:false,error:"get department sever error"})
    }
   
}

const getDepartment=async(req,res)=>{
    try{
        const {id} = req.params ; 
        const department= await Department.findById({_id:id}) ;
        return res.status(200).json({success:true,department})

    }catch(error){
        alert(error)
    }
}


const editDepartment=async(req,res)=>{
    try{
        const {id} = req.params ; 
        console.log(id) ; 
        const{dept_name,description} = req.body ; 
         const updataDept = await Department.findByIdAndUpdate({_id: id},{
            dept_name,
            description
         }) ; 

     // res.status(201).send('User department create successfully');
      return res.status(200).json({success:true,department:updataDept})

    }catch(error){
       console.log(error)
    }
}

const deleteDepartment=async(req,res)=>{
    try{
        const {id} = req.params ; 
        console.log(id);
     
    
         const deleteDept = await Department.findByIdAndDelete({_id: id}) ; 

     // res.status(201).send('User department create successfully');
      return res.status(200).json({success:true,department:deleteDept})

    }catch(error){
       console.log(error)
    }
}


export  {addDepartment,getDepartments,getDepartment,editDepartment,deleteDepartment}