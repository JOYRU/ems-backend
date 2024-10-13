import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';
const  RoleBaseRoutes=({children,requiredRole})=> {
  
  const {user,loading} = useAuth() ; 
  console.log(user.role) ;
  if(loading){
    <div>Loading...</div>
  }
 
  if(!requiredRole.includes(user.role)){
    <Navigate to="/unauthorized"/>
  }
  return user? children:<Navigate to='/login'/>

}

export default RoleBaseRoutes
