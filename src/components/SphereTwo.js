// import zIndex from "@mui/material/styles/zIndex";
import { height } from "@mui/system";
import React, { useState } from "react";

const SphereTwo = (props) => {
    const { x, y, color, text, onClick, hoverColor, srcIcon, textColor, notHoverColor, top, left, hoverOpacity, notHoverOpacity, width, height, width2, height2, zIndex, zIndex2, text2 } = props;
    const [isHovered, setIsHovered] = useState(false);
    const [isOpaque, setIsOpaque] = useState(false);
    const [isWidth, setIsWidth] = useState(false)
    const [isHeight, setIsHeight] = useState(false)
    const [isZIndex, setIsZIndex] = useState(false)
    // const [isZ, setIsZ] = useState({ z })

    const handleHover = () => {
        setIsHovered(true);
        setIsOpaque(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsOpaque(false)
    }

    const [position, setPosition] = useState({ x, y });
    const [clicked, setClicked] = useState(false)
    const [isText, setIsText] = useState(false)
    const [isText2, setIsText2] = useState(false)

    const handleClick = () => {
        // setPosition({ x: x2, y: y2, z: z2 })
        setClicked(true)


        setIsWidth(true)
        setIsHeight(true)
        setIsText(true)
        setIsText2(true)
        setIsZIndex(!true)

        // const newX = '50px'
        // const newY = '200px'

        const x2 = 112;
        const y2 = 368;
        // const z2 = 3;

        setPosition({ x: x2, y: y2 });
        onClick();
        // setIsZ(true)
    }
    return (
        <div>
            {/* <div onClick={handleClick} style={{ width: '100px', height: '100px', borderRadius: '100px', background: 'white', position: 'absolute', top:'50', left:  }}>
            </div> */}
            <div
                className="sphere"
                style={{
                    position: "absolute",
                    // top: `${top}`,
                    // left: `${left}`,
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
                    zIndex: isZIndex ? `${zIndex2}` : `${zIndex}`,
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
                onClick={handleClick}

            >
                <span style={{ fontSize: '14px', maxWidth: '100%', maxHeight: '100%', color: `${textColor}` }}>{isText ? `${text}` : ''}<img src={clicked ? null : `${srcIcon}`} style={{ maxWidth: '60%', maxHeight: '60%', marginTop: '0%', opacity: isOpaque ? `${hoverOpacity}` : `${notHoverOpacity}` }}></img><p style={{ fontSize: '11px', margin: '15px' }}>{isText2 ? `${text2}` : ''}</p></span>
            </div>


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