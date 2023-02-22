import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import pic from '../assets/clouds.png'


function ReactCarousel() {
    return (
        <div>
            <Carousel>
                {itemData.map((item) => (
                    <Carousel.Item>
                        < img
                            className="d-block w-100"
                            // src={"./assets/clouds.png/800x400?text=Secondslide&bg=282c34"}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            link={item.link}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"holder.js/800x400?text=Secondslide&bg=282c34"}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'../assets/clouds.png'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
}

const itemData = [
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