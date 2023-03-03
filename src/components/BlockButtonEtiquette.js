import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import shangoo from '../assets/shangoo-main.PNG'
import shangooTwo from '../assets/smise-360.png'
import shangooRegister from '../assets/shangoo-register-screen.png'
import shangooMain from '../assets/shangoo-mainpage-screen.png'
import shangooOpenAsset from '../assets/shangoo-open-onasset.png'
// import Button from 'react-bootstrap/Button'

function BlockButtonEtiquette() {
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
            <Button onClick={handleClick} variant="secondary" size="sm" text={Text} style={{ width: '105px', height: '105px', borderRadius: '50px', borderColor: '#F4CC69', boxShadow: '0px 3px 6px #00000029', fontSize: '10px', position: 'absolute', top: '845px', left: '52.2%', background: 'transparent conic-gradient(from 95deg at 50% 50%, #E231DB 0.00%, #EA679F 27.69%, #2DD0D6 51.83%, #7BF7C3 71.54%, #A45AEF 100.00%) 0% 0% no-repeat padding-box', zIndex: 5, fontSize: '14px' }} >{Text}
                {Text ? 'See Less' : 'See More...'}
            </Button>
            {/* if (Button.onClick === 'true') {
                Text = 'See Less'
            }  : {
                Text = 'See More...'


            } */}
            <div className={showElement ? 'show-element' : 'hide-element'} style={{ margin: '1em', height: 'fit-content', left: '62%', top: '630px', position: 'absolute', zIndex: 5 }}>

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
export default BlockButtonEtiquette;