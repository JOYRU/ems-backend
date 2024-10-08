import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'

import EmployDashboard from './pages/EmployDashboard.jsx'
import PrivateRoutes from './utils/PrivateRoutes.jsx' 
import RoleBaseRoutes from './utils/RoleBaseRoutes.jsx' 
import Register from './pages/Register.jsx'

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard"/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin-dashboard" element={
            <PrivateRoutes>
               {/* <RoleBaseRoutes requiredRole={["admin"]} >
                  <AdminDashboard/>
               
               </RoleBaseRoutes> */}
                 <AdminDashboard/>
         
            </PrivateRoutes>
           
            
            
            }></Route>
          <Route path="/employe-dashboard" element={<EmployDashboard/>}></Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
