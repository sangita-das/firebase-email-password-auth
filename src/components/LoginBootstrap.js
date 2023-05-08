import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link} from 'react-router-dom'
import app from '../firebase/firebase.init';


const auth = getAuth(app)


const LoginBootstrap = () => {

    const  [success,setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        setSuccess (false);
        const form = event.target;
        const email = form.email.value;
        const password = form.passwords.value;
        // console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
        })
        .catch(error =>{
            console.log('error', error);
        })

    }

    const handleEmailBlur = event =>{
        const email = event.target.value;
        setUserEmail(email);
    }

    const handleForgetPassword = () =>{
        if(!userEmail) {
            alert('Please enter your email password.')
        }

            sendPasswordResetEmail(auth, userEmail)
            .then( () => {
                alert('Password Reset email sent. PLease check your email.')
            })
            .catch(error => {
                console.log(error);
            })
    }

    
    return (
        <div className="w-50 mx-auto">
            <h3 className="text-success">Please Login.</h3>
 <form onSubmit = {handleSubmit}>
                <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Your Email</label>
            <input type="email" name = "email" onClick={handleEmailBlur}  className="form-control" id="formGroupExampleInput" placeholder="your email" required/>
            </div>
            <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Your Password</label>
            <input type="password" name = "password" className="form-control" id="formGroupExampleInput2" placeholder="your password" required/>
     </div>

     <button type="button" className="btn btn-primary">Login</button>

 </form>
 {success && <p>Successfully login to the account</p>}

 <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>

 <p><small>Forget Password? <button type="button" className="btn btn-link" onClick={handleForgetPassword}>Reset Password</button></small></p>
        </div>
    );
};

export default LoginBootstrap;