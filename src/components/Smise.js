import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import wheelTopper from '../assets/wheel-topper.png'
// import wheelCopy from '../assets/wheel-2-copy.png'
// import BlockButton from './BlockButton';
// import wheelCopy2 from '../assets/wheel-topper-copy-2.png'
// import topper from '../assets/etiquette-topper.png'
// import homepage from '../assets/etiquette-homepage-fullscreen.png'
// import BlockButtonEtiquette from './BlockButtonEtiquette';
// import etiquettLogo from '../assets/logo500.png'
import smiseLogo from '../assets/smise-logo.png';
import BlockButtonSmise from './BlockButtonSmise';
// import smiseOpening from '../assets/smise-opening.png'

import wheelTopperExtraHole from '../assets/wheel-topper-extra-whole.png';


function Smise() {
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
                        <p style={{ marginTop: `${item.marginTop}`, color: `${item.color}`, fontSize: `${item.fontSize}`, textShadow: '1px 1px #F3D87E', lineHeight: '0px' }}>{item.title}</p>
                        <p style={{ marginTop: `${item.marginTopSlogan}`, color: `${item.color}`, fontSize: `${item.fontSizeSlogan}`, textShadow: '1px 1px #F3D87E', lineHeight: '20px', width: '50%', textAlign: 'center', marginLeft: '25%' }}>{item.slogan}</p>

                        <img src={item.img} style={{ top: `${item.topImg}`, left: `${item.leftImg}`, width: `${item.widthImg}`, height: `${item.heightImg}`, borderRadius: `${item.borderRadius}`, opacity: 1, position: 'absolute' }}></img>

                    </div>
                    <BlockButtonSmise />
                    <p style={{ top: '935px', left: '23.5%', fontSize: '18px', width: '120px', textAlign: 'center', position: 'absolute', zIndex: 5 }}>{item.description}</p>
                    <p style={{ top: '718px', left: '31.3%', fontSize: '14px', width: '180px', textAlign: 'center', position: 'absolute', zIndex: 5 }}>{item.descriptionTwo}</p>
                    {/* <a href={item.link} target='_blank'><img src={smiseLogo} style={{ top: '718px', left: '49.4%', width: '70px', position: 'absolute', zIndex: 4, boxShadow: '0px 3px 6px #00000029', borderRadius: '50px', borderColor: '#EFEEF5' }} id='wiggle'></img></a> */}
                    <Link to='/smise-artboards'><img src={smiseLogo} style={{ top: '718px', left: '49.4%', width: '70px', position: 'absolute', zIndex: 4, boxShadow: '0px 3px 6px #00000029', borderRadius: '50px', borderColor: '#EFEEF5' }} id='wiggle'></img></Link>
                </div>
                // fix etiquette logo
            ))}
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
        id: 4,
        img: ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2VmMTBmYWFkMjhhYWIwZDUxZGJjZDE5Y2RiNjQ1NWMzMzQzZWFiZCZjdD1n/GNMkGHRvKFRaV1hHdB/giphy.gif'],
        // img: [`${smiseScreens}`, `${smiseScreensFour}`, `${smiseScreenTools}`, `${smiseScreenImplant}`, `${smiseScreenImaging}`],
        link: 'https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022',
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
        title: 'SMISE',
        class: 'bubbleTopOrange',
        color: '#E6692B',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.91,
        fontSize: '20px',
        fontSizeSlogan: '12px',
        borderRadius: '300px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #E4632A 0%, #EBA73B 23%, #EFBF41 34%, #F89468 46%, #EBA63A 58%, #FDE37B 73%, #F3D76A 86%, #F5DA5F 100%) 0% 0% no-repeat padding-box',
        marginTop: '40%',
        marginTopSlogan: '30px',
        zIndex: 4,
        description: 'Keep Track of Your Teeth',
        descriptionTwo: `An visual prototype I created in Adobe XD of a dental app aimed to personalize oral care and engage users through statistically relevant feedback and animated design`,
        slogan: 'Keep Track of Your Teeth'
    },
]
export default Smise