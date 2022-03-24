import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
    }

    useEffect(() => {
        console.log(steps)
    }, [steps])

    return (
        <div style={{ border: '5px solid red', margin: '20px' }}>
            <h2>this is watch document</h2>
            <p>Watch counter: {steps}</p>
            <button onClick={increaseSteps}>press</button>
            <div>
                <Display name='garmin' steps={steps}></Display>
                <Display name='garmin' steps={steps}></Display>
            </div>
        </div>
    );
};

export default Watch;