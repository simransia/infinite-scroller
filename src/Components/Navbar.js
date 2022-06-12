import { useLocation } from "react-router-dom"
import React from 'react'

function Navbar() {
    let location = useLocation();

    const handleClick = () => {
        localStorage.removeItem("token");
    }

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Infinite Scroll </a>
                {(location.pathname == "/home") ?
                    <div className='d-flex' style={{ width: '90vw' }}>
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mr-auto text-white">
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={handleClick}><b>Logout</b></a>
                            </li>
                        </ul>
                    </div> : ""}
            </div>

        </nav>
    )
}

export default Navbar