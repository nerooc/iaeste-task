import React from 'react'
import Social from "../Social/Social";

import iaeste_logo from "../../assets/images/iaeste-logo.png";

import "./Navbar.scss";


export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={iaeste_logo} onClick={()=> window.open("https://agh.iaeste.pl/", "_blank")}/>
            
            <ul className="navbar__links">

                <li className="navbar__links__link">
                    <a href="https://agh.iaeste.pl/index.php/iaeste/o-iaeste" target="_blank">O nas</a>
                </li>

                <li className="navbar__links__link">
                    <a href="#">Sekcje</a>
                </li>

                <li className="navbar__links__link">
                    <a href="mailto:iaeste@agh.edu.pl">Kontakt</a>
                </li>

            </ul>

            <Social/>
        </nav>
    )
}
