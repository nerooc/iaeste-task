import React from 'react'
import "./Footer.scss";
import iaeste_logo from "../../assets/images/iaeste-logo.png";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__left">
                <div className="footer__left__logo">
                    <img src={iaeste_logo}/>
                    <p>Work. Experience. Discover.</p>
                </div>

                <div className="footer__left__copyright">
                Copyright 2020 IAESTE, Inc. Terms & Privacy
                </div>
            </div>

            <div className="footer__right">
                <ul className="footer__right__more">
                    <h6 className="footer__right__more__header">Dowiedz się więcej</h6>
                    <li className="footer__right__more__link">
                        <a href="https://agh.iaeste.pl/index.php/iaeste/o-iaeste">O nas</a>
                    </li>
                    <li className="footer__right__more__link">
                        <a href="">Nasze sekcje</a>
                    </li>
                    <li className="footer__right__more__link">
                        <a href="https://agh.iaeste.pl/index.php/iaeste/czlonkowie">Nasi członkowie</a>
                    </li>
                    <li className="footer__right__more__link">
                        <a href="https://agh.iaeste.pl/index.php/iaeste/kontakt">Kontakt</a>
                    </li>
                    <li className="footer__right__more__link">
                        <a href="">Polityka prywatności</a>
                    </li>
                </ul>

                <ul className="footer__right__recruitment">
                <h6 className="footer__right__more__header">Rekrutacja</h6>
                    <li className="footer__right__recruitment__link">
                        <a href="">Wydarzenie</a>
                    </li>
                    <li className="footer__right__recruitment__link">
                        <a href="https://docs.google.com/forms/d/1R-FdtQQf4KDsrRmOrkSLdjIik0l8Jm1WfIyKxOiAE_0/edit">Ankieta</a>
                    </li>
                    <li className="footer__right__recruitment__btt">
                        <a href="#">Powrót na górę</a>
                    </li>
                </ul>
            </div>

        </footer>
    )
}
