import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
const  AdminDashboard=()=> {
  const {user,loading} = useAuth() ; 
  //console.log(user) ;
  const navigate = useNavigate()

  if(loading){
    return <div>Loading....</div>
  }
  if(!user){
    navigate('/login') ;
  }
  return (
    <div>AdminDashboard {user}</div>
  )
}

export default AdminDashboard
