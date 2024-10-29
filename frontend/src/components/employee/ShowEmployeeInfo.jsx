import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



export const ShowEmployeeInfo = () => {

    const {id} = useParams()  ;
    //  const [department,setDepartment] = useState(null) ; 
       const [employee,setEmployee] = useState(null);
      const [loading,setLoading] = useState(false) ; 
      const navigate = useNavigate()
  
      useEffect(()=>{
  
         const fetchEmployee=async() => {
            setLoading(true) ; 
          try{
              const response = await axios.get('http://localhost:5000/api/employees/'+id) ; 
              if(response.data.success){
              //    setDepartment(response.data.department)
                  setEmployee(response.data.employee)
                  
              }
      
            }catch(error){
              console.log(error)
            }finally{
              setLoading(false)
            }
         };
         fetchEmployee();
      
      },[])
     

  return (
     <>
     {employee ? (
   
 
    <div className='max-w-3xl max-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className="text-2xl font-bold mb-8 text-center">Employee Details</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6' >
          
          
           <img src={employee.userId &&  "http://localhost:5000/"+employee.userId.profileImage} className="rounded-full border w-72"/>  
            
        </div>
        <div>
       
            <div className='flex space-x-3 mb-5'>
                <p className='text-lg font-bold'>Name:</p>
                <p className='font-medium'>{employee.userId && employee.userId.name}</p>
            </div>
            <div className='flex space-x-3 mb-5'>
                <p className='text-lg font-bold'>DOB:</p>
                <p className='font-medium'>{new Date(employee.dob).toLocaleDateString()}</p>
            </div>
        </div>
        <div>

        </div>
    </div>
  ) :<div>loading</div>}
  </>
        
  )
}
