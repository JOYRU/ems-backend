import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditEmployee = () => {
    const {id} = useParams()  ;
  //  const [department,setDepartment] = useState(null) ; 
  const [employee_name,setEmployeeName] = useState('') ; 
  const [email,setEmail] = useState('') ; 
    const [loading,setLoading] = useState(false) ; 
    const navigate = useNavigate()

    useEffect(()=>{

       const fetchEmployee=async() => {
          setLoading(true) ; 
        try{
            const response = await axios.get('http://localhost:5000/api/employees/'+id) ; 
            if(response){
            //    setDepartment(response.data.department)
                setEmployeeName(response.data.employee.employee_name)
                setEmail(response.data.employee.email)
            }
    
          }catch(error){
            console.log(error)
          }finally{
            setLoading(false)
          }
       };
       fetchEmployee();
    
    },[])
   
    const handleSubmit=async (e)=>{
        e.preventDefault() ; 
        try{
            //  const response = await axios.post('http://localhost:5000/api/department/add',department,
            //   {
        
            //     headers:{
            //       "Authorization":'Bearer '+localStorage.getItem('token')
            //     }
              //})
             const response = await axios.put('http://localhost:5000/api/employees/'+id, {employee_name , email});
      
              
              if(response){
                 navigate("/admin-dashboard/employees")
              }
      
          }catch(error){
            console.log(error)
          }

    }

  return (
    <div className='max-w-3xl mx-auto mt-10 bg-white p-7 rounded-md shadow-md w-96'>
        <h3 className='text-2xl font-bold mb-6'>Edit Employee</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="employee_name" className='text-sm font-medium text-gray-700'>Employee Name</label>
                <input type="text" placeholder='Enter Employee Name'
                  value={employee_name}
                  onChange={(e) => setEmployeeName(e.target.value)}
                className='mt-1 w-full p-2 border boder-gray-300 rounded-md'  required/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" placeholder='Description' 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
            </div>
            <button type="submit" className='w-full mt-6 bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded'>Update Employee</button>
        </form>
      </div>
  )
}
