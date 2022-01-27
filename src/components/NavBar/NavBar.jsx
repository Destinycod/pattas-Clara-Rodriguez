import React from "react";
import { Link,  } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/Perros">Perros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/Gatos">Gatos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>             
        </div>
    )
}

export default NavBar;