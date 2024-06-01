import { useState } from 'react';
import './Clock.css'


const Clock =() => {

    const time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {

        const time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    setInterval(updateTime, 1000);

    return (
        <div>
            <h1>{currentTime}</h1>
        </div>
    )
}
export default Clock;