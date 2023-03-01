import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import colorfulWheel from '../assets/colorful-wheel.png'
import '../styles/AboutMeStyle.css'
import wheelTopper from '../assets/wheel-topper.png'
import wheelCopy from '../assets/wheel-2-copy.png'

// document.getElementById('#copy').fadeIn('fast')


function AboutMe() {

    // const [isFirstTopperVisible, setFirstTopperVisible] = React.useState(true)

    // useFirstEffect(() => {
    //     setTimeout(function () {
    //         setTopperVisible(false)
    //     }, 5000)
    // })

    const [isTopperVisible, setTopperVisible] = React.useState(false)

    useEffect(() => {
        setTimeout(function () {
            setTopperVisible(true)
        }, 5000)
    })
    // const setVisibility = () => {
    //     setTimeout(() => {
    //         setTopperVisible(true);
    //     }, 5000)
    // }

    return (
        <div>
            <img src={colorfulWheel} style={{ width: '800px' }} id='wheel' className='rotator'></img>
            {isTopperVisible ? (
                <img></img>
            ) : (
                <img src={wheelTopper} style={{ width: '800px' }} id='wheel-topper' className='stayLeft' onLoad={useEffect}></img>


            )}
            {isTopperVisible ? (

                <img src={wheelCopy} style={{ width: '800px' }} id='copy' className='wheel-copied' onLoad={useEffect}>
                </img>
            ) : (
                <img></img>
            )}
        </div>
    )
}


export default AboutMe