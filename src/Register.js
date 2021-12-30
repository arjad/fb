import React, { useState } from 'react'
import './Register.css';
import { auth } from './firebase.js';
import { useHistory } from 'react-router-dom';

function Register() 
{
    const history = useHistory('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth.user) {
                    auth.user.updateProfile({
                        displayName: firstName + " " + lastName
                    }).then((s) => {
                        history.push("/")
                    })
                }
            })
            .catch((e) => {
                alert(e.message);
            })
    }

    return (
    <form className='container'>
    <h2>Register</h2>
    <div class="form-group">
    <label for="fn">First Name</label>

    <input class="form-control" type="name" onChange={(e) => setFirstName(e.target.value)} name="fn" placeholder="First Name" />
  </div>
  <div class="form-group">
  <label for="ln">Last Name</label>
  <input class="form-control" type="name" onChange={(e) => setLastName(e.target.value)} name="ln" placeholder="Last Name" />

</div>
    
     <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input class="form-control"  type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input class="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        
    </div>
    
      <button onClick={register} type="submit" class="btn btn-primary">Submit</button>
    
    </form>
    )
}

export default Register
