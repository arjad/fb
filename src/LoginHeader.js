import React from 'react'
import { Link } from "react-router-dom";
import './LoginHeader.css';

function LoginHeader() 
{
    return (
    <div>
        <Link className="link" to="/register">
            <button className="header__button">Create New Account</button>
        </Link>
    </div>
    )
}
export default LoginHeader;
