import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import shangoo from '../assets/shangoo-main.PNG'
// import shangooTwo from '../assets/smise-360.png'
import shangooRegister from '../assets/shangoo-register-screen.png'
import shangooMain from '../assets/shangoo-mainpage-screen.png'
import shangooOpenAsset from '../assets/shangoo-open-onasset.png'
import etiquette1 from '../assets/etiquette-computer-home.png'
import etiquetteSalons from '../assets/etiquette-computer-see-salons.png'
import etiquetteLogin from '../assets/etiquette-computer-login.png'
import etiquetteSignup from '../assets/etiquette-computer-signup.png'
import NextIcon from '@mui/icons-material/ArrowRight';
import BackIcon from '@mui/icons-material/ArrowLeft'
import etiquetteAddSalon from '../assets/etiquette-computer-add-salon.png';
import etiquetteAddGallery from '../assets/etiquette-computer-add-to-gallery.png';
import etiquetteAddAppointment from '../assets/etiquette-computer-add-appointment.png';
import etiquetteAppointments from '../assets/etiquette-computer-see-appointments.png'
import etiquetteProfile from '../assets/etiquette-computer-see-profile.png'
import smiseOpening from '../assets/smise-opening.png'
import smiseAddSymptomsFourScreens from '../assets/smise-fourscreens-add-symptoms.png'
import smiseSelectTooth from '../assets/smise-select-tooth.png'
import smiseVisualizeTooth from '../assets/smise-visualize-tooth.png'
import smiseHidden from '../assets/smise-visualized-hidden.png'
import smiseNotes from '../assets/smise-notes.png'
import smiseImaging from '../assets/SMISE-imaging.png'
import smiseScreens from '../assets/smise-screens-many.png'
import smiseImagingTwo from '../assets/smise-imaging-2.png'

import shangooDesktopHomeOne from '../assets/shangoo-desktop-home-2.png'
import shangooOrderMeds from '../assets/shangoo-order-meds.png'
import shangooRegisterAndContact from '../assets/shangoo-register-and-contact.png'
import shangooThreeApps from '../assets/shangoo-3-apps.png'
// import Button from 'react-bootstrap/Button'

import blogForTechsSeeBlogs from '../assets/blog-for-techs-see-blogs.png';
import blogForTechsLogin from '../assets/blog-for-techs-login.png';
import signup from '../assets/blog-for-techs-signup.png';
import createBlog from '../assets/blog-for-techs-create-blog.png';
import dashboard from '../assets/blog-for-techs-dashboard.png';
import deleteBlog from '../assets/blog-for-techs-delete-blog.png';
import updateBlog from '../assets/blog-for-techs-update-blog.png';
import viewBlogs from '../assets/blog-for-techs-view-blogs.png';
import withAuth from '../assets/blog-for-techs-with-auth.png';
import erd from '../assets/blog-for-techs-erd.png'

function BlockButtonBlogForTechs() {
    const images = [
        {
            id: 1,
            img: `${blogForTechsSeeBlogs}`,
            description: 'Shangoo Desktop and Mobile App'
        },
        {
            id: 2,
            img: `${blogForTechsLogin}`,
            description: 'Get Your Prescribed or OTC Meds Delivered to You'
        },
        {
            id: 3,
            img: `${signup}`,
            description: 'Register for an Account and Get Customer Support'
        },
        {
            id: 4,
            img: `${createBlog}`,
            description: '3 Native iOS and Andriod applications (for drivers, pharmacies, and patients)'
        },
        {
            id: 5,
            img: `${dashboard}`,
            description: 'Gather yearly comparisons of dental records which allow patients to track the progress of their dental health over time'
        },
        {
            id: 6,
            img: `${deleteBlog}`,
            description: 'Refer to Simplified Clinical Notes Associated With a Tooth, Appointment Date, Provider, or Location'
        },
        {
            id: 7,
            img: `${updateBlog}`,
            description: 'Customized animated depiction of your true oral cavity in greater detail with more precise dental records'
        },
        {
            id: 8,
            img: `${viewBlogs}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 9,
            img: `${withAuth}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 10,
            img: `${erd}`,
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
            <Button id='wiggle' onClick={handleClick} variant="secondary" size="sm" text={Text} style={{ width: '65px', height: '65px', borderRadius: '50px', borderColor: '#EFEEF5', boxShadow: '0px 3px 6px #00000029', fontSize: '10px', position: 'absolute', top: '803px', left: '22.45%', background: '#EFEEF5 0% 0% no-repeat padding-box', zIndex: 6, fontSize: '14px', color: '#A2A3A7' }} >{Text}
                {Text ? 'See Less' : 'See More...'}
            </Button>
            {/* if (Button.onClick === 'true') {
                Text = 'See Less'
            }  : {
                Text = 'See More...'


            } */}
            <div className={showElement ? 'show-element' : 'hide-element'} style={{ left: '50%', top: '650px', position: 'absolute', zIndex: 5 }}>

                {images.map((image, index) =>
                    <div>
                        {/* <p style={{ textAlign: 'center', width: '300px', margin: '8px' }}>{image.description}</p> */}
                        <img id='zoom' key={image.id} src={image.img} style={{ display: index === currentIndex ? 'block' : 'none', width: '570px' }} ></img>
                        {/* <p key={image.id} style={{ display: index === currentIndex ? 'block' : 'none', textAlign: 'center', width: '300px', fontSize: '14px', marginLeft: '12%', marginTop: '35px', color: '#5284B5' }}>{image.description}</p> */}

                    </div>
                )}
                {/* <button id='wiggle' onClick={handleNextImage} style={{ width: '14%', height: '75px', marginTop: '10px', backgroundColor: '#EFEEF5 0% 0% no-repeat padding-box', color: '#A2A3A7', borderColor: 'white', marginLeft: '250px', fontSize: '40px', borderRadius: '50px' }}><NextIcon /></button>
                <button id='wiggle' onClick={handlePreviousImage} style={{ width: '7%', height: '38px', marginTop: '0px', backgroundColor: '#EFEEF5 0% 0% no-repeat padding-box', color: '#A2A3A7', borderColor: 'white', marginLeft: '-115px', top: '-5px', borderRadius: '30px' }}><BackIcon /></button> */}
                <div className='b-div-outer' style={{ top: '510px', left: '35%' }}>
                    <div className='b-div-inner'>
                        <button id='wiggle' onClick={handlePreviousImage} className='b-colored' style={{ border: 'blue', color: '#B2CBDF' }}>↺</button>
                        <button id='wiggle' onClick={handleNextImage} style={{ border: 'blue', color: '#B2CBDF' }} className='b-colored'>↻</button>
                    </div>
                </div>
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
export default BlockButtonBlogForTechs;