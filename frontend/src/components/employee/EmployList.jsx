import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'

import axios from 'axios'
import { columns,EmployeeButtons } from '../../utils/EmployeeHelper'

const EmployeeList=()=> {
  const [employees,setEmployees] = useState('');

 
  useEffect(()=>{
    const fetchEmployees = async()=>{
        try{
          // const response = await axios.get('http://localhost:5000/api/departments',{
          //   headers: {
          //     "Authorization" : 'Bearer '+localStorage.getItem('token')
          //   }
          // })
            const response = await axios.get('http://localhost:5000/api/employees')
            console.log(response.data);
             
         //   console.log(response.data.departments);
            if(response.data.success){
             // console.log(response.data.departments);
              let sno = 1 ; 
              //let data="" ; 
             const data = await response.data.employees.map((emp)=>(
           
            {
              _id:emp._id ,
              sno:sno++,
              dept_name:emp.employee_name,
              action:(<EmployeeButtons _id={emp._id} onEmployeeDelete={onEmployeeDelete}/>),
            }
           

              ) )
           
           setEmployees(data) 
           //console.log(data);
        }
    }catch(error){
       alert(error)
    }

 };
 fetchEmployees() ;
},[]);

const onEmployeeDelete=async(id)=>{
  console.log("from onemployee delete")
  console.log(id)
//   const data1 = employees; 
//   console.log(data1)
  const data = await employees.filter(emp=>emp._id !== id)
  setEmployees(data) ; 
}



  return (
    <div className='p-5'>
        <div className='text-center'>
            <h3 className='text-2xl font-bold'>Manage EmployeetList</h3>
        </div>
        <div className='flex justify-between items-center'>
            <input type="text" placeholder='Search By Employee Name' className='px-4 py-0.5 border'/>
            <Link to="add-employee" className='px-4 py-1 bg-teal-700 rounded text-white'>
                 Add New Employee
            </Link>
        </div>
        <div>
        <DataTable 
          columns={columns} data={employees}
        />

        </div>
    </div>
  )
}
export default  EmployeeList

