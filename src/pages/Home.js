import React from 'react'
import TypeAnimate from '../components/TypeAnimate'
import MovingComponent from 'react-moving-text'
import Header from '../components/Header'
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '4em', fontSize: '48px', fontFamily: 'Lato', color: 'white', textShadow: '4px 4px #6C6C6C' }}>
            {/* <MovingComponent
                type="blur"
                duration="1700ms"
                delay=".5s"
                direction="alternate"
                timing="ease-in"
                iteration="infinite"
                fillMode="none">
                Kayla Casale
            </MovingComponent> */}
            <TypeAnimate />
        </div>

        // <h1> Here's a few things about me... </h1>



    )
}

export default Home