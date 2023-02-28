import React from 'react';
// import "fontsource-cascadia-code"



import { TypeAnimation } from 'react-type-animation';

const TypeAnimate = () => {
    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap');
            </style>
            <TypeAnimation
                sequence={[
                    'About', // Types 'One'
                    1000, // Waits 1s
                    'Me', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'About Me...', // Types 'Three' without deleting 'Two'
                    2000,
                    () => {
                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                    }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', fontFamily: 'Climate Crisis' }}
            />
        </div>
    );
};

export default TypeAnimate