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
                    'I am a...', // Types 'One'
                    1000, // Waits 1s
                    'developer', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'scientist...', // Types 'Three' without deleting 'Two'
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