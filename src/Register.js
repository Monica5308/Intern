import React from 'react'
import './Register.css'
import {Link, useHistory} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
     
    const reg_history=useHistory();
    const reg=e=>
    {
        const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
  
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log("Register success")
        reg_history.push('/');
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log("register unsuccessful")
        // ..
      });
    }
    return (
        <div className='register'>
            <h1 className='Heading'> Register</h1>
            <input type="text" id="email" className="reg_name" placeholder= 'email'></input>
            <input type="password" id="password" className="reg_mobile" placeholder= 'password'></input>
            <button id="reg_button" className="reg_button" onClick={reg}> SUBMIT</button>
            <Link to ='/' className='link'> back to login</Link>
        </div>
    )
}
function Register_submit() {
  
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
  
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log("Register success")
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log("register unsuccessful")
        // ..
      });
    
  
  }
