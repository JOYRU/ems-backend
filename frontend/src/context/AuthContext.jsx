import React,{Children, createContext,useContext,useEffect,useState} from "react";
import axios from "axios";
const userContext = createContext();
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const AuthContext = ({children})=>{
    const[user,setUser] = useState([]);
    const [token, setToken] = useState(null);
    const[loading,setLoading] = useState(null) ; 
    // const navigate = useNavigate() ; 


    // useEffect(()=>{
    //     const verifyUser=async()=>{
    //         try{
    //             const token = localStorage.getItem('token') ; 
    //             console.log(token) ; 

    //             if(token){
    //                 const response = await axios.post('http://localhost:500/api/auth/login',{
    //                     headers:{
    //                         "Authorization":'Bearer ${token}'
    //                     }
    //                 })
    //                 console.log(response)
    //                 if(response.data){
    //                     setUser(response.data.user)
    //                 }
    //             }else{
    //                 setUser(null) ;
    //                 setLoading(false);
    //             }
                
    //         }catch(error){
    //             if(error)
    //                setUser(null) ; 
                 
    //         }finally{
    //             setLoading(false) ;

    //         }
    //     }
    //     verifyUser()
    // },[])


    const login = async (email, password) => {
      
        
        const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

        const decoded = jwtDecode(JSON.stringify(response));
        //  if(decoded){
        //     navigate('/admin-dashboard') ;
        //  }
        setToken(response.data.token);
    };

    const register = async (username, password) => {
        await axios.post('http://localhost:5000/api/auth/register', { username, password });
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