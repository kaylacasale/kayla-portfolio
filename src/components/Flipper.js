import { useState } from 'react';
import myAtomLogo from '../assets/my-atom-icon.png';

import testTumble from '../assets/test-tumble.png';
import testTumbleFive from '../assets/test-tumble-5.png';


import '../styles/FlipperStyle.css'

function Flipper() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`flip-container ${isFlipped ? 'flip' : ''}`}
            onClick={handleClick}

        >
            <div className="flipper" >
                {/* <div style={{ width: '20px', height: '20px', top: '200px' }}>
                    <img src={testTumbleFive} style={{ justifyContent: 'center', alignContent: 'middle', opacity: '.4', marginLeft: '-140px', marginTop: '-20px' }} id='rotate' className='rotator'></img>
                    <img src={testTumble} style={{ justifyContent: 'center', alignContent: 'middle', opacity: '.4', marginLeft: '-140px', marginTop: '-20px' }} id='rotate' className='rotator'></img>
                </div> */}
                {/* <div className="front" >
                    <div className='flip-div' style={{ background: 'radial-gradient(circle at 100px 100px, #ffffff, #22B3DE)', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '5px 10px 10px rgba(39, 116, 149, 0.5)' }}>
                        <p style={{ color: 'EFEEF5', textShadow: '2px 2px #79CDE6' }}></p>
                    </div>
                </div> */}
                <div className="front" >
                    <div className='flip-div' style={{ borderRadius: '50%', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '5px 10px 10px rgba(39, 116, 149, 0.5)' }}>
                        <p style={{ color: 'EFEEF5', textShadow: '2px 2px #79CDE6' }}></p>
                    </div>
                </div>
                <div className="back" >
                    <div className='flip-div' style={{ borderRadius: '50%', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '10px 20px 10px rgba(39, 116, 149, 0.5)', backgroundColor: '#61D2FA' }}>
                        <p style={{ color: '#EFEEF5', textShadow: '2px 2px #EF66E6' }}></p>
                        {/* <img src={testTumble}></img> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Flipper