import React from 'react'
import TypeAnimate from '../components/TypeAnimate'
import MovingComponent from 'react-moving-text'
import Header from '../components/Header'
import ReactCarousel from '../components/ReactCarousel'
import Background from '../components/Background'
import ReactCarouselTwo from '../components/ReactCarouselTwo'
import '../styles/Background.css'
// import BackgroundTwo from '../components/BackgroundTwo'
// import HomeCarousel from '../components/HomeCarousel'
// import HomeCarousel from '../components/HomeCarousel'

// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

const Home = () => {
    return (

        <div style={{ background: `${<Background />}`, textAlign: 'center', marginTop: '2em', fontSize: '48px', fontFamily: 'Anonymous Pro', color: 'white', textShadow: '2px 2px #ff007f' }} >

            <div style={{ marginBottom: '10px' }}>
                <TypeAnimate />
            </div>
            <div>
                <div>
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
            </div>

            <div>
                <div>
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
            </div>
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