import React,{Children, createContext,useContext,useEffect,useState} from "react";
import axios from "axios";
const userContext = createContext();
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const AuthContext = ({children})=>{
    const[user,setUser] = useState(null);
    //const [token, setToken] = useState(null);
    const[loading,setLoading] = useState(null) ; 
    // const navigate = useNavigate() ; 


    useEffect(()=>{
        const verifyUsers=async()=>{
            try{
                const token = localStorage.getItem('token') ; 
               // console.log(token) ; 

                if(token){
                    //console.log("upper")
                    const response = await axios.get('http://localhost:5000/api/auth/verify',{
                        headers:{
                            "Authorization":'Bearer '+token
                        }
                    })
                    //console.log("lower")
                    //const response = await axios.get('http://localhost:5000/api/auth/verify' );
                   // console.log(response)
                  // console.log(response) ; 
                 // console.log(response.data.user) ;
                    if(response.data.success){
                        setUser(response.data.user)
                        //console.log("hello")
                    }
                }else{
                    setUser(null) ;
                    setLoading(false);
                }
                
            }catch(error){
                if(error)
                   setUser(null) ; 
                 
            }finally{
                setLoading(false) ;

            }
        }
        verifyUsers()
    },[])


    const login = async (user) => {
      
        
      //  const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

       // const decoded = jwtDecode(JSON.stringify(response));
        //  if(decoded){
        //     navigate('/admin-dashboard') ;
        //  }
        //console.log(user.name) ;
        setUser(user)
       // setToken(response.data.token);

          
    };

    const register = async (name, password,email,role) => {
        await axios.post('http://localhost:5000/api/auth/register', { name, password,email,role });
    };

    // const login = (user) =>{
    //     setUser(user) ; 
       
    // }

    const logout = ()=>{
        setUser(null) ; 
        localStorage.removeItem("token") ;

    }

    return(
        <userContext.Provider value={{register,user,login,logout ,loading}}>
           {children}
        </userContext.Provider>
    )
}
export const useAuth = () => useContext(userContext)
export default AuthContext