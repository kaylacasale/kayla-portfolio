
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import colorfulWheel from '../assets/colorful-wheel.png'
import '../styles/AboutMeStyle.css'
import wheelTopper from '../assets/wheel-topper.png'
import wheelCopy from '../assets/wheel-topper-copy-2.png'
import wheelLightColors from '../assets/light-colors.png';
import SphereTwo from './SphereTwo';
import myLogo from '../assets/my-logo-light.png';
import myAtomLogo from '../assets/my-atom-icon.png';
import CirclesInCircles from './CirclesInCircle';
import Flipper from './Flipper';
import ReactCarousel from './ReactCarousel';
import MiniCarousel from './MiniCarousel';

import image0Draft from '../assets/self-photo.png'
import image0 from '../assets/self-photo-2.png'

import image1 from '../assets/front-teeth-2.png';
import image2 from '../assets/bottom-teeth-2.png'
import image3 from '../assets/franklin-album.png'
import image4 from '../assets/franklin-crystal-2.png'
import image5 from '../assets/covid-drop.png'
import image6 from '../assets/covid-balls.png'
import image7 from '../assets/izykaya-interior.png'
import image8 from '../assets/testing-tent.png'
import image9 from '../assets/ttc-lab.png'
import image10 from '../assets/bar-lis.png'
import image11 from '../assets/testing-process.png'

import wheelThreeColors from '../assets/wheel-three-colors.png';
import wheelTwoColors from '../assets/wheel-two-colors.png';
// document.getElementById('#copy').fadeIn('fast')

import bubbleTopper from '../assets/bubble-topper.png';

import bubblesInBubbles from '../assets/bubbles-in-bubbles-yellow.png';
import bubbleTopperYellow from '../assets/bubble-topper-yellow.png';
import bubbleYellow from '../assets/yellow-bubble-full.png';
import testTumble from '../assets/test-tumble.png'
import testTumbleTwo from '../assets/test-tumble-2.png'
import testTumbleThree from '../assets/test-tumble-3.png';
import testTumbleFour from '../assets/test-tumble-4.png';
import testTumbleFive from '../assets/test-tumble-5.png';
import tumbleBlack from '../assets/tumble-black.png'

import testTumbleOuter from '../assets/test-tumble-outer.png';
import Section from './Section';




function AboutMe() {


    const [timezones, setTimezones] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        }
    };
    const bets = 'bets'

    fetch(`https://api-basketball.p.rapidapi.com/${bets}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(data => {
            const americaTimezones = data.response.filter(tz => tz.startsWith('America/'));
            setTimezones(americaTimezones);
            console.log(data)
            return data
            function seeBets() {
                return (
                    <div>
                        data
                    </div>
                )
            }
        })
        .catch(err => {
            console.error(err)

        });

    // const bet = document.querySelector('bets')
    // bets.addEventListener(function onClick() {
    //     return (
    //         <div>
    //             {bet}
    //         </div>
    //     )
    // })

    const images = [image1, image2, image3, image4, image5, image6, image11, image7, image8, image9, image10]

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
    // const [selectedId, setSelectedId] = React.useState(0);

    // const renderComponent = () => {
    //     if (selectedId === 1) {
    //         return <div>Hello!</div>
    //     }
    // }


    const currentUrl = window.location.href;

    const [showElements, setShowElements] = useState(false);

    // Delay the showing of elements by 1 second
    useEffect(() => {


        const timer = setTimeout(() => {
            setShowElements(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            {/* <div>
                <button className='bets' >
                    bets

                </button>
            </div> */}
            {/* <div>
                <p>Current URL: {currentUrl}</p>
            </div> */}
            <div className='bubble-container' style={{ textShadow: '.2px .2px #2C2D2E' }}>
                <div id='canvas' style={{ width: '1000px', display: 'flex', justifyContent: 'center', maxWidth: '100%', margin: '0px' }}>
                    <img src={testTumble} style={{ maxWidth: '100%', justifyContent: 'center' }} id='rotate' className='rotator'></img>
                    <img src={testTumbleThree} style={{ maxWidth: '100%', justifyContent: 'center', alignContent: 'middle' }} id='rotate' className='rotator'></img>
                    <img src={testTumbleFour} style={{ maxWidth: '100%', justifyContent: 'center', alignContent: 'middle', opacity: '.4' }} id='rotate' className='rotator'></img>
                    {isTopperVisible ? (
                        <img></img>
                    ) : (

                        <img src={testTumble} style={{ maxWidth: '100%' }} id='wheel-topper' className='stayLeft' onLoad={useEffect}></img>



                    )}
                    {isTopperVisible ? (
                        <img src={testTumbleTwo} style={{ maxWidth: '100%', opacity: '.4' }} id='rotate' className='wheel-copied' onLoad={useEffect}>

                        </img>

                    ) : (
                        <img></img>
                    )}
                </div>
                {/* <div>
                    <Section>
                        <div >

                        </div>
                    </Section>
                </div> */}
                {/* <SphereTwo id='circle-about-two' top='30%' left='70%' color='#353535' text='' hoverColor='transparent linear-gradient(180deg, #C6F4FD 0%, #DDFEEA 15%, #FFF7FC 29%, #FFE0FD 47%, #F4E6FF 60%, #DFD5FC 75%, #F0D5FF 90%, #F9E8FE 100%) 0% 0% no-repeat padding-box' textColor='#6C7EB7' notHoverColor='transparent linear-gradient(180deg, #C6F4FD 0%, #DDFEEA 15%, #FFF7FC 29%, #FFE0FD 47%, #F4E6FF 60%, #DFD5FC 75%, #F0D5FF 90%, #F9E8FE 100%) 0% 0% no-repeat padding-box' hoverOpacity='1' notHoverOpacity='1' width='400px' height='400px' >
                            <div >
                                {itemData.map((item) => (
                                    <div key={item.id} onClick={() => setSelectedId(item.id)} >
                                        <div style={{ borderRadius: '100px', width: '100px', height: '100px', background: 'blue' }}><img src={myAtomLogo}></img>Hello</div>
                                    </div>
                                ))
                                }
                                {selectedId ? renderComponent() : !renderComponent()}


                            </div>
                        </SphereTwo> */}

                <div style={{ position: 'absolute', top: '820px', left: '44%' }} className={`my-element ${showElements ? 'fade-in active' : 'fade-in'}`} >
                    <div>
                        <img src={testTumbleFive} style={{ maxWidth: '120%', justifyContent: 'center', alignContent: 'middle', opacity: '1', marginLeft: '-151px', marginTop: '-20px' }} id='rotate' className='rotator'></img>
                        <img src={testTumble} style={{ maxWidth: '120%', justifyContent: 'center', alignContent: 'middle', opacity: '1', marginLeft: '-151px', marginTop: '-20px' }} id='rotate' className='rotator'></img>
                    </div>
                    <div style={{ zIndex: '6' }}>
                        {/* <ReactCarousel /> */}
                        <MiniCarousel images={images} />
                    </div>
                </div>
                <div className={`my-element ${showElements ? 'fade-in active' : 'fade-in'}`} id='wiggle' style={{ position: 'absolute', top: '600px', left: '30.3%', maxWidth: '200%', maxHeight: '200%' }}>

                    <div style={{ width: '100px', height: '100px', marginTop: '0px' }}>
                        <Flipper style={{ maxWidth: '100%', maxHeight: '100%' }}></Flipper>
                    </div>
                    {/* <div id='logo'>
                        <img src={testTumble}></img>
                    </div> */}
                    {/* <div id='circle-about'><img src={myAtomLogo} style={{ width: '150px', height: '150px', maxWidth: '100%', maxHeight: '100%' }}></img>
                    </div>
                    <div id='wiggle' color='#353535' text='' hoverColor='rgba(255, 255, 255, 0.1)' srcIcon={myLogo} textColor='#6C7EB7' notHoverColor='transparent linear-gradient(180deg, #C6F4FD 0%, #DDFEEA 15%, #FFF7FC 29%, #FFE0FD 47%, #F4E6FF 60%, #DFD5FC 75%, #F0D5FF 90%, #F9E8FE 100%) 0% 0% no-repeat padding-box' hoverOpacity='0' notHoverOpacity='1' width='150px' height='150px' style={{ maxWidth: '100%', maxHeight: '100%' }} ></div> */}


                </div>
            </div>
            <div className={`my-element ${showElements ? 'fade-in active' : 'fade-in'}`}>
                {/* <img src={testTumbleFive} style={{ maxWidth: '25%', marginLeft: '-90px', marginTop: '-100px', justifyContent: 'center', alignContent: 'middle', opacity: '.4' }} id='rotate' className='rotator'></img>
                <img src={testTumbleFive} style={{ maxWidth: '25%', marginTop: '-100px', marginLeft: '-90px', justifyContent: 'center', alignContent: 'middle', opacity: '.4' }} id='rotate' className='rotator'></img> */}
                <div style={{ width: '300px', height: '300px', position: 'absolute' }}>
                    <img src={testTumbleFive} style={{ maxWidth: '120%', justifyContent: 'center', alignContent: 'middle', opacity: '1', marginLeft: '-151px', marginTop: '-20px' }} id='rotate' className='rotator'></img>
                    <img src={testTumble} style={{ maxWidth: '120%', justifyContent: 'center', alignContent: 'middle', opacity: '1', marginLeft: '-151px', marginTop: '-20px' }} id='rotate' className='rotator'></img>
                </div>
                <div>
                    <CirclesInCircles />
                </div>
            </div>


            {/* <div id='canvas'>
                <div id='circle-about'></div>
            </div> */}
        </div >

    );
}



export default AboutMe