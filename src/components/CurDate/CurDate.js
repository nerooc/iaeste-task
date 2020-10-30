import React, { useState, useEffect } from 'react'

import './CurDate.scss';




export default function CurDate() {
    const [dt, setDt] = useState(new Date().toLocaleString());

    useEffect(() => {
        let secTimer = setInterval( () => {
            let hours = new Date().getHours();
            let minutes = new Date().getMinutes();
            let seconds = new Date().getSeconds();

            hours = (hours < 10 ? "0" + hours : hours);
            minutes = (minutes < 10 ? "0" + minutes : minutes);
            seconds = (seconds < 10 ? "0" + seconds : seconds);

          setDt(`${hours} : ${minutes} : ${seconds}`)
        },1000)
    
        return () => clearInterval(secTimer);
    }, []);


    return (
        <div className="date">
            {dt}
        </div>
    )
}
