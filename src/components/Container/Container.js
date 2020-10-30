import React, { Children } from 'react'

import "./Container.scss";
<Container num="01" tag="IAESTE AGH" title="Dlaczego warto do nas dołączyć?"></Container>

export default function Container(props) {

    let containerNormal = (
        <>
            <div className="container__text">
                <div className="num">{props.num}</div>

                <div className="container__text__category">
                    <div className="container__text__category__rectangle"></div>
                    <div className="container__text__category__title">{props.tag}</div>
                </div>

                <h2 className="container__text__header">{props.title}</h2>

                <p className="container__text__pg">{props.children}</p>

                <div className="container__text__button">
                    <button>read more</button> 
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
            

            <img src={props.photo} className="container__img" />
        </>
    );

    let containerInverted = (
        <>
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
                    <button>read more</button> 
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
        </>
    );

    let containerContent = props.inverted ? containerInverted : containerNormal;

    return (
        <div className="container">

            {containerContent}
            
        </div>
    )
}
