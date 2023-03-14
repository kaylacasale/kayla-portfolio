
import React from 'react';
// import { animations } from 'react-animations'

import '../styles/Background.css'


function Background() {

    const gridItems = document.querySelectorAll(".twinkling");

    // add a hover event listener to each grid item
    for (let i = 0; i < gridItems.length; i++) {
        const gridItem = gridItems[i];
        gridItem.addEventListener("mouseover", function () {
            gridItem.style.backgroundColor = "red";
        });
        gridItem.addEventListener("mouseout", function () {
            gridItem.style.backgroundColor = "#f0f0f0";
        });
    }
    return (

        <section >
            <div className="stars"></div>
            <div className="twinkle"></div>
            <div className="twinkling"></div>



            <div className="clouds"></div>
            {/* <div className='title'>
                <h1>Kayla's Portfolio</h1>
            </div> */}
        </section>

    )
}

export default Background