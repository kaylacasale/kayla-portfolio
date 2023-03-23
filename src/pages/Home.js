import React from 'react'
import TypeAnimate from '../components/TypeAnimate'
// import MovingComponent from 'react-moving-text'
// import Header from '../components/Header'
// import ReactCarousel from '../components/ReactCarousel'
// import Background from '../components/Background'
// import ReactCarouselTwo from '../components/ReactCarouselTwo'
import '../styles/Background.css'
// import BackgroundTwo from '../components/BackgroundTwo'
// import HomeCarousel from '../components/HomeCarousel'
// import HomeCarousel from '../components/HomeCarousel'

// import ReactCarouselVectors from '../components/ReactCarouselVectors'
import "fontsource-cascadia-code"
// import ReactCarouselPrototyping from '../components/ReactCarouselPrototyping'
// import MainIcons from '../components/MainIcons'
import AboutMe from '../components/AboutMe'
import BackgroundCircles from '../components/BackgroundCircles'
import Section from '../components/Section'
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

const Home = () => {
    return (

        <div style={{ textAlign: 'center', marginTop: '2em', fontSize: '48px', fontFamily: 'Climate Crisis', color: 'white', textShadow: '1px 1px #DFDFE3' }} >
            {/* vector art - carousel */}

            <BackgroundCircles />
            <div style={{ left: '10px', top: '10px', position: 'absolute', fontSize: '30px' }}>
                <TypeAnimate />
            </div>
            <div style={{ marginBottom: '0px', marginTop: '250px', opacity: '1', textShadow: '2px 2px #9CCFEA' }}>
                {/* <TypeAnimate /> */}
            </div>
            <div>
                {/* <MainIcons /> */}
            </div>
            <div>
                <AboutMe />
            </div>
            <div style={{ left: '90%', top: '0px', position: 'absolute' }}>
                <Section />
            </div>


        </div>

        // <h1> Here's a few things about me... </h1>



    )
}

const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg"
];
export default Home