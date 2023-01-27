import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {

    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date;
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, [])

    return <div className='clock'>{clockState}</div>
}

export default Clock;