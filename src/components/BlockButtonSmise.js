import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import shangoo from '../assets/shangoo-main.PNG'
// import shangooTwo from '../assets/smise-360.png'
// import shangooRegister from '../assets/shangoo-register-screen.png'
// import shangooMain from '../assets/shangoo-mainpage-screen.png'
// import shangooOpenAsset from '../assets/shangoo-open-onasset.png'
// import etiquette1 from '../assets/etiquette-computer-home.png'
// import etiquetteSalons from '../assets/etiquette-computer-see-salons.png'
// import etiquetteLogin from '../assets/etiquette-computer-login.png'
// import etiquetteSignup from '../assets/etiquette-computer-signup.png'
// import NextIcon from '@mui/icons-material/ArrowRight';
// import BackIcon from '@mui/icons-material/ArrowLeft'
// import etiquetteAddSalon from '../assets/etiquette-computer-add-salon.png';
// import etiquetteAddGallery from '../assets/etiquette-computer-add-to-gallery.png';
// import etiquetteAddAppointment from '../assets/etiquette-computer-add-appointment.png';
// import etiquetteAppointments from '../assets/etiquette-computer-see-appointments.png'
// import etiquetteProfile from '../assets/etiquette-computer-see-profile.png'
import smiseOpening from '../assets/smise-opening.png'
import smiseAddSymptomsFourScreens from '../assets/smise-fourscreens-add-symptoms.png'
import smiseSelectTooth from '../assets/smise-select-tooth.png'
import smiseVisualizeTooth from '../assets/smise-visualize-tooth.png'
import smiseHidden from '../assets/smise-visualized-hidden.png'
import smiseNotes from '../assets/smise-notes.png'
import smiseImaging from '../assets/SMISE-imaging.png'
import smiseScreens from '../assets/smise-screens-many.png'
import smiseImagingTwo from '../assets/smise-imaging-2.png'
// import Button from 'react-bootstrap/Button'

function BlockButtonSmise() {
    const images = [
        {
            id: 1,
            img: `${smiseOpening}`,
            description: ''
        },
        {
            id: 2,
            img: `${smiseSelectTooth}`,
            description: 'Select A Tooth and Enter Real-time Patient Input'
        },
        {
            id: 3,
            img: `${smiseAddSymptomsFourScreens}`,
            description: 'Add Symptoms to Your Dental Chart'
        },
        {
            id: 4,
            img: `${smiseVisualizeTooth}`,
            description: 'Visualize Tooth Morphology'
        },
        {
            id: 5,
            img: `${smiseHidden}`,
            description: 'Gather Yearly Comparisons of Dental Records to Track Progress Over Time'
        },
        {
            id: 6,
            img: `${smiseNotes}`,
            description: 'Refer to Simplified Clinical Notes Associated With a Tooth, Appointment Date, Provider, or Location'
        },
        {
            id: 7,
            img: `${smiseImaging}`,
            description: 'Customized Animated Depiction of Your True Oral Cavity'
        },
        {
            id: 8,
            img: `${smiseImagingTwo}`,
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
            <Button id='wiggle' onClick={handleClick} variant="secondary" size="sm" text={Text} style={{ width: '65px', height: '65px', borderRadius: '50px', borderColor: '#F4CC69', boxShadow: '0px 3px 6px #00000029', fontSize: '10px', position: 'absolute', top: '803px', left: '22.45%', background: '#EFEEF5 0% 0% no-repeat padding-box', zIndex: 6, fontSize: '14px', color: '#A2A3A7' }} >{Text}
                {Text ? 'See Less' : 'See More...'}
            </Button>
            {/* if (Button.onClick === 'true') {
                Text = 'See Less'
            }  : {
                Text = 'See More...'


            } */}
            <div className={showElement ? 'show-element' : 'hide-element'} style={{ left: '55%', top: '600px', position: 'absolute', zIndex: 5 }}>

                {images.map((image, index) =>
                    <div >
                        {/* <p style={{ textAlign: 'center', width: '300px', margin: '8px' }}>{image.description}</p> */}
                        <img id='zoom' key={image.id} src={image.img} style={{ display: index === currentIndex ? 'block' : 'none', width: '450px' }} ></img>
                        <p key={image.id} style={{ display: index === currentIndex ? 'block' : 'none', textAlign: 'center', width: '300px', fontSize: '12px', marginLeft: '18%', marginTop: '-35px', color: '#F76503' }}>{image.description}</p>

                    </div>
                )}
                <div className='b-div-outer' style={{ top: '520px', left: '35%' }}>
                    <div className='b-div-inner'>
                        <button id='wiggle' onClick={handlePreviousImage} className='b-colored' style={{ border: '1px solid rgba(245, 167, 19, 0.3)', color: 'orange' }}>↺</button>
                        <button id='wiggle' onClick={handleNextImage} style={{ border: '1px solid rgba(245, 167, 19, 0.3)', color: 'orange' }} className='b-colored'>↻</button>
                    </div>
                </div>
                {/* <div style={{ top: '900px', left: '200px', position: 'absolute', width: '100px', height: '100px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button style={{ width: '30%', height: 'auto' }}>Hi</button>
                        <button>Bi</button>
                    </div>
                </div> */}
                {/* <div className='b-div-outer'>
                    <div className='b-div-inner'>
                        <button className='b-colored' id='wiggle' style={{ border: '1px solid rgba(245, 167, 19, 0.3)', color: 'orange' }} onClick={handleNextImage}>↺</button>
                        <button className='b-colored' id='wiggle' style={{ border: '1px solid rgba(245, 167, 19, 0.3)', color: 'orange' }} onClick={handlePreviousImage}>↻</button>
                    </div>
                </div> */}
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
export default BlockButtonSmise;