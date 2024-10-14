import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddEmployee = () => {
    const navigate = useNavigate()

    const [employee_name,setEmployeeName] = useState('') ; 
    const[email,setEmail]  = useState('')
    const handleSubmit =async (e)=>{
        e.preventDefault() ; 
        console.log("hello")
        try{
         
           const response = await axios.post('http://localhost:5000/api/employees/add', { employee_name , email});
    
            
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
              value={employee_name}
              onChange={(e) => setEmployeeName(e.target.value)}
            className='mt-1 w-full p-2 border boder-gray-300 rounded-md'  required/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='email' 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>
        <button type="submit" className='w-full mt-6 bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded'>Add Employee</button>
    </form>
  </div>
  )
}

export default AddEmployee