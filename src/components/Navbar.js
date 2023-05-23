import React from 'react'
import './Navbar.css';
export default function Navbar(props) {
    return (
        <div><nav className="navbar">
            <div className="container">
                <a className="navbar-brand" href="/">{props.title}</a>
            </div>
        </nav></div>
    )
}