import React, { useState } from 'react'
import './HomeHeader.css';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { auth } from './firebase.js';

function HomeHeader({ user }) 
{
    const history = useHistory('');

    if (user === false) {
        history.push("/login")
    }

    const logout = (event) => {
        event.preventDefault();
        auth.signOut();
        history.push("/login");
    }
    return (
        <div className="homeHeader">
            <div className="homeHeader__left">
                <Link to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrt75PRKsWg6_quSA0JQufK2vgstfnblC7A&usqp=CAU" className="homeHeader__logo" />
                    <h3 className='text-white'>Notes App</h3>
                </Link>
            </div>

            <div className="homeHeader__icons">
                <section>
                    <Avatar className="homeHeader__avatar" alt=""/>
                    <h3 className="homeHeader__name ml-2">{user?.displayName}</h3>
                </section>
                <a onClick={logout}>Logout</a>
            </div>
        </div>
    )
}

export default HomeHeader
