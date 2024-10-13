import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
const PrivateRoutes=({children})=> {
    const {user,loading} = useAuth()
   // const users = Object.fromEntries(user);
     console.log(user) ;
    if(loading){
        <div>Loading.....</div>
    }

    return user? children:<Navigate to='/login'/>

}

export default PrivateRoutes
