import React from 'react'

import "./Social.scss";

export default function Social() {
    return (
            <div className="social">
                Obserwuj nas!
                <i onClick={()=> window.open("https://www.instagram.com/iaeste_agh/?hl=pl", "_blank")} className="fab fa-instagram"></i>
                <i onClick={()=> window.open("https://www.facebook.com/IAESTE.AGH", "_blank")}className="fab fa-facebook-square"></i>
            </div>
    )
}
