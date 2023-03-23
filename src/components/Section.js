// import React from 'react';
// // Here we import the Section.css file to grant access to some additional classNames
import '../styles/Section.css';
import testTumble from '../assets/test-tumble.png';
import testTumbleThree from '../assets/test-tumble-3.png';
// //* can important react-bootstrap-{element?} for each element
// // import react-bootstrap

// // TODO: Create a styles object called "styles"
// // const styles = {
// //   section: {
// //     background: 'orange',
// //     padding: '20px',
// //   },
// //   h2: {
// //     textAlign: 'center',
// //   },
// //   // button: {
// //   //   color: 'blue',
// //   //   onClick: function (color) {
// //   //     color: 'green'
// //   //   }
// //   // }
// // }
// function Section() {
//   // TODO: Add a style attribute to `section`
//   return (
//     <div></div>
//   );
// }

// export default Section;

// import { useState, useEffect, useRef } from "react";

// function Section({ children }) {
//   const moveableRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const moveable = moveableRef.current;
//     let animationFrameId;

//     function handleMouseMove(event) {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     }

//     function moveElement() {
//       if (!moveable) return;

//       const distanceX =
//         mousePosition.x -
//         (moveable.offsetLeft + moveable.offsetWidth / 2);
//       const distanceY =
//         mousePosition.y -
//         (moveable.offsetTop + moveable.offsetHeight / 2);

//       moveable.style.left =
//         moveable.offsetLeft + distanceX * 0.05 + "px";
//       moveable.style.top = moveable.offsetTop + distanceY * 0.05 + "px";

//       animationFrameId = requestAnimationFrame(moveElement);
//     }

//     moveElement();

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [mousePosition]);

//   return (
//     <div
//       ref={moveableRef}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "100px",
//           height: "100px",
//           backgroundColor: "red",
//           cursor: "move",
//           position: "absolute",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// export default Section;



import React, { useState } from 'react';
// import './styles.css';

function Section({ src, alt }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <img
        src={testTumble}
        alt={alt}
        className={isHovered ? 'circular' : ''}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        width='100px'
        height='100px'
        left='-100px'
        top='100px'
        zIndex='10'
      />
      <img
        src={testTumbleThree}
        alt={alt}
        className={isHovered ? 'circular' : ''}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        width='100px'
        height='100px'
        left='-100px'
        top='100px'
        zIndex='10'
      />
    </div>
  );
}

export default Section