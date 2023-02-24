import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import shangoo from '../assets/shangoo-main.PNG'
import shangooTwo from '../assets/smise-360.png'


function BlockButton() {
    const images = [
        {
            id: 1,
            img: `${shangoo}`
        },
        {
            id: 2,
            img: `${shangooTwo}`
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleNextImage() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    const [showElement, setShowElement] = useState(false);

    function toggleElement() {
        setShowElement(prevShowElement => !prevShowElement);
    }
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
        toggleElement()
    };
    // const btn = document.querySelector(<Button />)

    // btn.addEventListener("click", function () {
    //     btn.innerHTML = ['See Less']
    // })
    // if (btn.click) {
    //     btn.innerHTML = ['See Less']
    // } : (
    //     btn.innerHTML = ['See More']
    // )
    // function seeLess() {
    //     Button.currentIndex = "see Less"
    // }
    return (
        <div className="d-grid gap-2" style={{ alignContent: 'center' }}>
            {/* <Button variant="primary" size="lg">
                Block level button
            </Button> */}
            <Button onClick={handleClick} variant="secondary" size="lg" >{Text}
                {clicked ? 'See Less' : 'See More...'}
            </Button>
            {/* if (Button.onClick === 'true') {
                Text = 'See Less'
            }  : {
                Text = 'See More...'


            } */}
            <div className={showElement ? 'show-element' : 'hide-element'} style={{ margin: '1em', height: 'fit-content' }}>

                {images.map((image, index) =>
                    <img key={image.id} src={image.img} style={{ height: '600px', display: index === currentIndex ? 'block' : 'none' }} loading='lazy'></img>
                )}
                <button onNextImage={handleNextImage}></button>
            </div>
        </div >
    );
}

// const cardData = [
//     {
//         img: `${shangoo}`
//     },
//     {
//         img: `${shangoo}`
//     }
// ]
export default BlockButton;