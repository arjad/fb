
import React from 'react'
import './Sidebar.css';

function Sidebar({ user }) 
{
    return (
        <ul className="sidebar col-lg-4 mt-5">
        We Welcome You    <u>{ user?.displayName}</u>
            <br/><br/>

           <b>We Offer</b>
           <li>Daily Notes</li>
           <li>To do Task</li>
           <li> Perosnal dairy</li>
            
        </ul>
    )
}

export default Sidebar
