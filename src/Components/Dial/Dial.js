import React from 'react';

const Dial = (props) => {
    return (
        <div style={{
            border: '5px solid yellow', margin: '20px'
        }}>
            <h3>dial: {props.steps}</h3>
        </div >
    );
};

export default Dial;