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
                <div className="front"  >

                    <p>Click on a sphere...</p>
                </div>
                <div className="back">
                    <p>To learn about me</p>
                </div>
            </div>
        </div>
    );
}
export default Flipper