import React from 'react'
import { Link } from 'react-router-dom';
import './RegisterHeader.css';

function RegisterHeader() 
{
    return (
    <div>
        <div className="header__right">
            <form>
                <input className="header__input1" type="email" placeholder="Email" />
                <input className="header__input2" type="password" placeholder="Password" />
                <button type="submit" className="header__submit">Log In</button>
            </form>
            <br/>
            <br/>
            <br/>

        </div>
    </div>
    )
}

export default RegisterHeader
