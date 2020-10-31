import React from 'react';
import "./Header.scss";

export default function Header() {

    function scrollTo(element) {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: element.offsetTop - 100
        });
      }

    return (
        <div className="header">

            <div className="header__category">
                <div className="header__category__rectangle"></div>
                <div className="header__category__title">REKRUTACJA!</div>
            </div>

            <h1 className="header__container">
                <span className="header__container__title">Lataj wyżej z IAESTE!<br/></span>
                <span className="header__container__subtitle">Zrób pierwszy krok już dziś.</span>
            </h1>

            <button 
                onClick={ () => { 
                    scrollTo(document.getElementById("content"))}
                } 
                className="header__cta">
                    
                <div className="header__cta__text">dowiedz się więcej</div>
                <i className="fas fa-arrow-down header__cta__icon"></i>
            </button>

        </div>
    )
}
