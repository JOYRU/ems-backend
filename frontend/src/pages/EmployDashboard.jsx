import React from 'react'
import { useAuth } from '../context/AuthContext'

const  EmployDashboard=()=> {
  const {user} = useAuth() ; 
  //console.log(user)
  return (
    <div>employDashboard { user && user.name} </div>
  )
}
export default EmployDashboard