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




function SmiseArtboards() {
    // TODO: Add a style attribute to header and the h1 element

    return (

        <div>
            <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: '#C74724', marginTop: '300px', boxShadow: '0px 3px 6px #00000029' }}>
                <div style={{ marginLeft: '350px', borderRadius: '600px', background: 'white', width: '600px', height: '600px', boxShadow: '0px 3px 6px #00000029' }}>
                    {/* <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: 'white', marginTop: '100px', zIndex: -1 }}></div> */}
                    <img width="600" height="600" src={holeWheel}></img>
                    <img width="800" height="800" src={holeWheel} style={{ zIndex: 0, position: 'absolute', top: '640px' }} className='rotate'></img>
                    <a style={{ position: 'absolute', top: '735px', left: '48.2%', zIndex: 3, color: 'black', textAlign: 'center' }} href='https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'>
                        <p id='wiggle' style={{ fontSize: '14px' }}>Artboard 1</p>
                        {/* <LinkIcon id='wiggle' style={{ boxShadow: '0px 3px 6px #00000029' }} /> */}
                        <img id='wiggle' src={behanceIcon} style={{ width: '50px', boxShadow: '0px 3px 6px #00000029', borderRadius: '15px' }}></img>
                    </a>
                </div>

                <div style={{ width: '600px', height: '600px', background: '#FE542B 0% 0% no-repeat padding-box', borderRadius: '600px', position: 'absolute', top: '300px', overflowY: 'scroll' }}>
                    <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/embed/378eca68-2931-4a7e-9b5c-b5cef196fdc3-62dd/" frameborder="0" allowfullscreen></iframe>
                </div>
                <div style={{ textAlign: 'center' }}>Predictive Analaytics</div>
            </div>
            <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: '#C74724', marginTop: '0px', marginLeft: '700px', boxShadow: '0px 3px 6px #00000029' }}>
                <div style={{ marginLeft: '-300px', borderRadius: '600px', background: 'white', width: '600px', height: '600px', boxShadow: '0px 3px 6px #00000029' }}>
                    {/* <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: 'white', marginTop: '100px', zIndex: -1 }}></div> */}
                    <img width="600" height="600" src={holeWheel}></img>
                    <img width="800" height="800" src={holeWheel} style={{ zIndex: 0, position: 'absolute', top: '1000px' }} className='rotate'></img>
                    <a style={{ position: 'absolute', top: '1075px', left: '47%', zIndex: 3, color: 'black', textAlign: 'center' }} href='https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'>
                        <p id='wiggle' style={{ fontSize: '14px' }}>Artboard 2</p>
                        {/* <LinkIcon id='wiggle' style={{ boxShadow: '0px 3px 6px #00000029' }} /> */}
                        <img id='wiggle' src={behanceIcon} style={{ width: '50px', boxShadow: '0px 3px 6px #00000029', borderRadius: '15px' }}></img>
                    </a>
                </div>

                <div style={{ width: '600px', height: '600px', background: '#FE542B 0% 0% no-repeat padding-box', borderRadius: '600px', position: 'absolute', top: '900px', overflowY: 'scroll' }}>
                    {/* <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/view/f20a2f99-9f6f-476f-b675-0d0ceac20491-a759/" frameborder="0" allowfullscreen></iframe> */}
                    <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/embed/f20a2f99-9f6f-476f-b675-0d0ceac20491-a759/" frameborder="0" allowfullscreen></iframe>
                </div>
                <div style={{ textAlign: 'center' }}>Interactivity & Specificity</div>
            </div>
            <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: '#C74724', marginTop: '0px', boxShadow: '0px 3px 6px #00000029' }}>
                <div style={{ marginLeft: '350px', borderRadius: '600px', background: 'white', width: '600px', height: '600px', boxShadow: '0px 3px 6px #00000029' }}>
                    {/* <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: 'white', marginTop: '100px', zIndex: -1 }}></div> */}
                    <img width="600" height="600" src={holeWheel}></img>
                    <img width="800" height="800" src={holeWheel} style={{ zIndex: 0, position: 'absolute', top: '1840px' }} className='rotate'></img>
                    <a style={{ position: 'absolute', top: '1920px', left: '48.2%', zIndex: 3, color: 'black', textAlign: 'center' }} href='https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'>
                        <p id='wiggle' style={{ fontSize: '14px' }}>Artboard 3</p>
                        {/* <LinkIcon id='wiggle' style={{ boxShadow: '0px 3px 6px #00000029' }} /> */}
                        <img id='wiggle' src={behanceIcon} style={{ width: '50px', boxShadow: '0px 3px 6px #00000029', borderRadius: '15px' }}></img>
                    </a>
                </div>
                <div style={{ width: '600px', height: '600px', background: '#FE542B 0% 0% no-repeat padding-box', borderRadius: '600px', position: 'absolute', top: '1500px', overflowY: 'scroll' }}>
                    {/* <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/embed/378eca68-2931-4a7e-9b5c-b5cef196fdc3-62dd/" frameborder="0" allowfullscreen></iframe> */}
                    <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/embed/4280386e-2113-434b-a345-1d02bf540e11-17d3/" frameborder="0" allowfullscreen></iframe>
                </div>
                <div style={{ textAlign: 'center' }}>Integrating Clinical Data & Patient Input</div>
            </div>
            <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: '#C74724', marginTop: '0px', marginLeft: '700px', boxShadow: '0px 3px 6px #00000029' }}>
                <div style={{ marginLeft: '-300px', borderRadius: '600px', background: 'white', width: '600px', height: '600px', boxShadow: '0px 3px 6px #00000029' }}>
                    {/* <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: 'white', marginTop: '100px', zIndex: -1 }}></div> */}
                    <img width="600" height="600" src={holeWheel}></img>
                    <img width="800" height="800" src={holeWheel} style={{ zIndex: 0, position: 'absolute', top: '2200px' }} className='rotate'></img>
                    <a style={{ position: 'absolute', top: '2260px', left: '47%', zIndex: 3, color: 'black', textAlign: 'center' }} href='https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'>
                        <p id='wiggle' style={{ fontSize: '14px' }}>Artboard 4</p>
                        {/* <LinkIcon id='wiggle' style={{ boxShadow: '0px 3px 6px #00000029' }} /> */}
                        <img id='wiggle' src={behanceIcon} style={{ width: '50px', boxShadow: '0px 3px 6px #00000029', borderRadius: '15px' }}></img>
                    </a>
                </div>

                <div style={{ width: '600px', height: '600px', background: '#FE542B 0% 0% no-repeat padding-box', borderRadius: '600px', position: 'absolute', top: '2100px', overflowY: 'scroll' }}>
                    {/* <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/view/f20a2f99-9f6f-476f-b675-0d0ceac20491-a759/" frameborder="0" allowfullscreen></iframe> */}
                    {/* <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/embed/f20a2f99-9f6f-476f-b675-0d0ceac20491-a759/" frameborder="0" allowfullscreen></iframe> */}
                    <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/embed/cc8578e6-74df-4a19-baeb-ba71583723c4-99d6/" frameborder="0" allowfullscreen></iframe>
                </div>
                <div style={{ textAlign: 'center' }}>Dental Monitoring & Early Diagnosis</div>
            </div>
            <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: '#C74724', marginTop: '0px', boxShadow: '0px 3px 6px #00000029' }}>
                <div style={{ marginLeft: '350px', borderRadius: '600px', background: 'white', width: '600px', height: '600px', boxShadow: '0px 3px 6px #00000029' }}>
                    {/* <div style={{ width: '600px', height: '600px', borderRadius: '600px', background: 'white', marginTop: '100px', zIndex: -1 }}></div> */}
                    <img width="600" height="600" src={holeWheel}></img>
                    <img width="800" height="800" src={holeWheel} style={{ zIndex: 0, position: 'absolute', top: '3050px' }} className='rotate'></img>
                    <a style={{ position: 'absolute', top: '3120px', left: '48.2%', zIndex: 3, color: 'black', textAlign: 'center' }} href='https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'>
                        <p id='wiggle' style={{ fontSize: '14px' }}>Artboard 3</p>
                        {/* <LinkIcon id='wiggle' style={{ boxShadow: '0px 3px 6px #00000029' }} /> */}
                        <img id='wiggle' src={behanceIcon} style={{ width: '50px', boxShadow: '0px 3px 6px #00000029', borderRadius: '15px' }}></img>
                    </a>
                </div>
                <div style={{ width: '600px', height: '600px', background: '#FE542B 0% 0% no-repeat padding-box', borderRadius: '600px', position: 'absolute', top: '2700px', overflowY: 'scroll' }}>
                    {/* <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/embed/378eca68-2931-4a7e-9b5c-b5cef196fdc3-62dd/" frameborder="0" allowfullscreen></iframe> */}
                    {/* <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/embed/4280386e-2113-434b-a345-1d02bf540e11-17d3/" frameborder="0" allowfullscreen></iframe> */}
                    <iframe width="600" height="600" style={{ borderRadius: '1000px' }} src="https://xd.adobe.com/embed/08cb1ccf-ac5f-4907-9026-d0167c94dd19-5d98/" frameborder="0" allowfullscreen></iframe>
                </div>
                <div style={{ textAlign: 'center' }}>Problems with Electronic Health Systems</div>
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
