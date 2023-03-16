import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import NextIcon from '@mui/icons-material/ArrowRight';
import BackIcon from '@mui/icons-material/ArrowLeft'


import mymetro1 from '../assets/Mymetro-1.png';
import mymetro2 from '../assets/mymetro-2.png';
import mymetro3 from '../assets/mymetro-3.png';
import mymetro4 from '../assets/Mymetro-4.png';
import mymetro5 from '../assets/mymetro-5.png';
import mymetro6 from '../assets/Mymetro-6.png';
import mymetro7 from '../assets/Mymetro-7.png';
import mymetro8 from '../assets/Mymetro-8.png';
import mymetro9 from '../assets/Mymetro-9.png';
import mymetro10 from '../assets/Mymetro-10.png';
import mymetro11 from '../assets/mymetro-11.png';
import mymetro12 from '../assets/mymetro-12.png';
import mymetro13 from '../assets/mymetro-13.png';
import mymetro14 from '../assets/mymetro-14.png';
import mymetro15 from '../assets/mymetro-15.png';
import mymetro16 from '../assets/mymetro-16.png';
import mymetro17 from '../assets/mymetro-17.png';
import mymetro18 from '../assets/mymetro-18.png';
import mymetro19 from '../assets/Mymetro-19.png';



function BlockButtonMyMetro() {
    const images = [
        {
            id: 1,
            img: `${mymetro1}`,
            description: 'Shangoo Desktop and Mobile App'
        },
        {
            id: 2,
            img: `${mymetro2}`,
            description: 'Get Your Prescribed or OTC Meds Delivered to You'
        },
        {
            id: 3,
            img: `${mymetro3}`,
            description: 'Register for an Account and Get Customer Support'
        },
        {
            id: 4,
            img: `${mymetro4}`,
            description: '3 Native iOS and Andriod applications (for drivers, pharmacies, and patients)'
        },
        {
            id: 5,
            img: `${mymetro5}`,
            description: 'Gather yearly comparisons of dental records which allow patients to track the progress of their dental health over time'
        },
        {
            id: 6,
            img: `${mymetro6}`,
            description: 'Refer to Simplified Clinical Notes Associated With a Tooth, Appointment Date, Provider, or Location'
        },
        {
            id: 7,
            img: `${mymetro7}`,
            description: 'Customized animated depiction of your true oral cavity in greater detail with more precise dental records'
        },
        {
            id: 8,
            img: `${mymetro8}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 9,
            img: `${mymetro9}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 10,
            img: `${mymetro10}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 11,
            img: `${mymetro11}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 12,
            img: `${mymetro12}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 13,
            img: `${mymetro13}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 14,
            img: `${mymetro14}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 15,
            img: `${mymetro15}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 16,
            img: `${mymetro16}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 17,
            img: `${mymetro17}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 18,
            img: `${mymetro18}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 19,
            img: `${mymetro19}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleNextImage() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    function handlePreviousImage() {
        setCurrentIndex((prevIndex) => (prevIndex - 1) % images.length);
    }
    const [showElement, setShowElement] = useState(false);

    function toggleElement() {
        setShowElement(prevShowElement => !prevShowElement);
    }
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
        toggleElement()
        setText(!Text)
    };

    const [Text, setText] = useState(false)
    // const btn = document.querySelector(<Button />)

    // btn.addEventListener("click", function () {
    //     btn.innerHTML = ['See Less']
    // })
    // if (btn.click) {
    //     btn.innerHTML = ['See Less']
    // } : (
    //     btn.innerHTML = ['See More']
    // )
    // function seeLess() {
    //     Button.currentIndex = "see Less"
    // }
    return (
        <div className="d-grid gap-2" style={{ alignContent: 'center' }}>
            {/* <Button variant="primary" size="lg">
                Block level button
            </Button> */}
            <Button id='wiggle' onClick={handleClick} variant="secondary" size="sm" text={Text} style={{ width: '65px', height: '65px', borderRadius: '50px', borderColor: '#71A1FF', boxShadow: '6px 9px 12px #00000029', fontSize: '10px', position: 'absolute', top: '803px', left: '22.45%', background: 'transparent linear-gradient(239deg, #4FAFF5 0%, #8D17F3 100%) 0% 0% no-repeat padding-box', zIndex: 6, fontSize: '14px', color: 'white' }} >{Text}
                {Text ? 'See Less' : 'See More...'}
            </Button>
            {/* if (Button.onClick === 'true') {
                Text = 'See Less'
            }  : {
                Text = 'See More...'


            } */}
            <div className={showElement ? 'show-element' : 'hide-element'} style={{ left: '50%', top: '730px', position: 'absolute', zIndex: 5 }}>

                {images.map((image, index) =>
                    <div>
                        {/* <p style={{ textAlign: 'center', width: '300px', margin: '8px' }}>{image.description}</p> */}
                        <img id='zoom' key={image.id} src={image.img} style={{ display: index === currentIndex ? 'block' : 'none', width: '570px' }} ></img>
                        {/* <p key={image.id} style={{ display: index === currentIndex ? 'block' : 'none', textAlign: 'center', width: '300px', fontSize: '14px', marginLeft: '12%', marginTop: '35px', color: '#5284B5' }}>{image.description}</p> */}

                    </div>
                )}
                <button id='wiggle' onClick={handleNextImage} style={{ width: '13%', height: '75px', marginTop: '10px', backgroundColor: '#EFEEF5 0% 0% no-repeat padding-box', color: '#A2A3A7', borderColor: 'white', marginLeft: '275px', fontSize: '40px', borderRadius: '50px' }}><NextIcon /></button>
                <button id='wiggle' onClick={handlePreviousImage} style={{ width: '7%', height: '38px', marginTop: '0px', backgroundColor: '#EFEEF5 0% 0% no-repeat padding-box', color: '#A2A3A7', borderColor: 'white', marginLeft: '-120px', top: '-5px', borderRadius: '30px' }}><BackIcon /></button>
            </div>
        </div >
    );
}

// const cardData = [
//     {
//         img: `${shangoo}`
//     },
//     {
//         img: `${shangoo}`
//     }
// ]
export default BlockButtonMyMetro;