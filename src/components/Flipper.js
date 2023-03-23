import { useState } from 'react';
import myAtomLogo from '../assets/my-atom-icon.png';


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
                <div className="front" >
                    <div className='flip-div' style={{ background: 'radial-gradient(circle at 100px 100px, #ffffff, #22B3DE)', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '5px 10px 10px rgba(39, 116, 149, 0.5)' }}>
                        <p style={{ color: 'EFEEF5', textShadow: '2px 2px #79CDE6' }}>Click on a sphere...</p>
                    </div>
                </div>
                <div className="back" >
                    <div className='flip-div' style={{ background: 'radial-gradient(circle at 100px 100px, #B7EFFF)', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '5px 10px 10px rgba(39, 116, 149, 0.5)' }}>
                        <p style={{ color: '#EFEEF5', textShadow: '2px 2px #EF66E6' }}>To learn about me</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Flipper