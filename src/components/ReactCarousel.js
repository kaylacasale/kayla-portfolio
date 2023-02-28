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
import imagingAxons from '../assets/imaging-axonal-activity.mov'
import posterPresentation from '../assets/poster-presentation.png'
// import courseLink from '../assets/course-link.png'
// import ReactCarouselTwo from './ReactCarouselTwo';


// import pic from '../assets/clouds.png'


// const style = {
//     div: {
//         alignSelf: 'center'
//     }
// }
function ReactCarousel() {
    return (
        <div style={{ marginBottom: '100px' }}>
            <Carousel style={{ width: '80%', float: 'left', height: '700px', marginBottom: '100px' }}>
                {itemData.map((item) => (
                    <Carousel.Item>
                        <div style={{ width: '100%', height: '600px', backgroundColor: '#DFDFE3', borderRadius: '400px' }}>
                            <a href={item.link}>
                                < img
                                    className="center h-75"
                                    // src={"./assets/clouds.png/800x400?text=Secondslide&bg=282c34"}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    link={item.link}
                                    style={{ height: 'fit-content', borderRadius: '300px' }}
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

                                <p style={{ fontSize: '16px', background: 'rgba(0, 0, 0, 1)', color: 'white', textShadow: '2px 2px black', padding: '2px', boxShadow: '.5px .5px #fd5e53, -1px 0 .4em #D0D3D5' }}>{item.info}</p>
                                {/* <p style={{ fontSize: '12px' }}>{item.moreInfo}</p> */}

                            </Carousel.Caption>
                        </div>
                        <div>
                            <p style={{ fontSize: '12.5px', marginTop: '4px', color: 'white', textShadow: '0px 0px pink', padding: '2px' }}>{item.moreInfo}</p>
                        </div>
                    </Carousel.Item>

                ))}
            </Carousel>
            <div style={{ width: '20%', float: 'left', marginTop: '100px', fontSize: '32px' }}>
                <div style={{ marginBottom: '20px' }}>Research:</div>
                <ul className='ulCarousel' style={{ listStyleType: 'number', padding: '10px', fontSize: '24px' }}>
                    <li>Selective Attention</li>
                    <li>Sonar Communication</li>
                    <li>Epilepsy</li>
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
        info: 'Focus: Selective Attention via whisker studies',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.feldmanlab.org/'
    },
    {
        img: `${bioRxivPublication}`,
        title: 'Neuroscience Publications',
        info: 'Co-Author of Published Manuscript',
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
        img: `${posterPresentation}`,
        title: 'Honors Research Poster Presentation',
        info: 'Dpt. of Molecular and Cellular Biology, UC Berkeley',
        moreInfo: `Casale K, Gayathri, K. Effects of attentional
        cueing on reaction times for
        whisker stimulus detection in mice. Poster
        presented at: the Fall Senior Research
        Poster Session (In Person); Nov 2020;
        University of California, Berkeley, CA.`,
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: `https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:7e93e4e8-56cc-3c63-b0ee-743d00d29537`
    },
    {
        img: `${SfnPoster}`,
        title: 'Senior Research Thesis',
        info: 'Feldman Lab, Hellen Wills Neuroscience Institute (2018-2020)',
        moreInfo: `Casale K, Gayathri, K. Effects of attentional
        cueing on reaction times for
        whisker stimulus detection in mice. Poster
        presented at: the Fall Senior Research
        Poster Session (In Person); Nov 2020;
        University of California, Berkeley, CA.`,
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: `https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:7e93e4e8-56cc-3c63-b0ee-743d00d29537`
    },
    {
        img: `${publicationSources}`,
        title: 'Academic Journals & Publishers',
        // info: 'Findings: VIP interneurons in S1 represent both sensory and motor (lick) events during goal-directed behavior.',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        // link: 'https://etiquette.herokuapp.com/'
    },
    {
        img: `${bioengineering}`,
        title: 'Neuroscience & Bioengineering Research',
        info: `Focus: bat sonar communication ('Echolocation')`,
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.michaelyartsev.com/'
    },
    {
        img: `${technologies}`,
        title: 'Neurophysiological Methods & Technologies',
        info: `Yartsev NeuroBat Lab, Dpt. of Bioengineering (2016-2017)`,
        moreInfo: 'Used surgical tools to conduct brain extractions in combination with advanced scientific technologies to record and image free flying bats and analyze brain histologies post extraction',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://www.michaelyartsev.com/research'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFhYjM3Y2VhZmNhMDkzNTY5Njg1YWQyODQyZDY0NjMxODJlYjYwZCZjdD1n/YM104dsJPrYaGACLdc/giphy-downsized-large.gif',
        title: 'In-vivo Two-photon Calcium Imaging',
        info: 'Focus: embryonic stem cell therapy for Temporal Lobe Epilepsy in rodent models',
        // author: '@kaylacasale @bharatrai @salmaloum',
        // rows: 2,
        // cols: 2,
        featured: true,
        link: 'https://etiquette.herokuapp.com/'
    },
]

export default ReactCarousel;