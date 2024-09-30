import React, { Component, useState } from 'react'
import axios from 'axios'

import { useNavigate } from "react-router-dom";


const Login = ()=>{
    const [email,setEmail] = useState('')
    const[password,setPassword] = useState('')  ;
    const[errors,setErrors] = useState(false) ; 
    const navigate = useNavigate() ; 
    const handleSubmit=async(e)=>{
        e.preventDefault() 
        try{
            const response = await axios.post('http://localhost:5000/api/auth/login',{email,password}) ;
            if(response){
               alert("Successfully Login")
              navigate('/admin-dashboard')
            }
            console.log("hello") ;
            console.log(response)
        }catch(error){
        
        // console.log(error)
          if(error.response){
            console.log("hellofromError")
               setErrors("Email or Password wrong")
             // setErrors(Object.values(e).toString())
              setErrors(Object.values(error.response.config.data.error).toString())
              //setErrors((error.response.config.data.error))
          }else{
            setErrors("Server Error")
          }
         console.log(error)
            
        }
        
    }

    
 
    return (
        <div className="flex flex-col items-center h-screen justify-center bg-gradient form-teal-500 form-50% to-gray-100 to-50% space-y-6">
            <h1 className='font-sevillana text-2xl text-black'>Employee Management System</h1>
        <div className='border shadow p-6 w-80 bg-white'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        {errors && <p className='text-red-500'>{errors}</p> }
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(e)=>setPassword(e.target.value)}/>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        </div>
      </div>
    )
  
}

export default Login