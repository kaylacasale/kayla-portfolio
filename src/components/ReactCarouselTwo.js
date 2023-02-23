import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Background from '../components/Background'
import '../styles/Background.css'
import MovingComponent from 'react-moving-text'
// import myImage from '../assets/clouds.png'
import selectiveAttention from '../assets/mouse-studies.webp'
import SfnPoster from '../assets/SfN-poster.png'
import bioRxivPublication from '../assets/bioRxiv-publication.png'
import sfnPosterPresentation from '../assets/sfn-poster-presentation.png'
import publicationSources from '../assets/journals-publications.png'

import bioengineering from '../assets/echolocation.png'
import institutions from '../assets/berkeley-psychology.png'
import technologies from '../assets/technologies-yartsev-3.png'
import epilepticus from '../assets/embryonic-stem-cells.jpeg'


// import pic from '../assets/clouds.png'


// const style = {
//     div: {
//         alignSelf: 'center'
//     }
// }
function ReactCarouselTwo() {
    return (
        <div>
            <Carousel>
                {itemData.map((item) => (
                    <Carousel.Item>
                        <div style={{ width: '100%', height: '430px' }}>
                            <a href={item.link}>
                                < img
                                    className="center w-50"
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
                                    className='rounded' style={{ fontSize: '32px', textAlign: 'center', color: 'white', background: 'rgba(0, 0, 0, 0.4)', padding: '4px', borderBlock: 'solid' }}>
                                    {item.title}
                                </MovingComponent>

                                <p style={{ fontSize: '16px', background: 'rgba(0, 0, 0, 0.8)', color: 'white', textShadow: '2px 2px black' }} className='rounded'>{item.info}</p>
                                {/* <p style={{ fontSize: '12px' }}>{item.moreInfo}</p> */}

                            </Carousel.Caption>
                        </div>
                        <p style={{ fontSize: '12px', marginTop: '3px' }}>{item.moreInfo}</p>
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
        img: `${institutions}`,
        title: 'Research',
        info: '6+ years of Cognitive and Molecular Neuroscience research at UCLA and UC Berkeley',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://etiquette.herokuapp.com/'
    },
    {
        img: `${selectiveAttention}`,
        title: 'Neuroscience Research',
        info: 'focused on Selective Attention via whisker studies',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.feldmanlab.org/'
    },
    {
        img: `${bioRxivPublication}`,
        title: 'Neuroscience Publications',
        info: 'Author - bioRxiv',
        moreInfo: `Ramamurthy D.L., Chen A., Huang
        P.C., Bharghavan P., Krishna G.,
        Casale K., Feldman D.E. (Oct 2021).
        VIP interneurons in mouse whisker
        S1 exhibit sensory and action-related
        signals during goal-directed behavior.
        bioRxiv. Preprint. DOI: https://doi.
        org/10.1101/2021.10.08.463283`,
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.biorxiv.org/content/10.1101/2021.10.08.463283v1'
    },
    {
        img: `${sfnPosterPresentation}`,
        title: 'Participant - Poster Presentation',
        info: 'Society for Neuroscience 2021',
        moreInfo: `Casale, K., D.L. Ramamurthy. Sensory
        and action-related responses of
        VIP interneurons in mouse whisker S1
        during goal-directed behavior. 2021
        Neuroscience Meeting Planner. Chicago,
        IL: Society for Neuroscience, 2022.`,
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: `https://www.abstractsonline.com/
        pp8/#!/10485/presentation/9948.`
    },
    {
        img: `${SfnPoster}`,
        title: 'Senior Thesis (Feldman Lab)',
        info: 'Researcher - Hellen Wills Neuroscience Institute',
        moreInfo: `Casale K, Gayathri, K. Effects of attentional
        cueing on reaction times for
        whisker stimulus detection in mice. Poster
        presented at: the Fall Senior Research
        Poster Session (In Person); Nov 2020;
        University of California, Berkeley, CA.
        https://acrobat.adobe.com/link/review?`,
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: `https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:7e93e4e8-56cc-3c63-b0ee-743d00d29537`
    },
    {
        img: `${publicationSources}`,
        title: 'Academic Journals & Publishers',
        info: 'bioRxiv, SfN, ResearchGate, ScienceDirect, NIH, NCBI...',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        // link: 'https://etiquette.herokuapp.com/'
    },
    {
        img: `${bioengineering}`,
        title: 'Neuroscience & Bioengineering Research',
        info: `focused on bat sonar communication ('Echolocation')`,
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.michaelyartsev.com/'
    },
    {
        img: `${technologies}`,
        title: 'Neurophysiological Methods & Technologies (Yartsev NeuroBat Lab)',
        info: `Dpt. of Bioengineering`,
        moreInfo: 'Used surgical tools to conduct brain extractions in combination with advanced scientific technologies to record and image free flying bats and analyze brain histologies post extraction',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.michaelyartsev.com/research'
    },
    {
        img: `${epilepticus}`,
        title: 'Neurology Research',
        info: 'focused on embryonic stem cell therapy for Temporal Lobe Epilepsy in rodent models',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://etiquette.herokuapp.com/'
    },
]
export default ReactCarouselTwo;