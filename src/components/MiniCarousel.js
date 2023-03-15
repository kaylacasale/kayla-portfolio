import React, { useState, useRef, useEffect } from 'react';
import '../styles/MiniCarouselStyle.css';
import myLogo from '../assets/my-logo-light.png';
const MiniCarousel = ({ images }) => {
    const [counter, setCounter] = useState(0);
    const [size, setSize] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        setSize(carouselRef.current.clientWidth);
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;

        if (counter >= images.length) {
            setCounter(0);
        } else if (counter < 0) {
            setCounter(images.length - 1);
        } else {
            carousel.style.transition = 'transform 0.3s ease-in-out';
            carousel.style.transform = `translateX(${-size * counter}px)`;
        }
    }, [counter, images.length, size]);

    const handleClick = (direction) => {
        if (direction === 'prev') {
            setCounter(counter - 1);
        } else {
            setCounter(counter + 1);
        }
    };

    return (
        <div className="carousel-container">
            <div ref={carouselRef} className="carousel" style={{ width: '230px', height: '230px', alignItems: 'center' }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} style={{ marginBottom: '0px', maxWidth: '100%', maxHeight: '100%' }} />
                ))}
            </div>
            <div style={{ marginTop: '-40px' }}>
                <button onClick={() => handleClick('prev')} style={{ width: '40px', height: '40px', fontSize: '20px', borderRadius: '100px', boxShadow: '0px 6px 12px #FFFBFB', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)', borderColor: 'white', borderWidth: '.2px' }} id='wiggle'>↺</button>
                <button onClick={() => handleClick('next')} style={{ width: '40px', height: '40px', fontSize: '20px', borderRadius: '100px', boxShadow: '0px 6px 12px #FFFBFB', background: 'radial-gradient(circle at 100px 100px, #ffffff, #79CDE6)', borderColor: 'white', borderWidth: '.2px' }} id='wiggle'>↻</button>
                {/* <button onClick={() => handleClick('next')} style={{ width: '40px', height: '40px', fontSize: '20px', borderRadius: '100px', boxShadow: '0px 3px 6px #FFFBFB', background: 'transparent linear-gradient(180deg, #EFEEF5 0%, #E3E1ED 49%, #EFEEF5 100%) 0% 0% no-repeat padding-box', borderColor: '#FFFBFB' }} id='wiggle'>↻</button> */}
            </div>
        </div>
    );
};

export default MiniCarousel;
