import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase.js';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                history.push("/");
            })
            .catch((e) => {
                if (
                    e.message ===
                    "The password is invalid or the user does not have a password."
                ) {
                    alert("Please check your credentials again");
                } else if (
                    e.message ===
                    "There is no user record corresponding to this identifier. The user may have been deleted."
                ) {
                    history.push("/register");
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                } else {
                    alert(e.message);
                }
            })
    }

    return (
        <form className='container'>
        <br/><br/>
        <br/><br/>
        <h2>login to enter</h2>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input class="form-control"  onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input class="form-control" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button onClick={login} className="login__login" type="submit" class="btn btn-primary">Submit</button>
      </form>

    )
}
export default Login;
