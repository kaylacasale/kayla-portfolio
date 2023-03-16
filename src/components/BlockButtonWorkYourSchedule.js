import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import shangooTwo from '../assets/smise-360.png'

import NextIcon from '@mui/icons-material/ArrowRight';
import BackIcon from '@mui/icons-material/ArrowLeft'


import scheduler1 from '../assets/Scheduler-1.png';
import scheduler2 from '../assets/Scheduler-2.png';
import scheduler3 from '../assets/Scheduler-3.png';
import scheduler4 from '../assets/Scheduler-4.png';
import scheduler5 from '../assets/Scheduler-5.png';
import scheduler6 from '../assets/Scheduler-6.png';



function BlockButtonWorkYourSchedule() {
    const images = [
        {
            id: 1,
            img: `${scheduler1}`,
            description: 'Shangoo Desktop and Mobile App'
        },
        {
            id: 2,
            img: `${scheduler2}`,
            description: 'Get Your Prescribed or OTC Meds Delivered to You'
        },
        {
            id: 3,
            img: `${scheduler3}`,
            description: 'Register for an Account and Get Customer Support'
        },
        {
            id: 4,
            img: `${scheduler4}`,
            description: '3 Native iOS and Andriod applications (for drivers, pharmacies, and patients)'
        },
        {
            id: 5,
            img: `${scheduler5}`,
            description: 'Gather yearly comparisons of dental records which allow patients to track the progress of their dental health over time'
        },
        {
            id: 6,
            img: `${scheduler6}`,
            description: 'Refer to Simplified Clinical Notes Associated With a Tooth, Appointment Date, Provider, or Location'
        },
        // {
        //     id: 7,
        //     img: `${mymetro7}`,
        //     description: 'Customized animated depiction of your true oral cavity in greater detail with more precise dental records'
        // },
        // {
        //     id: 8,
        //     img: `${mymetro8}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // },
        // {
        //     id: 9,
        //     img: `${mymetro9}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // },
        // {
        //     id: 10,
        //     img: `${mymetro10}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // },
        // {
        //     id: 11,
        //     img: `${mymetro11}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // },
        // {
        //     id: 12,
        //     img: `${mymetro12}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // },
        // {
        //     id: 13,
        //     img: `${mymetro13}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // },
        // {
        //     id: 14,
        //     img: `${mymetro14}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // },
        // {
        //     id: 15,
        //     img: `${mymetro15}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // },
        // {
        //     id: 16,
        //     img: `${mymetro16}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // },
        // {
        //     id: 17,
        //     img: `${mymetro17}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // },
        // {
        //     id: 18,
        //     img: `${mymetro18}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // },
        // {
        //     id: 19,
        //     img: `${mymetro19}`,
        //     description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        // }
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
            <Button id='wiggle' onClick={handleClick} variant="secondary" size="sm" text={Text} style={{ width: '65px', height: '65px', borderRadius: '50px', borderColor: '#EFEEF5', boxShadow: '6px 9px 12px #00000029', fontSize: '10px', position: 'absolute', top: '803px', left: '22.45%', background: 'transparent linear-gradient(180deg, #90DB82 0%, #4EABD1 100%) 0% 0% no-repeat padding-box', zIndex: 6, fontSize: '14px', color: 'white' }} >{Text}
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
export default BlockButtonWorkYourSchedule;