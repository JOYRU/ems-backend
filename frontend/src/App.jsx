import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'

import EmployDashboard from './pages/EmployDashboard.jsx'
import PrivateRoutes from './utils/PrivateRoutes.jsx' 
import RoleBaseRoutes from './utils/RoleBaseRoutes.jsx' 
import Register from './pages/Register.jsx'
import AdminSummary from './components/dashboard/AdminSummary.jsx'
import DepartmentList from './components/deparment/DepartmentList.jsx'
import AddDeparment from './components/deparment/AddDeparment.jsx'
import { EditDepartment } from './components/deparment/EditDepartment.jsx'
import EmployeeList from './components/employee/EmployList.jsx'
import AddEmployee from './components/employee/AddEmployee.jsx'
import { EditEmployee } from './components/employee/EditEmployee.jsx'
import { ShowEmployeeInfo } from './components/employee/ShowEmployeeInfo.jsx'

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard"/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        
          <Route path="/admin-dashboard" element={
           
              <PrivateRoutes>
                 <AdminDashboard />
              </PrivateRoutes>
          
           
            
          }>
             <Route path="/admin-dashboard" element={<AdminSummary />}></Route>
             
             <Route path="/admin-dashboard/employees" element={<EmployeeList />}></Route>
             <Route path="/admin-dashboard/employees/add-employee" element={<AddEmployee />}></Route>
             <Route path="/admin-dashboard/employee/:id" element={<EditEmployee />}></Route> 
             <Route path="/admin-dashboard/employees/:id" element={<ShowEmployeeInfo />}></Route> 
            
             <Route path="/admin-dashboard/departments" element={<DepartmentList />}></Route> 
             <Route path="/admin-dashboard/departments/add-department" element={<AddDeparment />}></Route> 
             <Route path="/admin-dashboard/department/:id" element={<EditDepartment />}></Route>  
          </Route>
     
          <Route path="/employe-dashboard" element={<EmployDashboard/>}></Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
