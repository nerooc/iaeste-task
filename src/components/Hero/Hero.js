import React from 'react';
import bg_img from '../../assets/images/hero-background.png';
import './Hero.scss';

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

export default function Hero() {
    return (
        <div class="hero" styles={{ backgroundImage:`url(${bg_img})`}} >
            <Navbar/>
            <Header/>
        </div>
    )
}
