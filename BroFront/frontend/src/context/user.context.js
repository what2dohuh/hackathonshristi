import { useState,createContext, useEffect } from 'react'
import axios  from 'axios'
export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [user , setUser] = useState({})
    const getProfile=async()=>{

        const token = localStorage.getItem('token');
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const data = await axios.get('/profile',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(data.data)
        }else{
            setUser(null)
        }
      
    }
    useEffect(() => {
    
       
        getProfile()

    }, []);
    return (
        <UserContext.Provider value = {{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
}


