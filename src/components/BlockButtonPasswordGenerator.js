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

import wakoCover from '../assets/wako-cover.png';
import wakoAgenda from '../assets/wako-agenda.png';
import wakoSection from '../assets/wako-Section.png';
import wakoImageCards from '../assets/wako-image-cards.png';
import wakoParagraphDesktop from '../assets/wako-Paragraph-desktop.png';
import wakoRoadmap from '../assets/wako-Roadmap.png';
import paragraphMobile from '../assets/Paragraph-mobile.png';
import barChart from '../assets/Bar-chart.png';
import bullets from '../assets/Bullets.png';
import team from '../assets/team.png';
import coverTwo from '../assets/Cover-2.png';
import paragraphPc from '../assets/Paragraph-pc.png';
import paragraphPcTwo from '../assets/paragraph-pc-2.png';
import paragraphTablet from '../assets/paragraph-tablet.png';
import paragraphPcThree from '../assets/Paragraph-pc-3.png';
import thankYou from '../assets/thank-you.png';

import jotterCover from '../assets/Cover.png';
import jotterSection from '../assets/Section.png';
import jotterPTablet from '../assets/jotter-Paragraph-tablet.png';
import jotterPPc from '../assets/jotter-Paragraph-pc.png';
import jotterPPcTwo from '../assets/jotter-Paragraph-pc-2.png';
import jotterPPcThree from '../assets/jotter-Paragraph-pc-3.png';
import jotterPTabletTwo from '../assets/jotter-Paragraph-tablet-2.png';
import jotterWireframe from '../assets/jotter-Wireframe.png';
import jotterThankYou from '../assets/jotter-Thank-you.png';

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

import scheduler1 from '../assets/Scheduler-1.png';
import scheduler2 from '../assets/Scheduler-2.png';
import scheduler3 from '../assets/Scheduler-3.png';
import scheduler4 from '../assets/Scheduler-4.png';
import scheduler5 from '../assets/Scheduler-5.png';
import scheduler6 from '../assets/Scheduler-6.png';

import pass1 from '../assets/Pass-1.png';
import pass2 from '../assets/Pass-2.png';
import pass3 from '../assets/Pass-3.png';
import pass4 from '../assets/Pass-4.png';
import pass5 from '../assets/Pass-5.png';
import pass6 from '../assets/Pass-6.png';
import pass7 from '../assets/Pass-7.png';
import pass8 from '../assets/Pass-8.png';
import pass9 from '../assets/Pass-9.png';
import pass10 from '../assets/Pass-10.png';



function BlockButtonPasswordGenerator() {
    const images = [
        {
            id: 1,
            img: `${pass1}`,
            description: 'Shangoo Desktop and Mobile App'
        },
        {
            id: 2,
            img: `${pass2}`,
            description: 'Get Your Prescribed or OTC Meds Delivered to You'
        },
        {
            id: 3,
            img: `${pass3}`,
            description: 'Register for an Account and Get Customer Support'
        },
        {
            id: 4,
            img: `${pass4}`,
            description: '3 Native iOS and Andriod applications (for drivers, pharmacies, and patients)'
        },
        {
            id: 5,
            img: `${pass5}`,
            description: 'Gather yearly comparisons of dental records which allow patients to track the progress of their dental health over time'
        },
        {
            id: 6,
            img: `${pass6}`,
            description: 'Refer to Simplified Clinical Notes Associated With a Tooth, Appointment Date, Provider, or Location'
        },
        {
            id: 7,
            img: `${pass7}`,
            description: 'Customized animated depiction of your true oral cavity in greater detail with more precise dental records'
        },
        {
            id: 8,
            img: `${pass8}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 9,
            img: `${pass9}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
        {
            id: 10,
            img: `${pass10}`,
            description: 'SMISE analyzes dental records, patient input, and treatment outcomes among patients to provide increasingly personal, accurate, and predictive recommendations'
        },
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
            <Button id='wiggle' onClick={handleClick} variant="secondary" size="sm" text={Text} style={{ width: '65px', height: '65px', borderRadius: '50px', borderColor: '#EFEEF5', boxShadow: '6px 9px 12px #00000029', fontSize: '10px', position: 'absolute', top: '803px', left: '22.45%', background: 'transparent linear-gradient(180deg, #D56D6C 0%, #FFD6EE 47%, #9596DB 100%) 0% 0% no-repeat padding-box', zIndex: 6, fontSize: '14px', color: 'white' }} >{Text}
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
export default BlockButtonPasswordGenerator;