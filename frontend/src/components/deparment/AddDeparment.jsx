import  { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios' ; 
const  AddDeparment=()=> {



  // const[department,setDepartment] = useState({
  //   dept_name:'',
  //   description:''
  // })
    const [dept_name, setDept_name] = useState('');
    const [description, setDescription] = useState('');

  const navigate = useNavigate()



  const handleSubmit =async (e)=>{
    e.preventDefault() ; 
    console.log("hello")
    try{
      //  const response = await axios.post('http://localhost:5000/api/department/add',department,
      //   {
  
      //     headers:{
      //       "Authorization":'Bearer '+localStorage.getItem('token')
      //     }
        //})
       const response = await axios.post('http://localhost:5000/api/departments/add', { dept_name , description});

        
        if(response){
           navigate("/admin-dashboard/departments")
        }

    }catch(error){
      if(error.response && !error.response.data.success)
       alert(error)
    }

  }
  return (
   
      <div className='max-w-3xl mx-auto mt-10 bg-white p-7 rounded-md shadow-md w-96'>
        <h3 className='text-2xl font-bold mb-6'>Add Deparment</h3>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="dept_name" className='text-sm font-medium text-gray-700'>Department Name</label>
                <input type="text" placeholder='Enter Dept Name'
                  value={dept_name}
                  onChange={(e) => setDept_name(e.target.value)}
                className='mt-1 w-full p-2 border boder-gray-300 rounded-md'  required/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" placeholder='Description' 
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
            </div>
            <button type="submit" className='w-full mt-6 bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded'>Add Department</button>
        </form>
      </div>
   
  )
}
export default AddDeparment