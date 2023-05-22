import React from 'react'
// import './Navbar.css';
export default function Navbar(props) {
    return (
        <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
            </div>
        </nav></div>
    )
}