import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from "@mui/material/IconButton";
import Card from '../components/Card'
// import PortfolioBackground from '../components/PortfolioBackground'
import '../styles/Background.css'
// import Background from '../components/Background';
// import MovingComponent from 'react-moving-text'
// import ReactImageListMasonry from '../components/ReactImageListMasonry';
// import shangoo from '../assets/shangoo-main.PNG'
// import BlockButton from '../components/BlockButton';

// import Sphere from '../components/Sphere'
import SphereTwo from './SphereTwo';

// import reactIcon from '../assets/react-icon.png';
// import jQueryIcon from '../assets/jQuery-icon.png';
// import nodeIcon from '../assets/node-icon.png';
// import expressIcon from '../assets/express-icon.png';
// import javascriptIcon from '../assets/javascript-icon.png';
// import frameworksIcon from '../assets/frameworks-icon.png';
// import htmlIcon from '../assets/html-icon.png';
// import cssIcon from '../assets/css-icon.png';
// import matlabIcon from '../assets/matlab-icon.png';
// import phpIcon from '../assets/php-icon.png';
// import swiftIcon from '../assets/swift-icon.png';
// import typescriptIcon from '../assets/typescript-icon.png';
// import languagesIcon from '../assets/languages-icon.png';

// import databaseIcon from '../assets/database-technologies-icon.png';
// import mySQLIcon from '../assets/mysql-icon.png';
// import postgreSQLIcon from '../assets/postgreSQL-icon.png';
// import mongodbIcon from '../assets/mongdb-icon.png';
// import graphQLIcon from '../assets/graphql-icon.png';
// import bootstrapIcon from '../assets/bootstrap-icon.png';
// import materialUIIcon from '../assets/materialUI-icon.png';
// import jawsDBIcon from '../assets/jawsdb-icon.png';
// import dynamoDBIcon from '../assets/dynamodb-icon.png';
// import apolloIcon from '../assets/apollo-icon.png';
// import vscodeIcon from '../assets/vscode-icon.png';

// import idesIcon from '../assets/ides-icon.png';
// import xcodeIcon from '../assets/xcode-icon.png';

// import versionControlIcon from '../assets/version-control-icon.png';
// import gitHubIcon from '../assets/github-icon.png';
// import gitIcon from '../assets/git-icon.png';
// import gitHubPagesIcon from '../assets/github-pages-icon.png';

// import projectManagementIcon from '../assets/project-management-icon.png';
// import joomlaIcon from '../assets/joomla-icon.png';
// import nulabBacklogIcon from '../assets/nulab-backlog-icon.png';
// import agileIcon from '../assets/agile-icon.png';
// import mondayIcon from '../assets/monday-icon.png';
// import airtablesIcon from '../assets/airtables-icon.png';
// import slackIcon from '../assets/slack-icon.png';
// import advancedMdIcon from '../assets/advancedMd-icon.png';

// import developmentAndTestingIcon from '../assets/development-and-testing-icon.png';
// import workbenchIcon from '../assets/workbench-icon.png';
// import postmanIcon from '../assets/postman-icon.png';
// import insomniaIcon from '../assets/insomnia-icon.png';
// import compassIcon from '../assets/compass-icon.png';
// import herokuIcon from '../assets/heroku-icon.png';
// import dockerIcon from '../assets/docker-icon.png';
// import googleAnalyticsIcon from '../assets/google-analytics-icon.png';
// import atlasIcon from '../assets/atlas-icon.png';
// import expoIcon from '../assets/expo-icon.png';
// import myAtomLogo from '../assets/my-atom-icon.png';
// import zIndex from '@mui/material/styles/zIndex';

import brainIcon from '../assets/brain-icon.png';
import patientCareIcon from '../assets/patient-care-icon.png';
import boxIcon from '../assets/box-icon.png';
import dnaIcon from '../assets/dna-icon.png';
import collegeIcon from '../assets/college-icon.png';
import threeDIcon from '../assets/3d-icon.png';
import communicationIcon from '../assets/social-icon.png'
import bubbleBunch from '../assets/favicon-bubble-bunch.png'


// import '../styles/SphereTwoStyle.css'
import $ from 'jquery';
// import BoxShadow from 'react-native-shadow';
// import InfoIcon from "@mui/material/InfoIcon";
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
// import { Link } from 'react-router-dom';
//* Portfolio  ~ Project List (page)
//* SingleProject ~ Single Project (component)

// const styles = {
//     section: {
//         backgroundColor: 'black'
//     }
// }
// const styles = {
//     boxShadow: '1px 2px 9px #00FFFF',
//     margin: '4em',
//     padding: '1em'
// }
// added style to section, ImageListItem
// const styles = {
//     Background: {
//         color: 'black'
//     }
// }
// function Element({ id, onClick }) {
//     return <div onClick={() => onClick(id)}>Element{id}</div>
// }
function CirclesInCircles() {
    // const [selectedSphere, setSelectedSphere] = useState(null);
    // const [showAdditionalElement, setShowAdditionalElement] = useState(false);
    // const { text } = props
    const [isActive, setIsActive] = useState(false)
    const [activeId, setActiveId] = useState(null)

    const [zIndex, setZIndex] = useState(1);
    const [isVisible, setIsVisible] = useState(true);
    // const [position, setPosition] = useState({ z: 1 })
    // const [isClicked, setIsClicked] = useState(false)
    // const [isZ, setIsZ] = useState(null)

    const [selectedId, setSelectedId] = useState(0);
    function handleSphereClick(id) {
        // const sphere = $('#sphere-' + id);
        console.log(`Sphere with id ${id} clicked!`);

        // if (selectedId === 1) {

        //     return <button onClick={handleVisibility}>Exit</button>
        // }
        // setSelectedId(id)
        // renderButton()
        // $('#sphere-' + id).toggleClass('active').siblings().removeClass('active');
        // setActiveId(id)
        // this.setState({
        //     x: x2,
        //     y: y2
        // });
        // $('#' + id).toggleClass('active').siblings().removeClass('active');
        // handleZ()
        // if (id === activeId) {
        //     setIsActive(true)
        //     zIndex = 3
        // } else {
        //     setIsActive(false)
        //     zIndex = 1
        // }
        // handleClick(id)

        // const sphere = document.getElementById(id)
        // sphere.style.zIndex = 2;
        // setClickedSphere(sphere)
        // setSelectedSphere(SphereTwo)
    }
    // function renderButton() {
    //     if (selectedId === 1) {
    //         return <button onClick={handleVisibility}>Exit</button>
    //     }
    // }

    const handleVisibility = () => {
        setSelectedId(null)
    }

    // function handleZ() {
    //     setIsVisible(!isVisible);
    //     // setZIndex(zIndex + 5);
    // }

    // const handleBack = () => {
    //     setZIndex(zIndex - 5);
    // };
    // const handleClick = (id) => {
    //     if (id === 0) {
    //         zIndex = 3;
    //         // setIsClicked(true)
    //         // setIsZ(true)

    //     } else {
    //         zIndex = 1;
    //         // setIsClicked(false)
    //         // setIsZ(false)
    //     }
    //     if (id === 1) {
    //         zIndex = 3
    //         // setIsClicked(true)
    //         // setIsZ(true)

    //     } else {
    //         zIndex = 1
    //         // setIsClicked(false)
    //         // setIsZ(false)
    //     }

    // if (!isActive) {
    //     setIsActive(true)
    //     // setPosition(x, y, z)
    //     setPosition({ z: '3' })
    // } else {
    //     setIsActive(false)
    //     setPosition({ z: 1 })
    //     // setPosition({x: '115px', y: '365px', z: '1'})
    // }
    // }
    // function handleResetClick(x, y,) {
    //     ;
    //     this.setState({
    //         x: x,
    //         y: y
    //     })
    // }
    // function handleResetClick(x, y) {
    //     this.setState({
    //         x: x,
    //         y: y
    //     });
    // }

    return (
        <section style={{ marginTop: '0px', fontFamily: 'Climate Crisis', height: '100%' }}>
            <div className='container' style={{ marginTop: '200px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: "absolute", height: "300px", width: '300px', borderRadius: '200px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)', top: '506px', left: '36%' }}>

                    {/* <p style={{ position: 'absolute', top: '20%', left: '28%' }}>JavaScript</p> */}
                    <span style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative', textAlign: 'center' }}>
                        <p style={{ position: 'absolute', marginTop: '20px', marginLeft: '80px', color: 'white' }}></p>
                        {/* <img src={bubbleBunch} style={{ maxWidth: '100%', maxHeight: '100%' }}></img> */}
                    </span>

                    <div id="sphere-container">

                        <SphereTwo x={45} y={210} z={0} color='#353535' text='Education' id='1' onClick={() => setSelectedId(1)} hoverColor='transparent linear-gradient(180deg, #535353 0%, #111111 100%) 0% 0% no-repeat padding-box' srcIcon={collegeIcon} textColor='#535353' notHoverColor='transparent linear-gradient(180deg, #EAD5FE 0%, #E0E0E0 11%, #E4E4E6 26%, #EFEEF5 50%, #E7EAE9 71%, #ECFBF2 81%, #FFF5FC 100%) 0% 0% no-repeat padding-box' width='75px' height='75px' width2='250px' height2='250px' text2={`UCLA (2022-2023):\nCertified Full-Stack Web Developer Boot Camp\n` + `\n` + `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` + `\r` + ` UC Berkeley (2016-2020): \r\n B.S. in Molecular & Cellular Biology`} className='sphere' />


                        <SphereTwo x={105} y={225} z={0} color='#FF5722' text='Perceptual Abilities' id='sphere-2' onClick={() => this.handleSphereClick(2)} hoverColor='transparent linear-gradient(180deg, #212326 0%, #6A6C6E 100%) 0% 0% no-repeat padding-box' srcIcon={threeDIcon} textColor='#000000' notHoverColor='transparent linear-gradient(180deg, #EAD5FE 0%, #E0E0E0 11%, #E4E4E6 26%, #EFEEF5 50%, #E7EAE9 71%, #ECFBF2 81%, #FFF5FC 100%) 0% 0% no-repeat padding-box' width='75px' height='75px' width2='250px' height2='250px' text2='My pre-medical journey involved interpreting & creating visual representations of data to reveal patterns and relationships, which combined theoretical knowledge with analytical skill. My free time creating vectors allows me to build and deconstruct, utilizing the power of reverse engineering and code.' className='sphere' />


                        <SphereTwo x={163} y={215} z={0} color='#FF5722' text='Communication' id='sphere-3' onClick={() => handleSphereClick(3)} hoverColor='transparent linear-gradient(180deg, #3685C6 0%, #27469F 100%) 0% 0% no-repeat padding-box' srcIcon={communicationIcon} textColor='#3685C6' notHoverColor='transparent linear-gradient(180deg, #E5E4EA 0%, #EFEEF5 50%, #ECFBF2 81%, #FFF5FC 100%) 0% 0% no-repeat padding-box' width='75px' height='75px' width2='250px' height2='250px' text2='My experience as an Undergraduate Instructor and the Chi Omega Sorority Social Coordinator over several years required strong communication and leadership skills, and the ability to adapt to diverse groups and work styles.' className='sphere' />


                        <SphereTwo x={10} y={165} z={0} color='#61DAFB' text='Neuroscienc & Psychology' id='sphere-4' onClick={() => this.handleSphereClick(4)} hoverColor='transparent linear-gradient(180deg, #EA3388 0%, #751A44 100%) 0% 0% no-repeat padding-box' srcIcon={brainIcon} textColor='#FF0089' notHoverColor='transparent linear-gradient(180deg, #E5E4EA 0%, #EFEEF5 50%, #ECFBF2 81%, #FFF5FC 100%) 0% 0% no-repeat padding-box' width='75px' height='75px' width2='250px' height2='250px' text2='6+ years of Neuroscience and 2 years of Psychology research exposed me to the importance of programming in data analysis and modeling. Research and development both involve studying complex systems, solving problems analytically, and testing.' />


                        <SphereTwo x={70} y={170} z={0} color='#2E64A4' text='Patient Care' id='sphere-5' onClick={() => this.handleSphereClick(5)} hoverColor='transparent linear-gradient(180deg, #2443B5 0%, #12225B 100%) 0% 0% no-repeat padding-box' srcIcon={patientCareIcon} textColor='#1844BC' notHoverColor='transparent linear-gradient(180deg, #E5E4EA 0%, #EFEEF5 50%, #ECFBF2 81%, #FFF5FC 100%) 0% 0% no-repeat padding-box' width='75px' height='75px' width2='250px' height2='250px' text2='From Neurology to Gastrointerology and Emergency-Medicine, 6+ years working patient care  to understand people and their health needs opened my eyes to the importance of reliable electronic health systems and inspired me to improve digital experience.' className='sphere' />


                        <SphereTwo x={140} y={175} z={0} color='#77B064' text='Inventory Logistics' id='sphere-6' onClick={() => this.handleSphereClick(6)} hoverColor='transparent linear-gradient(180deg, #997854 0%, #4D3C2A 100%) 0% 0% no-repeat padding-box' srcIcon={boxIcon} textColor='#9F774D' notHoverColor='transparent linear-gradient(180deg, #E5E4EA 0%, #EFEEF5 50%, #ECFBF2 81%, #FFF5FC 100%) 0% 0% no-repeat padding-box' width='75px' height='75px' width2='250px' height2='250px' text2='My work in supply chain logistics at a healthcare startup company elucidated the power of software applications to automate processes and improve efficiency amidst high demand and shortages in testing supplies throughout the pandemic.' className='sphere' />


                        <SphereTwo x={205} y={175} z={0} color='#353535' text='STEM' id='sphere-7' onClick={() => this.handleSphereClick(7)} hoverColor='transparent linear-gradient(180deg, #7F93A7 0%, #D06C71 100%) 0% 0% no-repeat padding-box' srcIcon={dnaIcon} textColor='#7894AB' notHoverColor='transparent linear-gradient(180deg, #E5E4EA 0%, #EFEEF5 50%, #ECFBF2 81%, #FFF5FC 100%) 0% 0% no-repeat padding-box' width='75px' height='75px' width2='250px' height2='250px' text2='As a Molecular & Cellular Biology major, I was fascinated by the mechanisms that give rise to the diversity and complexity of life. I reailzed coding could be used to model and simulate these molecular interactions, allowing for a deeper understanding of biological processes.' className='sphere' />
                        {/* <Sphere x={35} y={75} z={0} onClick={handleSphereClick} /> */}
                        {/* <Sphere x={75} y={75} z={0} onClick={handleSphereClick} /> */}
                        {/* <Sphere x={105} y={75} z={0} onClick={handleSphereClick} /> */}

                        {/* <button onClick={() => handleResetClick(id)}>Reset Sphere Position</button> */}

                    </div>
                    {/* <div>
                        {selectedId ? handleSphereClick() : !handleSphereClick()}
                    </div> */}

                </div>

            </div>



            {/* <Background style={styles.Background}>


            </Background> */}
            {/* <div>
                <Card />
            </div> */}

        </section >
    );
}
// const cardData = [
//     {
//         img: `${shangoo}`
//     }
// ]

const itemData = [
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5OGM1MGIzNjc0MzAwYzliZDk2OWNmZTU4OWU0NDMyY2UyZjJjNSZjdD1n/emFmKxgQdkMOumVPhf/giphy.gif',
        title: 'Etiquette - Nail Salon Booking',
        author: '@kaylacasale @bharatrai @salmaloum',
        rows: 2,
        cols: 2,
        featured: true,
        link: 'https://etiquette.herokuapp.com/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNmNTQ4YzI1NjgxZGQ0OTdlMWNhNTdiMWQyMGM4MmQ1ZDc3ODlhMiZjdD1n/5DK2cpXXE8ILNqX9pc/giphy.gif',
        title: 'Blog For Techs - Tech Blog',
        author: '@kaylacasale',
        link: 'https://guarded-headland-91004.herokuapp.com/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODMzM2ZlYmMzZTU3MjVhOGE0OThlMTdhOTg0NjE2YzdiYTgyYjY4NSZjdD1n/cqMuhqltXsS7QlGU50/giphy.gif',
        title: `What's the Weather - US Weather Dashboard`,
        author: '@kaylacasale',
        link: 'https://kaylacasale.github.io/whats-the-weather/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzQ0OWViNGVhZGIyZjkzNzI4YTVjN2Q4MDgxNDFkZjBiZjM0NWM1YiZjdD1n/OaKJCdN4PbLMUjRFAt/giphy.gif',
        title: 'WAKO - Real-time Real Estate',
        author: '@kaylacasale @williamvoit @ambergreenberg @owengarret',
        cols: 2,
        link: 'https://wvoigt722.github.io/uclaTeamProject/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWY4YTgyZGQzZDNmY2ViOGJjMTZlMGExZTgxZTUzNjVhMDBhZTg0YyZjdD1n/548usG7ovvdlAjwGQo/giphy.gif',
        title: 'Gs56thPick - Horse Racing Updates',
        author: '@kaylacasale',
        cols: 2,
        link: 'https://gsbdaypicks.herokuapp.com/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTY0MmJlY2NiOTZiNjI3YTI1ZmFiNjJmOWRmYmRkM2UzYWZhMjJmZSZjdD1n/3C9NlxmNLEOQ0kbf7j/giphy.gif',
        title: 'Jotter - Note-Taking App',
        author: '@kaylacasale',
        rows: 2,
        cols: 2,
        featured: true,
        link: 'https://jotter-notetakerapp.herokuapp.com/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTRlZDRjZTM1NDFmOWNiZjJhNzdjZDFjNTg2Y2RkNTE2MDg4Y2IzMyZjdD1n/DeaZM3tmUZnUdRZZ27/giphy.gif',
        title: 'My Metro Buddy - Quick & Reliable Metro Data',
        author: '@kaylacasale @williamvoit @ambergreenberg @owengarret',
        link: 'https://metro-buddy.herokuapp.com/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmI4YmQ3YTFmMTM0YWYwYjIxMjliNDczOTQzM2VjYjczZTM4ODJjOCZjdD1n/Nlhf6GgN46IyYgRcuE/giphy.gif',
        title: 'Work Your Schedule - Workday Scheduler',
        author: '@kaylacasale',
        link: 'https://kaylacasale.github.io/work-your-schedule/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWY1NzNlZmM0YTNmYTY3MGJmZWY4NmNkNDAzM2YxYjQ2NjhjMDk1MCZjdD1n/7LzJHaURMv7FzogBtW/giphy.gif',
        title: 'Coding Quiz - Assessment for Developers',
        author: '@kaylacasale',
        rows: 2,
        cols: 2,
        link: 'https://kaylacasale.github.io/code-quiz/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q4ZWNkNDNkM2UzMDYzMTJmN2M5YWFmNTM0ZDI0MGEzNjA0YjNhYSZjdD1n/uEEXByvQixnkNSla4Y/giphy.gif',
        title: 'pA$sWoRd gEuerA+oR - Generate Random Strings',
        author: '@kaylacasale',
        link: 'https://kaylacasale.github.io/generate-password/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBkYzI1Y2NkNTBlMDM2MTQ2YjQ1YjA3YjkyZDc2YzNjZGYwMTdlNiZjdD1n/6JDvCpOmLp1jkElkBb/giphy.gif',
        title: 'Portfolio - Version 1',
        author: '@kaylacasale',
        link: 'https://kaylacasale.github.io/portfolio/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2QxMTNmOGM1NDc1ODg5ODUzNjA3NjRjMTczZDRiODdhMjAwMWJjYSZjdD1n/s3bTllyMaDBQI9KW0j/giphy.gif',
        title: 'Horiseon Web App - Refactored',
        author: '@kaylacasale',
        cols: 2,
        link: 'https://kaylacasale.github.io/horiseon-refactor-accessibility/'
    },
];
export default CirclesInCircles

