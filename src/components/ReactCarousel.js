import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
// import myImage from '../assets/clouds.png'
import DNA from '../assets/DNA-for-portfolio.png'
import SfnPoster from '../assets/SfN-poster.png'
import MovingComponent from 'react-moving-text'

// import pic from '../assets/clouds.png'


const style = {
    div: {
        alignSelf: 'center'
    }
}
function ReactCarousel() {
    return (
        <div>
            <Carousel>
                {itemData.map((item) => (
                    <Carousel.Item>

                        < img
                            className="center w-50"
                            // src={"./assets/clouds.png/800x400?text=Secondslide&bg=282c34"}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            link={item.link}
                            style={style.div}
                        />
                        <div className='carousel-caption'>
                            <Carousel.Caption >
                                {/* <h3><span className='rounded' style={{ fontSize: '32px', textAlign: 'center', color: 'white', background: 'rgba(0, 0, 0, 0.9)', padding: '4px' }}>{item.title}</span></h3>
                                <p style={{ fontSize: '25px', background: 'rgba(0, 0, 0, 0.2)' }}>{item.info}</p> */}
                                <MovingComponent
                                    type="effect3D"
                                    duration="1700ms"
                                    delay=".5s"
                                    direction="alternate"
                                    timing="ease-in"
                                    iteration="infinite"
                                    fillMode="none"
                                    className='rounded' style={{ fontSize: '32px', textAlign: 'center', color: 'white', background: 'rgba(0, 0, 0, 0.3)', padding: '4px' }}>
                                    {item.title}
                                </MovingComponent>
                                <p style={{ fontSize: '20px', background: 'rgba(0, 0, 0, 0.1)', color: 'black', textShadow: '2px 2px #ffffff' }}>{item.info}</p>
                            </Carousel.Caption>
                        </div>

                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
//* rgba codes:
// https://www.december.com/html/spec/colorrgbadec.html
const itemData = [
    {
        img: `${SfnPoster}`,
        title: 'Neuroscience Publications',
        info: 'Research focused on Selective Attention',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://etiquette.herokuapp.com/'
    },
    {
        img: 'https://lh3.googleusercontent.com/pw/AMWts8C-vw8_6sB2jmSTv_huxSH12klRWA5XupRt6ETs9LsLlblQ5TvDobgc3vZU1yztim-Wd6Dfq4ZplnX1CpxxJF-ifrSfmxOQbsZB_mbibC53KB6hYaYgK2C7YK1STRfaWQkuzbjHeWEbgVtN-qb-gbMO=w1306-h938-no?authuser=0',
        title: 'Etiquette - Nail Salon Booking',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://etiquette.herokuapp.com/'
    },
]
export default ReactCarousel;