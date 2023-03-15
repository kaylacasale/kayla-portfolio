import React, { useState } from "react";
import "../styles/BackgroundCirclesStyle.css"; // import CSS file
import '../styles/Background.css'
import { Scale } from "@mui/icons-material";

function BackgroundCircles() {
    // const [hoveredIndex, setHoveredIndex] = useState(null);

    // const circles = Array.from({ length: 500 }, (_, index) => (
    //     <div
    //         key={index}
    //         className="circle"
    //         style={{
    //             backgroundColor: hoveredIndex === index ? "red" : "gray"
    //         }}
    //         onMouseEnter={() => setHoveredIndex(index)}
    //         onMouseLeave={() => setHoveredIndex(null)}
    //     />
    // ));
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const circleCount = 241.7;
    const circleSize = 50;
    const circleGap = 0;

    const circles = Array.from({ length: circleCount * 3 }, (_, index) => {
        const x = (index % circleCount) * circleSize + (index % circleCount) * circleGap
        const y = Math.floor(index / circleCount) * (circleSize + circleGap);
        return (
            <div
                key={index}
                className="circle" id={hoveredIndex === index ? 'wiggle' : ''}
                style={{
                    // background: hoveredIndex === index ? "radial-gradient(circle at 100px 100px, #ffffff, #BEFDFF)" : "linear-gradient(217deg, rgba(207, 255, 255, 0.8), rgba(255, 255, 251, 0) 70.71%), linear-gradient(127deg, rgb(233, 255, 212), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgba(237, 220, 250, 0.8), rgb(0, 255, 127, 0) 70.71%)", transform: hoveredIndex === index ? "scale(1.2)" : "scale(1.1)",
                    background: hoveredIndex === index ? "radial-gradient(circle at 100px 100px, #ffffff, #BEFDFF)" : "url(", transform: hoveredIndex === index ? "scale(1.2)" : "scale(1.1)",
                    // transform: `translate(${x}px, ${y}px)`,
                    width: `${circleSize}px`,
                    height: `${circleSize}px`,
                    marginRight: `${circleGap}px`,
                    marginBottom: `${circleGap}px`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            />
        );
    });


    return (
        <div className="background">
            {circles}
        </div>
    );
}

export default BackgroundCircles;
