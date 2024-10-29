import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';


const Navbar = ()=> {
    const {user} = useAuth()
    const navigateTo = useNavigate();
    const handleLogout=()=>{
      
      localStorage.removeItem('token');
      console.log("hello")
      navigateTo('/login')
    }

  return (
    
    <div className='flex items-center text-white justify-between h-12 bg-teal-500 px-5 '>
       <p>Welcome {user&& user.name}</p>
       <button onClick={handleLogout}  className='px-4 py-1 bg-teal-700 hover:bg-teal-900'>Logout</button>
    </div>
  )
}

export default Navbar