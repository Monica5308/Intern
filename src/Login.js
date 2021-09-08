import React from 'react'
import { Router } from 'react-router';
import "./Login.css"
import {Link,useHistory} from 'react-router-dom';
import app from './Firebase.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function Login() {
  
  const login_history=useHistory();
  
  const signin=e => {
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log("logged in")
    login_history.push('/pickup')
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    
    console.log("logged in unsuccessful")
  });

  }


    return (

        <div>
            <div className="Login">
                <h1 className="Heading"> Login</h1> 
                <input type="text" id="email" placeholder="email" className="name" ></input>
                <input type="password" id="password" placeholder="password" className="mobile"></input>
                <button id="submit_otp" className="button" onClick={signin}>SUBMIT</button>
                <Link to ='/register' className='link'> click here to register</Link>
                <div id="container">
                </div>
            </div>
            <div className="OTP" id="OTP_login">
                <h1 className="head"> Enter OTP</h1>
                <input type="text" id="OTP" placeholder="OTP" className="OTP_input"></input>
                <button id="button" className="button_otp"> SUBMIT</button>
             </div>
        </div>    
        )
        
}
function Login_submit() {
  
  const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const login_history= useHistory();
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log("logged in")
    login_history.push('/pickup')
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    
    console.log("logged in unsuccessful")
  });

}
function login_phone()
{
  
}
    
    

