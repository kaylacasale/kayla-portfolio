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
import behanceIcon from '../assets/behance-icon.jpg'
import { Rotate90DegreesCcw } from '@mui/icons-material';
import wheelTopperOrange from '../assets/wheel-topper-orange.png'
import artboardOne from '../assets/smise-artboard-1.png'


import bubbleSmall from '../assets/bubble-small.png'
import bubbleTopper from '../assets/bubble-topper.png'
import artboardTwo from '../assets/smise-artboard-2.png'

function SmiseArtboards() {
    // TODO: Add a style attribute to header and the h1 element

    return (
        // <div style={{ zIndex: 5 }}>
        //     <div style={{ width: '100px', height: '100px', alignItems: 'center', margin: '20px' }}>
        //         <img src={bubbleSmall}></img>
        //     </div>
        // </div>

        <div>
            <div style={{ width: '50%', display: 'flex', float: 'left', marginTop: '300px' }}>
                <div style={{ width: '300px', height: '300px', borderRadius: '600px', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)', boxShadow: '0px 3px 6px #00000029' }}>
                    <div style={{ marginLeft: '200px', borderRadius: '600px', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)', width: '300px', height: '300px', boxShadow: '0px 3px 6px #00000029' }}>
                        {/* <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: 'white', marginTop: '100px', zIndex: -1 }}></div> */}
                        <img width="300" height="300" src={bubbleSmall}></img>
                        {/* <img width="300" height="300" src={bubbleTopper} style={{ zIndex: 0, position: 'relative', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)' }} className='rotate'></img> */}
                        <a style={{ position: 'absolute', zIndex: 3, color: 'black', textAlign: 'center', display: 'block' }} href='https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'>
                            <p id='wiggle' style={{ fontSize: '14px' }}>Artboard 1</p>
                            {/* <LinkIcon id='wiggle' style={{ boxShadow: '0px 3px 6px #00000029' }} /> */}
                            <img id='wiggle' src={behanceIcon} style={{ width: '50px', boxShadow: '0px 3px 6px #00000029', borderRadius: '15px' }}></img>
                            <div>
                                <div style={{ textAlign: 'center' }}>Predictive Analaytics</div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <div style={{ width: '280px', height: '280px', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)', borderRadius: '600px', position: 'absolute', top: '330px', marginLeft: '10px', overflowY: 'scroll' }}>
                            <img style={{ width: '100%', height: 'auto' }} src={artboardOne}></img>
                        </div>
                    </div>
                    {/* <div style={{ textAlign: 'center' }}>Predictive Analaytics</div> */}
                </div>
            </div>
            {/* <img width="300" height="300" src={bubbleTopper} style={{ zIndex: 0, position: 'relative', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)' }} className='rotate'></img> */}
            <div>
                <div style={{ width: '50%', display: 'flex', float: 'left', marginTop: '300px' }}>
                    <div style={{ width: '300px', height: '300px', borderRadius: '600px', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)', boxShadow: '0px 3px 6px #00000029' }}>
                        <div style={{ marginLeft: '200px', borderRadius: '600px', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)', width: '300px', height: '300px', boxShadow: '0px 3px 6px #00000029' }}>
                            {/* <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: 'white', marginTop: '100px', zIndex: -1 }}></div> */}
                            <img width="300" height="300" src={bubbleSmall}></img>
                            {/* <img width="300" height="300" src={bubbleTopper} style={{ zIndex: 0, position: 'relative', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)' }} className='rotate'></img> */}
                            <a style={{ position: 'absolute', zIndex: 3, color: 'black', textAlign: 'center', display: 'block' }} href='https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'>
                                <p id='wiggle' style={{ fontSize: '14px' }}>Artboard 2</p>
                                {/* <LinkIcon id='wiggle' style={{ boxShadow: '0px 3px 6px #00000029' }} /> */}
                                <img id='wiggle' src={behanceIcon} style={{ width: '50px', boxShadow: '0px 3px 6px #00000029', borderRadius: '15px' }}></img>
                                <div>
                                    <div style={{ textAlign: 'center' }}>Interactivity & Specificity</div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <div style={{ width: '280px', height: '280px', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)', borderRadius: '600px', position: 'absolute', top: '330px', marginLeft: '10px', overflowY: 'scroll' }}>
                                <img style={{ width: '100%', height: 'auto' }} src={artboardTwo}></img>
                            </div>
                        </div>
                        {/* <div style={{ textAlign: 'center' }}>Predictive Analaytics</div> */}
                    </div>
                </div>
            </div>
            <img width="300" height="300" src={bubbleTopper} style={{ zIndex: 0, position: 'relative', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)' }} className='rotate'></img>

        </div>


    );
}

export default SmiseArtboards;
