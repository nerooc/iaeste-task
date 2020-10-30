import React, { Children } from 'react'

import "./Container.scss";
<Container num="01" tag="IAESTE AGH" title="Dlaczego warto do nas dołączyć?"></Container>

export default function Container(props) {

    let containerNormal = (
        <>
            <div class="container__text">
                <div class="num">{props.num}</div>

                <div class="container__text__category">
                    <div class="container__text__category__rectangle"></div>
                    <div class="container__text__category__title">{props.tag}</div>
                </div>

                <h2 class="container__text__header">{props.title}</h2>

                <p class="container__text__pg">{props.children}</p>

                <div class="container__text__button">
                    <button>read more</button> 
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
            

            <img src={props.photo} class="container__img" />
        </>
    );

    let containerInverted = (
        <>
            <img src={props.photo} class="container__img-inverted" />

            <div class="container__text">
                <div class="num">{props.num}</div>

                <div class="container__text__category">
                    <div class="container__text__category__rectangle"></div>
                    <div class="container__text__category__title">{props.tag}</div>
                </div>

                <h2 class="container__text__header">{props.title}</h2>

                <p class="container__text__pg">{props.children}</p>

                <div class="container__text__button">
                    <button>read more</button> 
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </>
    );

    let containerContent = props.inverted ? containerInverted : containerNormal;

    return (
        <div class="container">

            {containerContent}
            
        </div>
    )
}
