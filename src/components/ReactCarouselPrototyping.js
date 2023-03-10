import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import MovingComponent from 'react-moving-text'
// import myImage from '../assets/clouds.png'
import selectiveAttention from '../assets/mouse-studies.webp'
import SfnPoster from '../assets/SfN-poster.png'
import bioRxivPublication from '../assets/bioRxiv-publication.png'
import sfnPosterPresentation from '../assets/sfn-poster-presentation.png'
import publicationSources from '../assets/journals-publications.png'

import bioengineering from '../assets/echolocation.png'
import institutions from '../assets/research-institutions-6.png'
import technologies from '../assets/technologies-yartsev-3.png'
import epilepticus from '../assets/embryonic-stem-cells.jpeg'
import topTeethOne from '../assets/top-teeth-1.png'
import topTeethTwo from '../assets/top-teeth-2.png'
import topTeethThree from '../assets/top-teeth-3.png'
import topTeethFour from '../assets/top-teeth-4.png'
import { width } from '@mui/system';
import albumCover from '../assets/album-cover.png'
import franklin from '../assets/franklin.png'
import franklinSnakes from '../assets/franklin-snakes.png'
import balloon from '../assets/franklin-balloon.png'
import smiseScreens from '../assets/SMISE-screen.png'
import implant from '../assets/SMISE-implant.png'
import imaging from '../assets/SMISE-imaging.png'
import covid from '../assets/covid-virus.png'
import tentTTC from '../assets/TTC-testing-tent.png'
import swabTTC from '../assets/TTC-swab-training.png'
import detectCam from '../assets/TTC-detectCam.png'
import smiseScreen from '../assets/SMISE-screens.png'
import airInThreeScreens from '../assets/airIn-three-screens.png'
import airInOnWall from '../assets/airIn-on-wall.png'
import airInShades from '../assets/airIn-blinds.png'
import airInBreeze from '../assets/airIn-breeze.png'

// import courseLink from '../assets/course-link.png'
// import ReactCarouselTwo from './ReactCarouselTwo';


// import pic from '../assets/clouds.png'


// const style = {
//     div: {
//         alignSelf: 'center'
//     }
// }
function ReactCarouselPrototyping() {
    return (
        <div>
            <Carousel style={{ width: '80%', float: 'left', height: '700px', marginBottom: '100px' }}>
                {itemData.map((item) => (
                    <Carousel.Item>
                        <div style={{ width: '100%', height: '600px' }}>
                            <a href={item.link}>
                                < img
                                    className="center h-75"
                                    // src={"./assets/clouds.png/800x400?text=Secondslide&bg=282c34"}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    link={item.link}
                                    style={{ height: 'fit-content' }}
                                />
                            </a>
                        </div>
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
                                    className='rounded' style={{ fontSize: '32px', textAlign: 'center', color: 'white', padding: '4px', textShadow: '3px 3px black' }}>
                                    {item.title}
                                </MovingComponent>

                                <p style={{ fontSize: '16px', background: 'rgba(0, 0, 0, .1)', color: 'white', textShadow: '2px 2px black', width: '100%', padding: '2px', boxShadow: '.5px .5px black, -1px 0 .4em #D0D3D5' }} >{item.info}</p>
                                {/* <p style={{ fontSize: '12px' }}>{item.moreInfo}</p> */}

                            </Carousel.Caption>
                        </div>
                        <div >
                            <p style={{ fontSize: '12.5px', marginTop: '4px', color: 'white', textShadow: '0px 0px pink', textAlign: 'center', padding: '2px' }}>{item.moreInfo}</p>
                        </div>
                    </Carousel.Item>

                ))}
            </Carousel>
            <div style={{ width: '20%', float: 'right', marginTop: '100px', fontSize: '32px' }}>
                <div style={{ marginBottom: '20px' }}>Prototyping:</div>
                <ul className='ulCarousel' style={{ listStyleType: 'number', padding: '10px', fontSize: '24px' }}>
                    <li>SMISE Dental App</li>
                    <li>AirIn Universal Window</li>
                </ul>
            </div>
            {/* <ReactCarouselTwo /> */}
        </div>
    );
}
//* rgba codes:
// https://www.december.com/html/spec/colorrgbadec.html
const itemData = [
    {
        img: `${smiseScreens}`,
        title: 'Keep Track of Your Teeth',
        info: 'SMISE Dental App',
        // info: 'I created these assets for a dental app I created called SMISE',
        // moreInfo: 'I created these assets for a dental app I created called SMISE',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'
    },
    {
        img: `${smiseScreen}`,
        title: 'Interact With Dental Records',
        info: 'A Personalized Predictive Analytics Engine ',
        // info: 'I created these assets for a dental app I created called SMISE',
        // moreInfo: 'I created these assets for a dental app I created called SMISE',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'
    },
    {
        img: `${implant}`,
        title: 'Digital Oral Exam',
        info: 'Engage With Your Dental Health Records',
        // info: 'I created these assets for a dental app I created called SMISE',
        // moreInfo: 'I created these assets for a dental app I created called SMISE',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'
    },
    {
        img: `${imaging}`,
        title: 'Imaging & Smart Technology',
        info: 'Recreate Your Unique Oral Cavity',
        // info: 'I created these assets for a dental app I created called SMISE',
        // moreInfo: 'I created these assets for a dental app I created called SMISE',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022'
    },
    {
        img: `${airInThreeScreens}`,
        title: 'AirIn Universal Window',
        info: 'Bring Light to Your Living Space',
        // info: 'I created these assets for a dental app I created called SMISE',
        // moreInfo: 'I created these assets for a dental app I created called SMISE',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://etiquette.herokuapp.com/'
    },
    {
        img: `${airInOnWall}`,
        title: 'Indoor Window',
        info: 'Natural light, smells, and a breeze exactly how you want it',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.feldmanlab.org/'
    },
    // {
    //     img: `${topTeethThree}`,
    //     title: 'Neuroscience Publications',
    //     info: 'Author - bioRxiv',
    //     moreInfo: `Ramamurthy D.L., Chen A., Huang
    //     P.C., Bharghavan P., Krishna G.,
    //     Casale K., Feldman D.E. (Oct 2021).
    //     VIP interneurons in mouse whisker
    //     S1 exhibit sensory and action-related
    //     signals during goal-directed behavior.
    //     bioRxiv. Preprint. DOI: https://doi.
    //     org/10.1101/2021.10.08.463283`,
    //     // author: '@kaylacasale @bharatrai @salmaloum',
    //     // rows: 2,
    //     // cols: 2,
    //     featured: true,
    //     link: 'https://www.biorxiv.org/content/10.1101/2021.10.08.463283v1'
    // },
    {
        img: `${airInShades}`,
        title: 'Manual & Digital Control',
        info: `Customized Blinds`,
        // moreInfo: 'Used surgical tools to conduct brain extractions in combination with advanced scientific technologies to record and image free flying bats and analyze brain histologies post extraction',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.michaelyartsev.com/research'
    },
    {
        img: `${airInBreeze}`,
        title: 'Breeze',
        info: `Adjustable airtflow, humidity, gas levels, etc.`,
        // moreInfo: 'Used surgical tools to conduct brain extractions in combination with advanced scientific technologies to record and image free flying bats and analyze brain histologies post extraction',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.michaelyartsev.com/research'
    },
    // {
    //     img: `${swabTTC}`,
    //     title: 'Swabs & Samples',
    //     info: `Visual Guide to Specimen Collection`,
    //     // moreInfo: 'Used surgical tools to conduct brain extractions in combination with advanced scientific technologies to record and image free flying bats and analyze brain histologies post extraction',
    //     // author: '@kaylacasale @bharatrai @salmaloum',
    //     // rows: 2,
    //     // cols: 2,
    //     featured: true,
    //     link: 'https://www.michaelyartsev.com/research'
    // },
    // {
    //     img: `${detectCam}`,
    //     title: 'PCR & Rapid Testing',
    //     info: `Visual Aid for Onsite Testing Clinicians`,
    //     // moreInfo: 'Used surgical tools to conduct brain extractions in combination with advanced scientific technologies to record and image free flying bats and analyze brain histologies post extraction',
    //     // author: '@kaylacasale @bharatrai @salmaloum',
    //     // rows: 2,
    //     // cols: 2,
    //     featured: true,
    //     link: 'https://www.michaelyartsev.com/research'
    // },
    // {
    //     img: `${albumCover}`,
    //     title: 'Album Cover',
    //     info: 'Franklin Nwochie',
    //     // moreInfo: `Casale, K., D.L. Ramamurthy. Sensory
    //     // and action-related responses of
    //     // VIP interneurons in mouse whisker S1
    //     // during goal-directed behavior. 2021
    //     // Neuroscience Meeting Planner. Chicago,
    //     // IL: Society for Neuroscience, 2022.`,
    //     // author: '@kaylacasale @bharatrai @salmaloum',
    //     // rows: 2,
    //     // cols: 2,
    //     featured: true,
    //     link: `https://www.abstractsonline.com/
    //     pp8/#!/10485/presentation/9948.`
    // },
    // {
    //     img: `${balloon}`,
    //     title: 'Hot Air Balloon',
    //     info: `Focus: Layers for Balloon Allusion`,
    //     // author: '@kaylacasale @bharatrai @salmaloum',
    //     // rows: 2,
    //     // cols: 2,
    //     featured: true,
    //     link: 'https://www.michaelyartsev.com/'
    // },
    // {
    //     img: `${franklin}`,
    //     title: 'Self-Portrait',
    //     info: 'Focus: Visual Accuracy',
    //     // moreInfo: `Casale K, Gayathri, K. Effects of attentional
    //     // cueing on reaction times for
    //     // whisker stimulus detection in mice. Poster
    //     // presented at: the Fall Senior Research
    //     // Poster Session (In Person); Nov 2020;
    //     // University of California, Berkeley, CA.`,
    //     // author: '@kaylacasale @bharatrai @salmaloum',
    //     // rows: 2,
    //     // cols: 2,
    //     featured: true,
    //     link: `https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:7e93e4e8-56cc-3c63-b0ee-743d00d29537`
    // },
    // {
    //     img: `${franklinSnakes}`,
    //     title: 'Snakes',
    //     info: 'Focus: Textured Scales',
    //     // author: '@kaylacasale @bharatrai @salmaloum',
    //     // rows: 2,
    //     // cols: 2,
    //     featured: true,
    //     // link: 'https://etiquette.herokuapp.com/'
    // },
    // {
    //     img: `${epilepticus}`,
    //     title: 'Neurology Research',
    //     info: 'focused on embryonic stem cell therapy for Temporal Lobe Epilepsy in rodent models',
    //     // author: '@kaylacasale @bharatrai @salmaloum',
    //     // rows: 2,
    //     // cols: 2,
    //     featured: true,
    //     link: 'https://etiquette.herokuapp.com/'
    // },
]

export default ReactCarouselPrototyping;