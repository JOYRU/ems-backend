import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { columns, DepartmentButtons } from '../../utils/DepartmentHelper'
import axios from 'axios'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const DepartmentList=()=> {
  const [departments,setDepartments] = useState('');

 
  useEffect(()=>{
    const fetchDepartments = async()=>{
        try{
          // const response = await axios.get('http://localhost:5000/api/departments',{
          //   headers: {
          //     "Authorization" : 'Bearer '+localStorage.getItem('token')
          //   }
          // })
            const response = await axios.get('http://localhost:5000/api/departments')
             
           // console.log(response.data);
            if(response.data.success){
             // console.log(response.data.departments);
              let sno = 1 ; 
            // let data="" ; 
            const data=await response.data.departments.map((dept)=>(
           
             {
               _id:dept._id ,
               sno:sno++,
               dept_name:dept.dept_name,
               action:(<DepartmentButtons _id={dept._id} onDepartmentDelete={onDepartmentDelete}/>),
             }
           

               ) )
           
           setDepartments(data) 
           //console.log(data);
        }
    }catch(error){
       alert(error)
    }

 };
 fetchDepartments() ;
},[]);

const onDepartmentDelete=async(id)=>{
  console.log("from ondepartment delete")
  console.log(id)
  const data1 = departments; 
  console.log(data1)
  const data = await departments.filter(dept=>dept._id !== id)
  setDepartments(data) ; 
}



const exportPdfHandler=async ()=>{
  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Age', field: 'age' },
  ];
const response = await axios.get('http://localhost:5000/api/departments') ; 
let sno = 1 ; 
const data=await response.data.departments.map((dept)=>(         
  {
    id:sno++,
    name:dept.dept_name,
    age:dept.dept_name,
  }
    ) )
var doc = new jsPDF();

    doc.autoTable({
      head: [columns.map(col => col.title)],
      body: data.map(row => columns.map(col => row[col.field])),
    });

    doc.save('department.pdf');

}

  return (
    <div className='p-5'>
        <div className='text-center'>
            <h3 className='text-2xl font-bold'>Manage DeparmentList</h3>
        </div>
        <div className='flex justify-between items-center'>
            <input type="text" placeholder='Search By Dep Name' className='px-4 py-0.5 border'/>
            <Link to="add-department" className='px-4 py-1 bg-teal-700 rounded text-white'>
                 Add New Department
            </Link>
        </div>
        <div>
          <button onClick={exportPdfHandler} className='px-4 py-1 bg-teal-700 rounded text-white'>
            Export Table to Pdf
          </button>
        </div>
        <div>
        <DataTable 
          columns={columns} data={departments} id="department-list"
        />

        </div>
    </div>
  )
}
export default  DepartmentList
