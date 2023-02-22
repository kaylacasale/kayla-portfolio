import React from 'react'
import TypeAnimate from '../components/TypeAnimate'
import MovingComponent from 'react-moving-text'
import Header from '../components/Header'
import ReactCarousel from '../components/ReactCarousel'
import Background from '../components/Background'
// import HomeCarousel from '../components/HomeCarousel'
// import HomeCarousel from '../components/HomeCarousel'

// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

const Home = () => {
    return (
        <div style={{ background: `${<Background />}`, textAlign: 'center', marginTop: '4em', fontSize: '48px', fontFamily: 'Anonymous Pro', color: 'white', textShadow: '2px 2px #ff007f' }}>

            <div style={{ marginBottom: '10px' }}>
                <TypeAnimate />
            </div>
            <div>
                <ReactCarousel />
            </div>
            {/* <div>
                <HomeCarousel />;
            </div> */}


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