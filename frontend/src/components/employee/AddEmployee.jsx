import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { fetchDepartments } from '../../utils/EmployeeHelper';
const AddEmployee = () => {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({})
    const [departments,setDepartments] = useState([]) ;
  
    
    const handleChange= (e)=>{
      const{name,value,files}= e.target 
      if(name=="image"){
        setFormData((prevData)=> ({...prevData,[name]:files[0]}))
      }else{
        setFormData((prevData)=> ({...prevData,[name]:value}))
      }
    }
    useEffect(()=>{
                const fetchDepartments = async()=>{
                  try{
                    // const response = await axios.get('http://localhost:5000/api/departments',{
                    //   headers: {
                    //     "Authorization" : 'Bearer '+localStorage.getItem('token')
                    //   }
                    // })
                      const response = await axios.get('http://localhost:5000/api/departments')
                      
               
                      if(response.data.success){
                       // console.log(response.data.departments)
                        setDepartments(response.data.departments) 
                     
                       }        
                             
                  }
                    catch(error){
                   alert(error)
                   }

                  }
          fetchDepartments() ;
     },[])



    const handleSubmit =async (e)=>{
        e.preventDefault() ; 
        //let formData = new FormData();
        // Object.keys(inputData).forEach(fieldName => {
        //   console.log(fieldName, inputData[fieldName]);
        //   formData.append(fieldName, inputData[fieldName]);
        // })

        let formDataObj = new FormData();
        Object.keys(formData).forEach(key=>{
         // console.log(key,formData[key]) ;
          formDataObj.append(key,formData[key])
        })

        console.log(formDataObj)
    
        try{
         
           const response = await axios.post('http://localhost:5000/api/employees/add', formDataObj);
    
            
            if(response){
               navigate("/admin-dashboard/employees")
            }
    
        }catch(error){
          if(error.response && !error.response.data.success)
           alert(error)
        }

    }
  return (
    <div className='max-w-3xl mx-auto mt-10 bg-white p-7 rounded-md shadow-md w-96'>
    <h3 className='text-2xl font-bold mb-6'>Add Employee</h3>
    <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="employee_name" className='text-sm font-medium text-gray-700'>Emp Name</label>
            <input type="text" placeholder='Enter Emp Name'
            // value={employee_name}             
             name="employee_name"     
             onChange={handleChange}
            className='mt-1 w-full p-2 border boder-gray-300 rounded-md'  required/>
        </div>
        {/*employee id*/}
        <div>
            <label htmlFor="employee_id">Employee Id</label>
            <input type="text" placeholder='Employee Id' 
             name="employee_id"
            //  value={email}
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='email' 
            name="email"
             //value={email}
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>

        <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date Of Birth</label>
            <input type="date" placeholder='DOB' 
             name="dob"
             //value={email}
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>

        <div>
            <label htmlFor="gender">Gender</label>
             <select name="gender"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
              >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>

             </select>
        </div>
        <div>
            <label htmlFor="maritul_status" className="block text-sm font-medium text-gray-700">Marital Status</label>
            <select name="maritul_status" 
               onChange={handleChange}
             placeholder="Maritul Status"
             className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            >
              <option value="">Select Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
        </div>

        <div>
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
            <input type="text" placeholder='designation' 
             name="designation"
             //value={email}
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>

        <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">department</label>
            <select name="department" 
               onChange={handleChange}
            
             className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            >
              <option value="">Select Department</option>

               {
                departments.map((dep)=>(

                 
                   <option key={dep._id} >{dep.dept_name}</option>
                ))
               }
              
                 {/* { items.map(item => (
               
                   <option key={item.id} value={item.id}>{item.name}</option>
                 )) 
                } */}
              
           
            </select>
        </div>
        <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
            <input type="text" placeholder='Salary' 
             name="salary"
            // value={email}
            onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>
        <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="text" placeholder='password' 
             name="password"
           //  value={email}
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>
        <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select name="role" 
               onChange={handleChange}
            
             className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
        </div>
        <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
            <input type="file" placeholder='Upload Image' 
             name="image"

             accept="image/"
            
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>


        <button type="submit" className='w-full mt-6 bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded'>Add Employee</button>
    </form>
  </div>
  )
}

export default AddEmployee