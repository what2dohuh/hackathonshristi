import React, { useState ,useContext} from "react"
import { links, social } from "./data"
import {Link} from 'react-router-dom'
import '../navbar.css'
import {UserContext} from '../context/user.context'
import '../styles/navbar.css'
import axios from "axios"
const NavbarComponents = () => {
    const {user,setUser} = useContext(UserContext)
    const [openLinks, setopenLinks] = useState(false);
    const toggole=()=>{
        setopenLinks(!openLinks)
    }
    const handler=async()=>{
        axios.get('/logout')
        setUser(null)
        localStorage.clear()
    }
  return (
    <>
        <div className='navbar'>
            <div className='left' id={openLinks ? "open":"close"}>
            <h4>
            <Link to='/'>Animal Rescue Network</Link>
            </h4>
         
            <div className='hiddenLinks'>
     
            <Link to='/request'>Rescue</Link>
            <Link to='/auth'>Join Us</Link>
            </div>
            </div>
            <div className='right'>
    
            <Link to='/request'>Rescue</Link>
           {user ?  <Link to='/auth' onClick={handler}>:Logout</Link> :<Link to='/auth'>Join Us</Link>}
        
            
            <button onClick={toggole}>
            
            </button >
            </div>
        </div>
    </>
  )
}

export default NavbarComponents;
