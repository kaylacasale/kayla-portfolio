// import zIndex from "@mui/material/styles/zIndex";
import '../styles/SphereTwoStyle.css'
import { height } from "@mui/system";
import React, { useState } from "react";

const SphereTwo = (props) => {
    const { x, y, z, color, text, onClick, hoverColor, srcIcon, textColor, notHoverColor, top, left, hoverOpacity, notHoverOpacity, width, height, width2, height2, text2 } = props;
    const [isHovered, setIsHovered] = useState(false);
    const [isOpaque, setIsOpaque] = useState(false);
    const [isWidth, setIsWidth] = useState(false)
    const [isHeight, setIsHeight] = useState(false)
    const [activeSphere, setActiveSphere] = useState(null);
    // const [zIndex, setZIndex] = useState(1);    // const [isZ, setIsZ] = useState({ z })
    const [zIndex, setZIndex] = useState(1);
    const [isVisible, setIsVisible] = useState(true);

    const handleHover = () => {
        setIsHovered(true);
        setIsOpaque(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsOpaque(false)
    }


    const [position, setPosition] = useState({ x, y, z });
    const [clicked, setClicked] = useState(false)
    const [isText, setIsText] = useState(false)
    const [isText2, setIsText2] = useState(false)

    // const [isZIndex, setIsZIndex] = useState(false);
    // const [zIndex, setZIndex] = useState(1);
    const renderBtn = () => {
        return <div id='wiggle' style={{ width: '50%', height: '50%', marginTop: '-40%' }}><img src={srcIcon} style={{ width: '50%' }}></img><button onClick={() => handleReset()} style={{ borderRadius: '200px', width: '120px', height: '120px', fontSize: '16px', boxShadow: '12px 15px 17px #00000029', background: `${hoverColor}`, color: '#EFEEF5', textShadow: '.1px .1px #FFFBFB', borderColor: '#FFFBFB', fontFamily: 'GravitasOne' }} >Put Back</button>
            {/* <img src={srcIcon} style={{ width: '50%', marginTop: '-100%' }}></img> */}
        </div>
    }

    const handleClick = () => {
        // setIsVisible(!isVisible);
        // setZIndex(zIndex + 1);
        // setPosition({ x: x2, y: y2, z: z2 })
        setClicked(true)


        setIsWidth(true)
        setIsHeight(true)
        setIsText(true)
        setIsText2(true)
        // setIsZIndex(!true)
        // setIsZIndex(true)
        // setActiveSphere(index)
        // const newX = '50px'
        // const newY = '200px'
        const x2 = '-183%';
        // const x2 = -550;
        const y2 = '40%';

        // const z2 = 3;

        setPosition({ x: x2, y: y2, z: 10 });
        onClick();
        // setIsZ(true)
    }

    // const handleResetClick = () => {
    //     setPosition({ x: x, y: y })
    // }
    const handleReset = () => {
        setPosition({ x: x, y: y, z: 0 })
        setIsWidth(false)
        setIsHeight(false)
        setIsText(false)
        setIsText2(false)
        setClicked(false)
    }

    return (
        <div className="sphere" >
            {/* <div onClick={handleClick} style={{ width: '100px', height: '100px', borderRadius: '100px', background: 'white', position: 'absolute', top:'50', left:  }}>
            </div> */}

            <div

                // className={`sphere ${activeSphere === index ? "active" : ""}`}
                // className={`sphere`}

                style={{
                    position: "absolute",
                    top: `${top}`,
                    left: `${left}`,

                    top: position.y,
                    left: position.x,
                    // zIndex: clicked ? `${zIndex}` : 1,
                    // zIndex: isZ ? `${z2}` : `${z}`,
                    // top: clicked ? setPosition(`${x2}`, `${y2}`, `${z2}`) : setPosition(`${x}`, `${y}`, `${z}`),
                    // x2: '200',
                    // y2: '200',
                    // z2: '0',
                    // top: `${y}`,
                    // left: `${x}`,
                    // top: position.y,
                    // left: position.x,
                    // zIndex: isZIndex ? `${zIndex2}` : `${zIndex}`,
                    // zIndex: isZIndex ? zIndex2 : zIndex,
                    // zIndex: isZIndex ? zIndex2 : zIndex,
                    // zIndex: isZIndex ? zIndex2 : zIndex,
                    // zIndex: isZIndex ? `${zIndex2}` : `${zIndex}`,
                    // transform: `translateZ(${activeSphere === index ? "200px" : "0"})`,
                    // zIndex: `${activeSphere === index ? "3" : "0"}`,
                    background: isHovered ? `${hoverColor}` : `${notHoverColor}`,
                    borderRadius: "50%",
                    width: isWidth ? `${width2}` : `${width}`,
                    height: isHeight ? `${height2}` : `${height}`,
                    transition: ".5s ease-in",
                    cursor: "pointer",
                    // transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                    backgroundColor: color,
                    textAlign: 'center',
                    fontFamily: 'Lato',
                    fontWeight: 'bold',
                    // boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                    boxShadow: '12px 15px 17px #00000029'
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick()}
                id='zoom'



            >
                <span class='popper' style={{ fontSize: '14px', maxWidth: '100%', maxHeight: '100%', color: `${textColor}` }}>{isText ? `${text}` : ''}<img src={clicked ? null : `${srcIcon}`} style={{ maxWidth: '60%', maxHeight: '60%', marginTop: '0%', marginBottom: '0%', opacity: isOpaque ? `${hoverOpacity}` : `${notHoverOpacity}` }}></img><p style={{ fontSize: '11px', margin: '15px' }} >{isText2 ? `${text2}` : ''}</p></span>
                {/* <button onClick={() => handleResetClick()}>Reset Sphere Position</button> */}

            </div>
            {/* <button onClick={() => handleReset()}></button> */}
            <div style={{ position: 'absolute', left: '30%', top: '50px', color: `${textColor}` }}>
                {clicked ? renderBtn() : !renderBtn()}
            </div>





            {/* <button onClick={handleReset}>
                Reset
            </button> */}
            {/* <div
                className="sphere"
                style={{
                    position: "absolute",
                    top: isHovered ? y - 10 : y,
                    left: isHovered ? x - 10 : x,
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    transition: "all 0.3s ease"
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
            /> */}
        </div>

    );
}

export default SphereTwo