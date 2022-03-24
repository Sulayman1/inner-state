import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{ border: '5px solid green', margin: '50px' }}>
            <h2>name: {props.name}</h2>
            <p>counter:{props.steps}</p>
            <div>
                <Dial steps={props.steps}></Dial>
                <Dial steps={props.steps}></Dial>
            </div>
        </div>
    );
};

export default Display;