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
            <div ref={carouselRef} className="carousel">
                {images.map((image, index) => (
                    <img id='zoom' key={index} src={image} alt={`Image ${index}`} />
                ))}
            </div>
            <button onClick={() => handleClick('prev')} style={{ width: '60px', height: '40px', fontSize: '10px' }}>Back</button>
            <button onClick={() => handleClick('next')} style={{ width: '60px', height: '40px', fontSize: '10px' }}>Next</button>
        </div>
    );
};

export default MiniCarousel;
