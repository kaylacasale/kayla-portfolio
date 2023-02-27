import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import shangoo from '../assets/shangoo-main.PNG'
import shangooTwo from '../assets/smise-360.png'
import shangooRegister from '../assets/shangoo-register-screen.png'
import shangooMain from '../assets/shangoo-mainpage-screen.png'
import shangooOpenAsset from '../assets/shangoo-open-onasset.png'
// import Button from 'react-bootstrap/Button'

function BlockButton() {
    const images = [
        {
            id: 1,
            img: `${shangooOpenAsset}`
        },
        {
            id: 2,
            img: `${shangooRegister}`
        },
        {
            id: 2,
            img: `${shangooMain}`
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
        setText(!Text)
    };

    const [Text, setText] = useState(false)
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
            <Button onClick={handleClick} variant="secondary" size="lg" text={Text} >{Text}
                {Text ? 'See Less' : 'My Part...'}
            </Button>
            {/* if (Button.onClick === 'true') {
                Text = 'See Less'
            }  : {
                Text = 'See More...'


            } */}
            <div className={showElement ? 'show-element' : 'hide-element'} style={{ margin: '1em', height: 'fit-content' }}>

                {images.map((image, index) =>
                    <img key={image.id} src={image.img} style={{ height: '450px', display: index === currentIndex ? 'block' : 'none', width: '220px' }} ></img>
                )}
                <button onClick={handleNextImage} className="rounded" style={{ width: '98%', height: '40px', marginTop: '10px', backgroundColor: '#286094', color: 'white', borderColor: 'white' }}>Next</button>
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