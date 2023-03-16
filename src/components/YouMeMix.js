import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import wheelTopper from '../assets/wheel-topper.png'
// import wheelCopy from '../assets/wheel-2-copy.png'
// import BlockButton from './BlockButton';
// import wheelCopy2 from '../assets/wheel-topper-copy-2.png'
// import topper from '../assets/etiquette-topper.png'
// import homepage from '../assets/etiquette-homepage-fullscreen.png'
// import BlockButtonEtiquette from './BlockButtonEtiquette';
// // import etiquettLogo from '../assets/logo500.png'
// import smiseLogo from '../assets/smise-logo.png';

// import shangooLogo from '../assets/shangoo-logo.png'
// import BlockButtonShangoo from './BlockButtonShangoo';
// import appleStoreLogo from '../assets/apple-store-logo.png'
// import shangooDriverLogo from '../assets/shangoo-driver-logo.png'
// import shangooPharmacyLogo from '../assets/shangoo-pharmacy-logo.png'
// import shangooPatientLogo from '../assets/shangoo-patient-logo.png'
// import BlockButtonWako from './BlockButtonWako';
// import BlockButtonJotter from './BlockButtonJotter'
// import BlockButtonMyMetro from './BlockButtonMyMetro'
// import blogForTechsLogo from '../assets/blog-for-techs-logo.png'
// import wakoLogo from '../assets/wako-logo.png'

// import jotterLogo from '../assets/jotter-logo.png';
// import myMetroLogo from '../assets/mymetro-icon.png';

import wheelTopperExtraHole from '../assets/wheel-topper-extra-whole.png';

// import BlockButtonWorkYourSchedule from './BlockButtonWorkYourSchedule'
// import BlockButtonPasswordGenerator from './BlockButtonPasswordGenerator'
// import workYourScheduleIcon from '../assets/work-your-schedule-icon.png';
// import passwordGeneratorIcon from '../assets/password-generator-icon.png';
// import smiseOpening from '../assets/smise-opening.png'

import BlockButtonYouMeMix from './BlockButtonYouMeMix';
import ymmWelcome from '../assets/YMM-screen-welcome.png';
import ymmLogo from '../assets/ymm-logo.png';



function YouMeMix() {
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
                        <p style={{ marginTop: `${item.marginTop}`, color: `${item.color}`, fontSize: `${item.fontSize}`, textShadow: '1px 1px #E2666A', lineHeight: '0px' }}>{item.title}</p>
                        <p style={{ marginTop: `${item.marginTopSlogan}`, color: `${item.colorSlogan}`, fontSize: `${item.fontSizeSlogan}`, textShadow: '.5px .5px #E2666A', lineHeight: '20px', width: '50%', textAlign: 'center', marginLeft: '25%' }}>{item.slogan}</p>

                        <img src={item.img} style={{ top: `${item.topImg}`, left: `${item.leftImg}`, width: `${item.widthImg}`, height: `${item.heightImg}`, borderRadius: `${item.borderRadius}`, opacity: 1, position: 'absolute' }}></img>

                    </div>
                    <BlockButtonYouMeMix />
                    <p style={{ top: '930px', left: '24.1%', fontSize: '16px', width: '100px', textAlign: 'center', position: 'absolute', zIndex: 5, color: '#CFAC64' }}>{item.description}</p>
                    <p style={{ top: '695px', left: '31.3%', fontSize: '13px', width: '180px', textAlign: 'center', position: 'absolute', zIndex: 4, color: '#CFAC64', lineHeight: '15px' }}>{item.descriptionTwo}</p>
                    <a href={item.link} target='_blank'><img src={ymmLogo} style={{ top: '722px', left: '49.45%', width: '75px', position: 'absolute', zIndex: 6, boxShadow: '6px 9px 12px #00000029', borderRadius: '50px', borderColor: '#EFEEF5' }} id='wiggle'></img></a>

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
        id: 6,
        img: [`${ymmWelcome}`],
        // img: [`${smiseScreens}`, `${smiseScreensFour}`, `${smiseScreenTools}`, `${smiseScreenImplant}`, `${smiseScreenImaging}`],
        link: 'https://apps.apple.com/ng/developer/shangoo-inc/id1489129176',
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
        title: 'YouMeMix',
        class: 'bubbleTopGoldPurple',
        color: '#CFAC64',
        colorSlogan: '#CFAC64',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.91,
        fontSize: '20px',
        fontSizeSlogan: '10px',
        borderRadius: '300px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #010128 0%, #692659 46%, #E3B863 100%) 0% 0% no-repeat padding-box',
        marginTop: '40%',
        marginTopSlogan: '30px',
        zIndex: 4,
        description: `Acess. Fun. Deals. Easy.`,
        descriptionTwo: `As a pseudo product manager, working with a designer and a team of engineers on the development, planning, and integration of a mobile app that enhances daytime & nightlife experiences by allowing users to stay up-to-date with latest and nearby events, purchase and split table payments, skip long lines, and ensure friends’ safety`,
        slogan: 'Expected Launch: May 2023'
    },
]
export default YouMeMix