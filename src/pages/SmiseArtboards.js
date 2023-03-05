// import React, { useEffect, useState } from 'react';

import React from 'react';
import { Link } from 'react-router-dom';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/SmiseArtboardsStyle.css';
import "fontsource-cascadia-code"
import myLogoTwo from '../assets/my-logo-2.png'
import computerScreen from '../assets/computer-screen.png'
// TODO: Create a styles object called "styles"
import holeWheel from '../assets/wheel-topper-copy-2.png'
import LinkIcon from '@mui/icons-material/Link'




function SmiseArtboards() {
    // TODO: Add a style attribute to header and the h1 element

    return (

        <div>
            <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: '#C74724', marginTop: '300px' }}>
                <div style={{ marginLeft: '350px', borderRadius: '600px', background: 'white', width: '600px', height: '600px' }}>
                    {/* <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: 'white', marginTop: '100px', zIndex: -1 }}></div> */}
                    <img width="600" height="600" src={holeWheel}></img>
                    <a style={{ position: 'absolute', top: '735px', left: '47.5%', zIndex: 3, color: '#FE542B', textAlign: 'center' }} href='https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'>
                        <p id='wiggle'>Artboard 1</p>
                        <LinkIcon id='wiggle' />
                    </a>
                </div>

                <div style={{ width: '600px', height: '600px', background: '#FE542B 0% 0% no-repeat padding-box', borderRadius: '600px', position: 'absolute', top: '300px', overflowY: 'scroll' }}>
                    <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/embed/378eca68-2931-4a7e-9b5c-b5cef196fdc3-62dd/" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: '#C74724', marginTop: '0px', marginLeft: '700px' }}>
                <div style={{ marginLeft: '-300px', borderRadius: '600px', background: 'white', width: '600px', height: '600px' }}>
                    {/* <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: 'white', marginTop: '100px', zIndex: -1 }}></div> */}
                    <img width="600" height="600" src={holeWheel}></img>
                    <a style={{ position: 'absolute', top: '735px', left: '47.5%', zIndex: 3, color: '#FE542B', textAlign: 'center' }} href='https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'>
                        <p id='wiggle'>Artboard 1</p>
                        <LinkIcon id='wiggle' />
                    </a>
                </div>

                <div style={{ width: '600px', height: '600px', background: '#FE542B 0% 0% no-repeat padding-box', borderRadius: '600px', position: 'absolute', top: '900px', overflowY: 'scroll' }}>
                    <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/embed/378eca68-2931-4a7e-9b5c-b5cef196fdc3-62dd/" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        // <div style={{ width: '100%' }}>
        //     {/* <img src={computerScreen} style={{ width: '700px', zIndex: '-1' }}></img> */}

        //     <div className='computer'>
        //         <iframe id='zoom' src="https://xd.adobe.com/embed/378eca68-2931-4a7e-9b5c-b5cef196fdc3-62dd/" frameborder="0" allowfullscreen="true" className='artboard'></iframe>
        //     </div>
        // </div>
    );
}

export default SmiseArtboards;
