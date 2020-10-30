import React, { Children } from 'react'

import Fade from 'react-reveal/Fade';

import "./Container.scss";
<Container num="01" tag="IAESTE AGH" title="Dlaczego warto do nas dołączyć?"></Container>

export default function Container(props) {

    let containerNormal = (
        <>
        <Fade right>
            <div className="container__text">
                <div className="num">{props.num}</div>

                <div className="container__text__category">
                    <div className="container__text__category__rectangle"></div>
                    <div className="container__text__category__title">{props.tag}</div>
                </div>

                <h2 className="container__text__header">{props.title}</h2>

                <p className="container__text__pg">{props.children}</p>

                <div className="container__text__button">
                    <button onClick={()=>window.open(`${props.link}`, "_blank")}>{props.btntext}</button>  
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>

            <img src={props.photo} className="container__img" />
        </Fade>
        </>
    );

    let containerInverted = (
        <>
            <Fade left>
            <img src={props.photo} className="container__img-inverted" />

            <div className="container__text">
                <div className="num">{props.num}</div>

                <div className="container__text__category">
                    <div className="container__text__category__rectangle"></div>
                    <div className="container__text__category__title">{props.tag}</div>
                </div>

                <h2 className="container__text__header">{props.title}</h2>

                <p className="container__text__pg">{props.children}</p>

                <div className="container__text__button">
                    <button onClick={()=>window.open(`${props.link}`, "_blank")}>{props.btntext}</button> 
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
            </Fade>
        </>
    );

    let containerContent = props.inverted ? containerInverted : containerNormal;

    return (
        <div className="container" id={props.id}>

            {containerContent}
            
        </div>
    )
}
