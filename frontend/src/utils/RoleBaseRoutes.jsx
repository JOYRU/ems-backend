import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';
const  RoleBaseRoutes=({children,requiredRole})=> {
  
  const {user,loading} = useAuth() ; 
  console.log(user) ;
  if(loading){
    <div>Loading...</div>
  }
 console.log(user[4])
  if(!requiredRole.includes(user[4])){
    <Navigate to="/unauthorized"/>
  }
  return user? children:<Navigate to='/login'/>

}

export default RoleBaseRoutes
