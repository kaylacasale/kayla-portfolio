import React from 'react'
import '../styles/ContactStyle.css'

const Contact = () => {

    // const circles = document.querySelectorAll('.inner-circle');

    // circles.forEach((circle) => {
    //     circle.addEventListener('click', () => {
    //         circle.classList.toggle('expanded');
    //     });
    // });

    const subCircles = document.querySelectorAll('.sub-circle');

    subCircles.forEach(subCircle => {
        subCircle.addEventListener('click', () => {
            subCircle.classList.add('active');
        });
    });

    return (
        <div>
            <div>Contact Me</div>
            <div class="circle-animation">
                <div class="box"></div>
            </div>
            <div>
                {/* <div class="circle-container">
                    <div class="outer-circle">
                        <div class="inner-circle red" id="circle1"></div>
                        <div class="inner-circle green" id="circle2"></div>
                        <div class="inner-circle blue" id="circle3"></div>
                        <div class="inner-circle yellow" id="circle4"></div>
                    </div>
                </div> */}
                <div id="main-circle">
                    <div class="sub-circle" id="sub-circle1"></div>
                    <div class="sub-circle" id="sub-circle2"></div>
                    <div class="sub-circle" id="sub-circle3"></div>
                    <div class="sub-circle" id="sub-circle4"></div>
                </div>

            </div>
        </div>
    )
}

export default Contact