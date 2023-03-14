import React, { useState } from 'react'
import '../styles/ContactStyle.css'
import bubble from '../assets/bubble-img.png'
import boxIcon from '../assets/box-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-icon.png';
import emailIcon from '../assets/email-icon.png';
import behanceIcon from '../assets/behance-icon.png';

const Contact = () => {

    // const circles = document.querySelectorAll('.inner-circle');

    // circles.forEach((circle) => {
    //     circle.addEventListener('click', () => {
    //         circle.classList.toggle('expanded');
    //     });
    // });

    // const subCircles = document.querySelectorAll('.sub-circle');

    // subCircles.forEach(subCircle => {
    //     subCircle.addEventListener('click', () => {
    //         subCircle.classList.add('active');
    //     });
    // });
    const [activeCircle, setActiveCircle] = useState(null);

    const handleClick = (e) => {
        setActiveCircle(e.target.id);
    };

    const handleReset = () => {
        setActiveCircle(null);
    };


    return (
        <div>
            <div>Contact Me</div>
            <div class="circle-animation">
                <div class="box"></div>
            </div>
            <div style={{ left: '30%', top: '300px', position: 'absolute' }}>
                <div id="main-circle">
                    <div
                        class={`sub-circle ${activeCircle === "sub-circle1" ? "active" : ""}`}
                        id="sub-circle1"
                        onClick={handleClick}
                    >
                        <a href='https://www.linkedin.com/in/kaylacasale/' target={`_blank`}><div className='b-icon'><img src={linkedinIcon}></img></div></a>
                        <div className='shadow'></div>
                    </div>

                    <div
                        class={`sub-circle ${activeCircle === "sub-circle2" ? "active" : ""}`}
                        id="sub-circle2"
                        onClick={handleClick}
                    >
                        <a href='https://github.com/kaylacasale' target={`_blank`}><div className='b-icon'><img src={githubIcon}></img></div></a>
                        <div className='shadow'></div>
                    </div>
                    <div
                        class={`sub-circle ${activeCircle === "sub-circle3" ? "active" : ""}`}
                        id="sub-circle3"
                        onClick={handleClick}
                    >
                        <a href='mailto:kayla.casale@gmail.com' target={`_blank`}><div className='b-icon'><img src={emailIcon} style={{ backgroundColor: 'red' }}></img></div></a>
                        <div className='shadow'></div>
                    </div>
                    <div
                        class={`sub-circle ${activeCircle === "sub-circle4" ? "active" : ""}`}
                        id="sub-circle4"
                        onClick={handleClick}
                    >
                        <a href='https://www.behance.net/kaylacasale' target={`_blank`}><div className='b-icon'><img src={behanceIcon} ></img></div></a>
                        <div className='shadow'></div>
                    </div>
                    <div
                        class={`sub-circle ${activeCircle === "sub-circle5" ? "active" : ""}`}
                        id="sub-circle5"
                        onClick={handleClick}
                    >
                        <div className='shadow'></div>
                    </div>
                </div>
                {/* <button onClick={handleReset}>Reset</button> */}
            </div>
        </div>
    )
}

export default Contact