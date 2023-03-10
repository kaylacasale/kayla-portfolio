
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import colorfulWheel from '../assets/colorful-wheel.png'
import '../styles/AboutMeStyle.css'
import wheelTopper from '../assets/wheel-topper.png'
import wheelCopy from '../assets/wheel-2-copy.png'
import wheelLightColors from '../assets/light-colors.png';
import SphereTwo from './SphereTwo';
import myLogo from '../assets/my-logo-light.png';
import myAtomLogo from '../assets/my-atom-icon.png';
import CirclesInCircles from './CirclesInCircle';

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
    // const [selectedId, setSelectedId] = React.useState(0);

    // const renderComponent = () => {
    //     if (selectedId === 1) {
    //         return <div>Hello!</div>
    //     }
    // }




    return (
        <div>
            <div>
                <div id='canvas'>
                    <img src={wheelLightColors} style={{ width: '800px' }} id='wheel' className='rotator'></img>
                    {isTopperVisible ? (
                        <img></img>
                    ) : (
                        <img src={wheelTopper} style={{ width: '800px' }} id='wheel-topper' className='stayLeft' onLoad={useEffect}></img>


                    )}
                    {isTopperVisible ? (

                        <img src={wheelCopy} style={{ width: '800px' }} id='my-element' className='wheel-copied' onLoad={useEffect}>

                        </img>

                    ) : (
                        <img></img>
                    )}
                </div>

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
                <div id='my-element-spinner'>
                    <div id='circle-about'><img src={myAtomLogo} style={{ maxWidth: '60%', maxHeight: '60%', marginTop: '20%' }}></img></div>
                    <SphereTwo id='circle-about' top='50%' left='26.5%' color='#353535' text='' hoverColor='rgba(255, 255, 255, 0.1)' srcIcon={myLogo} textColor='#6C7EB7' notHoverColor='transparent linear-gradient(180deg, #C6F4FD 0%, #DDFEEA 15%, #FFF7FC 29%, #FFE0FD 47%, #F4E6FF 60%, #DFD5FC 75%, #F0D5FF 90%, #F9E8FE 100%) 0% 0% no-repeat padding-box' hoverOpacity='0' notHoverOpacity='1' width='150px' height='150px' />
                </div>
            </div>
            <div>
                <CirclesInCircles />
            </div>


            {/* <div id='canvas'>
                <div id='circle-about'></div>
            </div> */}
        </div >

    );
}



export default AboutMe