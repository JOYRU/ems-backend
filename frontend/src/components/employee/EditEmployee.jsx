import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditEmployee = () => {
    const {id} = useParams()  ;
  //  const [department,setDepartment] = useState(null) ; 
  const [employee,setEmployee] = useState('') ; 
  // const [email,setEmail] = useState('') ; 
    const [loading,setLoading] = useState(false) ; 
    const navigate = useNavigate()
    const [formData,setFormData] = useState({})
  
  
    
    const handleChange= (e)=>{
      const{name,value}= e.target 
      
        setFormData((prevData)=> ({...prevData,[name]:value}))
      
    }



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

   
    // const handleSubmit=async (e)=>{
    //     e.preventDefault() ; 


    //     try{
    //         //  const response = await axios.post('http://localhost:5000/api/department/add',department,
    //         //   {
        
    //         //     headers:{
    //         //       "Authorization":'Bearer '+localStorage.getItem('token')
    //         //     }
    //           //})
    //          const response = await axios.put('http://localhost:5000/api/employees/'+id, {employee_name , email});
      
              
    //           if(response){
    //              navigate("/admin-dashboard/employees")
    //           }
      
    //       }catch(error){
    //         console.log(error)
    //       }

    // }

    const handleSubmit =async (e)=>{
      e.preventDefault() ; 
      //let formData = new FormData();
      // Object.keys(inputData).forEach(fieldName => {
      //   console.log(fieldName, inputData[fieldName]);
      //   formData.append(fieldName, inputData[fieldName]);
      // })

      let formDataObj = new FormData();
      Object.keys(formData).forEach(key=>{
        console.log(key,formData[key]) ;
        formDataObj.append(key,formData[key])
      })

    //  console.log(formDataObj.email)
  
      try{
       
        //  const response = await axios.post('http://localhost:5000/api/employees/add', formDataObj);
        // const response = await axios.put('http://localhost:5000/api/employees/'+id, formDataObj);
          
          // if(response){
          //    navigate("/admin-dashboard/employees")
          // }
  
      }catch(error){
        if(error.response && !error.response.data.success)
         alert(error)
      }

  }

  return (
    <div className='max-w-3xl mx-auto mt-10 bg-white p-7 rounded-md shadow-md w-96'>
        <h3 className='text-2xl font-bold mb-6'>Edit Employee</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="employee_name" className='text-sm font-medium text-gray-700'>Employee Name</label>
                <input type="text" placeholder='Enter Employee Name'
                  value={employee && employee.userId.name}
                  name="employee_name"
                  onChange={handleChange}
                className='mt-1 w-full p-2 border boder-gray-300 rounded-md'  required/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" placeholder='Description' 
                 name="email"
                  value={employee &&  employee.department}
                 onChange={handleChange}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
            </div>
            <button type="submit" className='w-full mt-6 bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded'>Update Employee</button>
        </form>
      </div>
  )
}
