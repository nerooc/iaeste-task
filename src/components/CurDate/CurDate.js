import React, { useState, useEffect } from 'react'

import './CurDate.scss';




export default function CurDate() {
    const [dt, setDt] = useState(new Date().toLocaleString());

    useEffect(() => {
        let secTimer = setInterval( () => {
          setDt(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
        },1000)
    
        return () => clearInterval(secTimer);
    }, []);


    return (
        <div class="date">
            {dt}
        </div>
    )
}
