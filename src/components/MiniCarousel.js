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
            <div ref={carouselRef} className="carousel" style={{ width: '230px', height: '230px', alignItems: 'center' }} id='scale'>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} style={{ marginBottom: '0px', maxWidth: '100%', maxHeight: '100%' }} />
                ))}
            </div>
            <div style={{ marginTop: '-50px' }}>
                <button onClick={() => handleClick('prev')} style={{ width: '30px', height: '30px', fontSize: '20px', borderRadius: '100px', boxShadow: '0px 6px 12px #FFFBFB', background: 'transparent linear-gradient(180deg, #D5F6F2 0%, #DFF9F0 19%, #9CCFEA 47%, #F2D7F5 100%) 0% 0% no-repeat padding-box', borderColor: 'white', borderWidth: '.1px' }} id='wiggle'>↺</button>
                <button onClick={() => handleClick('next')} style={{ width: '30px', height: '30px', fontSize: '20px', borderRadius: '100px', boxShadow: '0px 6px 12px #FFFBFB', background: 'transparent linear-gradient(180deg, #D5F6F2 0%, #DFF9F0 19%, #9CCFEA 47%, #F2D7F5 100%) 0% 0% no-repeat padding-box', borderColor: 'white', borderWidth: '.1px' }} id='wiggle'>↻</button>
                {/* <button onClick={() => handleClick('next')} style={{ width: '40px', height: '40px', fontSize: '20px', borderRadius: '100px', boxShadow: '0px 3px 6px #FFFBFB', background: 'transparent linear-gradient(180deg, #EFEEF5 0%, #E3E1ED 49%, #EFEEF5 100%) 0% 0% no-repeat padding-box', borderColor: '#FFFBFB' }} id='wiggle'>↻</button> */}
            </div>
        </div>
    );
};

export default MiniCarousel;
