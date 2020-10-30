import React from 'react'
import iaeste_logo from "../../assets/images/iaeste-logo.png";
import "./Navbar.scss";

import CurDate from '../CurDate/CurDate';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={iaeste_logo}/>
            
            <ul className="navbar__links">

                <li className="navbar__links__link">
                    <a href="#">O nas</a>
                </li>

                <li className="navbar__links__link">
                    <a href="#">Sekcje</a>
                </li>

                <li className="navbar__links__link">
                    <a href="#">Kontakt</a>
                </li>

            </ul>

            <CurDate/>
        </nav>
    )
}
