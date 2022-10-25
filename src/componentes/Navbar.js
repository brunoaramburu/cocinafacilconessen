import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../img/Logo.png';
import './css/navbar.css'

function Navbar () {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href='/'>
                <img className='logo' src={Logo} alt="" width="50" height="50"></img>    
                Cocina Fácil con Essen
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href='/productos'>PRODUCTOS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href='/recetas'>RECETAS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href='/sobrenosotros'>SOBRE NOSOTROS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href='/sumate'>SUMATE A NUESTRO EQUIPO</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar