import React, { useState } from "react";

const Sphere = (props) => {
    const { x, y, z, color, text, onClick, hoverColor, srcIcon, textColor } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    const [position, setPosition] = useState({ x, y, z });

    const handleClick = () => {
        // const newX = Math.floor(Math.random() * window.innerWidth);
        // const newY = Math.floor(Math.random() * window.innerHeight);
        // const generatedNumbers = [];
        // while (generatedNumbers.length < 5) {
        //     const randomNumber = Math.floor(Math.random() *5) * 20;
        //     if (!generatedNumbers.includes(randomNumber)) {
        //         generatedNumbers.push(randomNumber)
        //     }
        // }
        const generatedNumbers = [25, 50, 100, 125]
        // const generatedNumbers = [];
        // for (let i = 0; i < 4; i++) { // Generate 4 numbers
        //     const randomNumber = Math.floor(Math.random() * 4) * 50;
        //     generatedNumbers.push(randomNumber);

        //     // while (randomNumber < 200) {
        //     //     randomNumber += 50;
        //     //     generatedNumbers.push(randomNumber)
        //     // }
        // }
        const newX = generatedNumbers[Math.floor(Math.random() * 4)];
        const newY = generatedNumbers[Math.floor(Math.random() * 4)]

        // const newY = y + 50;
        setPosition({ x: newX, y: newY, z: z });
        onClick();
    }
    return (
        <div>
            {/* <div onClick={handleClick} style={{ width: '100px', height: '100px', borderRadius: '100px', background: 'white', position: 'absolute', top:'50', left:  }}>
            </div> */}
            <div
                className="sphere"
                style={{
                    position: "absolute",
                    // top: y,
                    // left: x,
                    top: position.y,
                    left: position.x,
                    background: isHovered ? `${hoverColor}` : `transparent radial-gradient(closest-side at 50% 50%, #E2BA48 0%, #F6EAC6 100%) 0% 0% no-repeat padding-box`,
                    borderRadius: "50%",
                    width: "75px",
                    height: "75px",
                    transition: ".5s ease-in",
                    cursor: "pointer",
                    transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                    backgroundColor: color,
                    textAlign: 'center',
                    fontFamily: 'Lato',
                    fontWeight: 'bold',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'

                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <span style={{ fontSize: '14px', maxWidth: '100%', maxHeight: '100%', color: `${textColor}` }}>{text}<img src={srcIcon} style={{ maxWidth: '60%', maxHeight: '60%' }}></img></span>
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

export default Sphere