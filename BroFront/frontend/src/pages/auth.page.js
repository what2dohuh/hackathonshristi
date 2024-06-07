import React, { useState,useContext } from 'react';
import * as Components from '../Components';
import axios from 'axios'
import{useNavigate} from 'react-router-dom'
import {UserContext} from '../context/user.context'
const AuthPage = () => {
    const {user ,setUser} = useContext(UserContext)
    const nav = useNavigate()
    const [signIn, toggle] = useState(true);
    const [conspass , setconspass] = useState('');
    const [regdata, setregdata] = useState({
        name:'',
        email:'',
        password:'',
        address:'',
        profile:''
    });

    const [logdata, setlogdata] = useState({
        email:'',
        password:''
    });
    const loghandler = async(e)=>{
        e.preventDefault()
        const data = await axios.post('/login',logdata);
        if(data.status === 200){
            setlogdata({}) 
            const token = data.data.token; // Assuming 'token' is returned from server
            localStorage.setItem('token', token);
            setUser(data.data)
            nav('/')
        }else{
            alert("Invalid")
        }
    }
   const reghandler = async(e)=>{
    e.preventDefault()
    console.log(regdata)
    if(conspass != regdata.password){
        alert('password does not match')
    }else{

        const data = await axios.post('/register',regdata)
        console.log(data)
        if(data.status === 200){
    
            setregdata({
                name:'',
                email:'',
                password:'',
                address:'',
            })
            setconspass('')
            alert('Registered Sucessfully Need To Login')
            nav('/')
        }else{
            alert("Invalid")
        }
    }

   }
    return (
        <div class="authbody">
                    <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form onSubmit={reghandler} >
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name' value= {regdata.name} onChange={(e)=>setregdata({...regdata,name:e.target.value})} />
                      <Components.Input type='email' placeholder='Email' value= {regdata.email} onChange={(e)=>setregdata({...regdata,email:e.target.value})} />
                      <Components.Input type='password' placeholder='Password'value= {regdata.password}  onChange={(e)=>setregdata({...regdata,password:e.target.value})} />
                      <Components.Input type='password' placeholder='Confirm Password'value= {conspass}  onChange={(e)=>setconspass(e.target.value)} />
                      <Components.Input type='text' placeholder='Address'value= {regdata.address}  onChange={(e)=>setregdata({...regdata,address:e.target.value})} />
                      <Components.Button >Register</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form onSubmit={loghandler}>
                       <Components.Title>Log in</Components.Title>
                       <Components.Input type='email' placeholder='Email' value= {logdata.email} onChange={(e)=>setlogdata({...logdata,email:e.target.value})}/>
                       <Components.Input type='password' placeholder='Password' value= {logdata.password} onChange={(e)=>setlogdata({...logdata,password:e.target.value})}/>
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button>Log In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome!</Components.Title>
                      <Components.Paragraph>
                         Save live save Animals
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Login
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello !</Components.Title>
                        <Components.Paragraph>
                            Enter your Organistion details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Register
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
            
        </div>
    );
}

export default AuthPage;
