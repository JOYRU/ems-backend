import React,{Children, createContext,useContext,useEffect,useState} from "react";

const userContext = createContext();

const AuthContext = ({children})=>{
    const[user,setUser] = useState([]);
    const[loading,setLoading] = useState(null) ; 


    useEffect(()=>{
        const verifyUser=async()=>{
            try{
                const token = localStorage.getItem('token')
                if(token){
                    const response = await axios.get('http://localhost:500/api/auth/verify',{
                        headers:{
                            "Authorization":'Bearer ${token}'
                        }
                    })
                    if(response.data){
                        setUser(response.data.user)
                    }
                }else{
                    setUser(null) ;
                }
                
            }catch(error){
                if(error)
                   setUser(null) ; 
                 
            }finally{
                setLoading(false) ;

            }
        }
        verifyUser()
    },[])

    const login = (user) =>{
        setUser(user) ; 
       

    }

    const logout = ()=>{
        setUser(null) ; 
        localStorage.removeItem("token") ;

    }

    return(
        <userContext.Provider value={{user,login,logout ,loading}}>
           {children}
        </userContext.Provider>
    )
}
export const useAuth = () => useContext(userContext)
export default AuthContext