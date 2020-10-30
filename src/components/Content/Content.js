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
                    IAESTE działa w Polsce od 1957 roku W liczbach to 12 komitetów lokalnych przy
                    najlepszych uczelniach w kraju, ponad 300 członków, 240 aktywnych współprac
                    i poand 400 rocznie wymienianych ofert. Od 1957 roku ponad 25 tysięcy polskich studnetów
                    wyjechało na zagraniczne staże i praktyki.

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
                    W naszym Komitecie Lokalnym działa aż <span style={{ color: "#FBD784" }}>sześć</span> grup roboczych. Każda z grup pomoże Ci w zdobyciu
                    doświadczenia, poszerzeniu swoich zainteresowań oraz rozwoju określonych umiejętności
                    w danych obszarach i dziedzinach.
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
                    Rekrutacja odbywa się w pełni drogą elektroniczną. Wzięcie w niej udziału jest banalnie proste - wystarczy wypełnić ankietę i już niedługo możecie zostać kolejnym, świeżutkim członkiem IAESTE!
                </Container>

                <Footer/>
            </div>
        </>
    )
}
