import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import wheelTopper from '../assets/wheel-topper.png'
import wheelCopy from '../assets/wheel-2-copy.png'
import BlockButton from './BlockButton';
import wheelCopy2 from '../assets/wheel-topper-copy-2.png'
import topper from '../assets/etiquette-topper.png'
import homepage from '../assets/etiquette-homepage-fullscreen.png'
import BlockButtonEtiquette from './BlockButtonEtiquette';
// import etiquettLogo from '../assets/logo500.png'
import smiseLogo from '../assets/smise-logo.png';

import shangooLogo from '../assets/shangoo-logo.png'
import BlockButtonShangoo from './BlockButtonShangoo';
import appleStoreLogo from '../assets/apple-store-logo.png'
import shangooDriverLogo from '../assets/shangoo-driver-logo.png'
import shangooPharmacyLogo from '../assets/shangoo-pharmacy-logo.png'
import shangooPatientLogo from '../assets/shangoo-patient-logo.png'
import BlockButtonWako from './BlockButtonWako';
import BlockButtonJotter from './BlockButtonJotter'
import BlockButtonMyMetro from './BlockButtonMyMetro'
import blogForTechsLogo from '../assets/blog-for-techs-logo.png'
import wakoLogo from '../assets/wako-logo.png'

import jotterLogo from '../assets/jotter-logo.png';
import myMetroLogo from '../assets/mymetro-icon.png';

import wheelTopperExtraHole from '../assets/wheel-topper-extra-whole.png';

import BlockButtonWorkYourSchedule from './BlockButtonWorkYourSchedule'
import BlockButtonCodingQuiz from './BlockButtonCodingQuiz'

import codingQuizLogo from '../assets/coding-quiz-logo.png'
// import smiseOpening from '../assets/smise-opening.png'



function CodingQuiz() {
    return (
        <div id='canvas'>


            {itemData.map((item) => (

                // <a href={item.link} target="_blank" >
                // <div key={item.id} onClick={() => setSelectedId(item.id)} >
                <div style={{ fontFamily: 'GravitasOne' }}>


                    {/* <BlockButton /> */}
                    <img src={wheelTopperExtraHole} id='ball-1' class='bubble' style={{ top: `${item.top1}`, left: `${item.left1}`, width: `${item.widthBubbleOne}`, height: `${item.heightBubbleOne}`, borderRadius: `${item.borderRadius}`, opacity: `${item.opacityBubbleOne}`, position: 'absolute', boxShadow: '0px 3px 6px #00000029', background: `${item.backgroundBubbleOne}` }} ></img>
                    <div id='ball-1' class='bubble' style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}`, borderRadius: `${item.borderRadius}`, position: 'absolute', opacity: 1 }}>


                        {/* <a href={item.link} target="_blank"><img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5OGM1MGIzNjc0MzAwYzliZDk2OWNmZTU4OWU0NDMyY2UyZjJjNSZjdD1n/emFmKxgQdkMOumVPhf/giphy.gif'></img></a> */}
                        {/* <img src={item.img} style={{ top: `${item.topImg}`, left: `${item.leftImg}`, width: `${item.widthImg}`, height: `${item.heightImg}`, borderRadius: `${item.borderRadius}`, opacity: .85 }}></img> */}
                    </div>
                    <div id='ball-1' class={item.class} style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}`, position: 'absolute', opacity: `${item.opacityBubbleTwo}`, textAlign: 'center', borderRadius: `${item.borderRadius}` }}>
                        <p style={{ marginTop: `${item.marginTop}`, color: `${item.color}`, fontSize: `${item.fontSize}`, textShadow: '1px 1px #610FC0', lineHeight: '0px' }}>{item.title}</p>
                        <p style={{ marginTop: `${item.marginTopSlogan}`, color: `${item.colorSlogan}`, fontSize: `${item.fontSizeSlogan}`, textShadow: '.5px .5px #AE3EA0', lineHeight: '20px', width: '50%', textAlign: 'center', marginLeft: '25%' }}>{item.slogan}</p>

                        <img src={item.img} style={{ top: `${item.topImg}`, left: `${item.leftImg}`, width: `${item.widthImg}`, height: `${item.heightImg}`, borderRadius: `${item.borderRadius}`, opacity: 1, position: 'absolute' }}></img>

                    </div>
                    <BlockButtonCodingQuiz />
                    <p style={{ top: '928px', left: '23.5%', fontSize: '16px', width: '120px', textAlign: 'center', position: 'absolute', zIndex: 5, color: 'white' }}>{item.description}</p>
                    <p style={{ top: '685px', left: '31.3%', fontSize: '14px', width: '180px', textAlign: 'center', position: 'absolute', zIndex: 4, color: 'white' }}>{item.descriptionTwo}</p>
                    <a href={item.link} target='_blank'><img src={codingQuizLogo} style={{ top: '722px', left: '49.45%', width: '75px', position: 'absolute', zIndex: 6, boxShadow: '6px 9px 12px #00000029', borderRadius: '50px', borderColor: '#EFEEF5' }} id='wiggle'></img></a>

                    {/* <Link to='/smise-artboards'><img src={smiseLogo} style={{ top: '718px', left: '49.4%', width: '70px', position: 'absolute', zIndex: 4, boxShadow: '0px 3px 6px #00000029', borderRadius: '50px', borderColor: '#EFEEF5' }} id='wiggle'></img></Link> */}
                </div>

                // fix etiquette logo
            ))}
            {/* <div style={{ position: 'absolute', top: '900px' }}>
                <a href='https://apps.apple.com/us/developer/shangoo-inc/id1489129176'><img src={appleStoreLogo} style={{ width: '20%' }} id='wiggle'></img></a>
            </div>
            <div style={{ position: 'absolute', top: '980px', width: '60%' }}>
                <a href='https://apps.apple.com/us/app/shangoo-driver/id1574731742'><img src={shangooDriverLogo} style={{ width: '10%' }} id='wiggle'></img></a>
                <a href='https://apps.apple.com/us/app/shangoo-pharmacy/id1489143836'><img src={shangooPharmacyLogo} style={{ width: '10%' }} id='wiggle'></img></a>
                <a href='https://apps.apple.com/ca/app/shangoorx/id1534816834'><img src={shangooPatientLogo} style={{ width: '10%' }} id='wiggle'></img></a>
            </div> */}
            {/* <div>
            {selectedId ? renderComponent() : 'No'}
        </div> */}

            {/* <img id='threeD' src={threeDBubble}></img> */}
            {/* <svg viewBox="-40 0 150 100" xmlns={threeDBubble} id='threeD'></svg> */}


        </div>
    )
}
const itemData = [
    {
        id: 11,
        img: [`https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWY1NzNlZmM0YTNmYTY3MGJmZWY4NmNkNDAzM2YxYjQ2NjhjMDk1MCZjdD1n/7LzJHaURMv7FzogBtW/giphy.gif`],
        // img: [`${smiseScreens}`, `${smiseScreensFour}`, `${smiseScreenTools}`, `${smiseScreenImplant}`, `${smiseScreenImaging}`],
        link: 'https://kaylacasale.github.io/code-quiz/',
        top1: '750px',
        left1: '30%',
        topImg: '166.7px',
        leftImg: '-26.5%',
        top: '748px',
        left: '60%',
        widthImg: '102px',
        heightImg: '102px',
        widthBubbleOne: '302px',
        heightBubbleOne: '302px',
        width: '310px',
        height: '310px',
        title: 'Coding Quiz',
        class: 'bubbleTopPinkPurple',
        color: 'white',
        colorSlogan: '#610FC0',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.96,
        fontSize: '20px',
        fontSizeSlogan: '12px',
        borderRadius: '300px',
        backgroundBubbleOne: 'transparent conic-gradient(from 90deg at 50% 50%, #D4A1CF 0.00%, #A67FDD 12.32%, #8E50CD 26.60%, #B34693 45.32%, #B94A9F 62.56%, #CD628C 75.86%, #D890B2 88.67%, #D291AD 100.00%) 0% 0% no-repeat padding-box',
        marginTop: '40%',
        marginTopSlogan: '30px',
        zIndex: 4,
        description: `Multiple Choice Questions for Coders`,
        descriptionTwo: `A timed, browser-based, multiple-choice coding assessment for programmers that dynamically renders points, time, and highest score based on responses and integrate Web-APIs to save input locally so you can pick up where you left off!`,
        slogan: 'Test Your Code'
    },
]
export default CodingQuiz