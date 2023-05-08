import React from 'react';
import { getAuth } from "firebase/auth";
import app from "./firebase/firebase.init";



const auth = getAuth(app);

const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
console.log(email,password);
}

const handleEmailBlur = event =>{
  console.log(event.target.value);
}

const handlePasswordChange = event =>{
  console.log(event.target.value);
}


const Register = () => {
    return (
        <div>
            
            
             <form onSubmit={handleRegister}>
      <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder="your Email" />
      <br />
      <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder="your Password" />
      <br />
      <button type="submit">Register</button>
    </form>
    
            
        </div>
    );
};

export default Register;