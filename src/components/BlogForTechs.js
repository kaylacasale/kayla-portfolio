import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

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
import BlockButtonBlogForTechs from './BlockButtonBlogForTechs';

import blogForTechsLogo from '../assets/blog-for-techs-logo.png'
import wheelTopperExtraHole from '../assets/wheel-topper-extra-whole.png';
// import smiseOpening from '../assets/smise-opening.png'



function BlogForTechs() {
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
                        <p style={{ marginTop: `${item.marginTop}`, color: `${item.color}`, fontSize: `${item.fontSize}`, textShadow: '1px 1px whitesmoke', lineHeight: '0px' }}>{item.title}</p>
                        <p style={{ marginTop: `${item.marginTopSlogan}`, color: `${item.color}`, fontSize: `${item.fontSizeSlogan}`, textShadow: '1px 1px whitesmoke', lineHeight: '20px', width: '50%', textAlign: 'center', marginLeft: '25%' }}>{item.slogan}</p>

                        <img src={item.img} style={{ top: `${item.topImg}`, left: `${item.leftImg}`, width: `${item.widthImg}`, height: `${item.heightImg}`, borderRadius: `${item.borderRadius}`, opacity: 1, position: 'absolute' }}></img>

                    </div>
                    <BlockButtonBlogForTechs />
                    <p style={{ top: '925px', left: '23.5%', fontSize: '16px', width: '120px', textAlign: 'center', position: 'absolute', zIndex: 5, color: 'white' }}>{item.description}</p>
                    <p style={{ top: '705px', left: '31.3%', fontSize: '14px', width: '180px', textAlign: 'center', position: 'absolute', zIndex: 5, color: 'white' }}>{item.descriptionTwo}</p>
                    <a href={item.link} target='_blank'><img src={blogForTechsLogo} style={{ top: '720px', left: '49.35%', width: '75px', position: 'absolute', zIndex: 6, boxShadow: '0px 3px 6px #00000029', borderRadius: '50px', borderColor: '#EFEEF5' }} id='wiggle'></img></a>

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
        id: 2,
        img: ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNmNTQ4YzI1NjgxZGQ0OTdlMWNhNTdiMWQyMGM4MmQ1ZDc3ODlhMiZjdD1n/5DK2cpXXE8ILNqX9pc/giphy.gif'],
        // img: [`${smiseScreens}`, `${smiseScreensFour}`, `${smiseScreenTools}`, `${smiseScreenImplant}`, `${smiseScreenImaging}`],
        link: 'https://guarded-headland-91004.herokuapp.com/',
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
        title: 'Blog for Techs',
        class: 'bubbleTop',
        color: '#65C1FF',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.91,
        fontSize: '20px',
        fontSizeSlogan: '12px',
        borderRadius: '300px',
        backgroundBubbleOne: 'transparent conic-gradient(from 90deg at 50% 50%, #5DB7EB 0.00%, #B3B8EB 7.77%, #7FAEDC 19.25%, #B3AFFA 26.87%, #FECAFD 37.45%, #509ACC 44.42%, #4DB2E1 50.83%, #B0E7F2 59.83%, #3593C0 67.41%, #6B90BA 74.06%, #B494C1 81.83%, #3BC8EA 90.78%, #4BD3F3 100.00%) 0% 0% no-repeat padding-box',
        marginTop: '40%',
        marginTopSlogan: '30px',
        zIndex: 4,
        description: 'Model-View-Controller: Tech Blog',
        descriptionTwo: `A full-stack, CMS-style blog site where developers can publish, update, or delete their blog posts, comment on other developers' posts, and store user information after creating an account`,
        slogan: 'Meds to You'
    },
]
export default BlogForTechs