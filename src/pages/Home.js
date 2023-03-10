import React from 'react'
import TypeAnimate from '../components/TypeAnimate'
import MovingComponent from 'react-moving-text'
import Header from '../components/Header'
import ReactCarousel from '../components/ReactCarousel'
import Background from '../components/Background'
import ReactCarouselTwo from '../components/ReactCarouselTwo'
import '../styles/Background.css'
import BackgroundTwo from '../components/BackgroundTwo'
// import HomeCarousel from '../components/HomeCarousel'
// import HomeCarousel from '../components/HomeCarousel'

import ReactCarouselVectors from '../components/ReactCarouselVectors'
import "fontsource-cascadia-code"
import ReactCarouselPrototyping from '../components/ReactCarouselPrototyping'
import MainIcons from '../components/MainIcons'
import AboutMe from '../components/AboutMe'
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

const Home = () => {
    return (

        <div style={{ textAlign: 'center', marginTop: '2em', fontSize: '48px', fontFamily: 'Climate Crisis', color: 'white', textShadow: '2px 2px #DFDFE3' }} >
            {/* vector art - carousel */}

            <div style={{ marginBottom: '50px', marginTop: '200px' }}>
                <TypeAnimate />
            </div>
            <div>
                <MainIcons />
            </div>
            <div>
                <AboutMe />
            </div>
            {/* neuroscience research - carousel */}
            {/* <div>
                <div style={{ width: '80%', float: 'left' }}>
                    <MovingComponent
                        type="fadeInFromBottom"
                        duration="1700ms"
                        delay=".5s"
                        direction="alternate"
                        timing="ease-in"
                        iteration="infinite"
                        fillMode="none"
                        className='rounded' style={{ fontSize: '28px' }}>
                        Neuroscience & Bioengineering 🧠
                    </MovingComponent>
                </div>
                <div>
                    <ReactCarousel />
                </div>
            </div> */}
            {/* psychology research - carousel */}
            {/* <div>
                <div style={{ width: '80%', float: 'right' }}>
                    <MovingComponent
                        type="fadeInFromBottom"
                        duration="1700ms"
                        delay=".5s"
                        direction="alternate"
                        timing="ease-in"
                        iteration="infinite"
                        fillMode="none"
                        className='rounded' style={{ fontSize: '28px' }}>
                        Psychology & Social Science 🤝
                    </MovingComponent>
                </div>
                <div>
                    <ReactCarouselTwo />
                </div>
            </div> */}
            {/* <div>
                <div style={{ width: '80%', float: 'left' }}>
                    <MovingComponent
                        type="fadeInFromBottom"
                        duration="1700ms"
                        delay=".5s"
                        direction="alternate"
                        timing="ease-in"
                        iteration="infinite"
                        fillMode="none"
                        className='rounded' style={{ fontSize: '28px' }}>
                        Design Ideation 💭
                    </MovingComponent>
                </div>
                <div>
                    <ReactCarouselPrototyping />
                </div>
            </div> */}
            {/* <div>
                <div style={{ width: '80%', float: 'right' }}>
                    <MovingComponent
                        type="fadeInFromBottom"
                        duration="1700ms"
                        delay=".5s"
                        direction="alternate"
                        timing="ease-in"
                        iteration="infinite"
                        fillMode="none"
                        className='rounded' style={{ fontSize: '28px' }}>
                        Vector Graphics ⿻
                    </MovingComponent>
                </div>
                <div>
                    <ReactCarouselVectors />
                </div>
            </div> */}
            {/* <div>
                <HomeCarousel />;
            </div> */}
            {/* <style>
                <Background />
            </style> */}

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