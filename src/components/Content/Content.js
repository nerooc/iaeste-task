import React from 'react'

import Container from "../Container/Container";
import Gradient from "../Gradient/Gradient";
import Footer from "../Footer/Footer";

import "./Content.scss";

import mntns_photo from "../../assets/images/gory.png";
import people_photo from "../../assets/images/people.png";
import pc_photo from "../../assets/images/pc.png";


export default function Content() {
    return (
        <>
            <Gradient/>
            <div className="content"> 
            {/* Container 1 */}
                <Container 
                    num="01" 
                    tag="IAESTE AGH" 
                    title="Dlaczego warto do nas dołączyć?" 
                    photo={people_photo}
                    btntext="sprawdź bloga"
                    id="content"
                    link="http://iaeste.agh.edu.pl/blog/"
                >
                    Wiele okazji do dzielenia się pasją i wsparcie bardziej doświadczonych koleżanek
                    i kolegów. This hiking level guide will help you plan hikes according to
                    different hike ratings set by various websites like All Trails and Modern Hiker.
                    What type of hiker are you – novice, moderate, advanced moderate, expert, or
                    expert backpacker?
                </Container>

                {/* Container 2 */}
                <Container 
                    inverted="true" 
                    num="02" 
                    tag="Różnorodność" 
                    title="Każdy znajdzie coś dla siebie!" 
                    photo={pc_photo}
                    btntext="sprawdź sekcje"
                    link=""
                >

                    The nice thing about beginning hiking is that you don’t really need any special
                    gear, you can probably get away with things you already have. Let’s start with
                    clothing. A typical mistake hiking beginners make is wearing jeans and regular
                    clothes, which will get heavy and chafe wif they get sweaty or wet.
                </Container>

                {/* Container 3 */}
                <Container 
                    num="03" 
                    tag="Decyzja należy do Ciebie!" 
                    title="Jak wziąć udział w rekrutacji?" 
                    photo={mntns_photo}
                    btntext="wypełnij ankietę!"
                    link="https://forms.gle/AJQriHEKMipB94F38"
                >
                    The nice thing about beginning hiking is that you don’t really need any special
                    gear, you can probably get away with things you already have. Let’s start with
                    clothing. A typical mistake hiking beginners make is wearing jeans and regular
                    clothes, which will get heavy and chafe wif they get sweaty or wet.
                </Container>

                <Footer/>
            </div>
        </>
    )
}
