
import React from 'react';
// import { animations } from 'react-animations'

import '../styles/Background.css'
import BackgroundCircles from './BackgroundCircles';


function Background() {

    const gridItems = document.querySelectorAll(".twinkling");

    // add a hover event listener to each grid item
    for (let i = 0; i < gridItems.length; i++) {
        const gridItem = gridItems[i];
        gridItem.addEventListener("mouseover", function () {
            gridItem.style.backgroundColor = "transparent linear-gradient(180deg, #B0C6D8 0%, #E7F1F8 20%, #E1EDF5 43%, #D5E1E6 69%, #ADD7E3 100%) 0% 0% no-repeat padding-box";

        });
        gridItem.addEventListener("mouseout", function () {
            gridItem.style.backgroundColor = "#f0f0f0";
        });
    }
    return (

        <section className='grid-container'>
            {/* <BackgroundCircles /> */}
            <div>
                <div className="stars"></div>
                <div className="twinkle"></div>
                <div className="twinkling"></div>
                {/* <BackgroundCircles className='my-component' /> */}
                {/* <div>
                <BackgroundCircles />
            </div> */}
                {/* <div className="twinkling"><BackgroundCircles /></div> */}
                {/* <BackgroundCircles  /> */}
                <div className="clouds"></div>
            </div>
            {/* <div className='title'>
                <h1>Kayla's Portfolio</h1>
            </div> */}
        </section>

    )
}

export default Background