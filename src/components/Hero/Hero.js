import React from 'react';

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

import bg_img from '../../assets/images/hero-background.png';

import './Hero.scss';

export default function Hero() {
    return (
        <div className="hero" styles={{ backgroundImage:`url(${bg_img})`}} >
            <Navbar/>
            <Header/>
        </div>
    )
}
