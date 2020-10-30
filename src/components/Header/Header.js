import React from 'react';
import "./Header.scss";

export default function Header() {
    return (
        <div class="header">

            <div class="header__category">
                <div class="header__category__rectangle"></div>
                <div class="header__category__title">REKRUTACJA!</div>
            </div>

            <h1 class="header__container">
                <span class="header__container__title">Lataj wyżej z IAESTE!<br/></span>
                <span class="header__container__subtitle">Zrób pierwszy krok już dziś.</span>
            </h1>

            <h6 class="header__cta">
                <div class="header__cta__text">dowiedz się więcej</div>
                <i class="fas fa-arrow-down header__cta__icon"></i>
            </h6>

        </div>
    )
}
