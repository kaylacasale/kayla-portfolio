import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from "@mui/material/IconButton";
import Card from '../components/Card'
// import PortfolioBackground from '../components/PortfolioBackground'
import '../styles/Background.css'
import '../styles/PortfolioStyle.css'
import Background from '../components/Background';
import MovingComponent from 'react-moving-text'
import ReactImageListMasonry from '../components/ReactImageListMasonry';
import shangoo from '../assets/shangoo-main.PNG'
import BlockButton from '../components/BlockButton';

import Sphere from '../components/Sphere'

import reactIcon from '../assets/react-icon.png';
import jQueryIcon from '../assets/jQuery-icon.png';
import nodeIcon from '../assets/node-icon.png';
import expressIcon from '../assets/express-icon.png';
import javascriptIcon from '../assets/javascript-icon.png';
import frameworksIcon from '../assets/frameworks-icon.png';
import htmlIcon from '../assets/html-icon.png';
import cssIcon from '../assets/css-icon.png';
import matlabIcon from '../assets/matlab-icon.png';
import phpIcon from '../assets/php-icon.png';
import swiftIcon from '../assets/swift-icon.png';
import typescriptIcon from '../assets/typescript-icon.png';
import languagesIcon from '../assets/languages-icon.png';

import databaseIcon from '../assets/database-technologies-icon.png';
import mySQLIcon from '../assets/mysql-icon.png';
import postgreSQLIcon from '../assets/postgreSQL-icon.png';
import mongodbIcon from '../assets/mongdb-icon.png';
import graphQLIcon from '../assets/graphql-icon.png';
import bootstrapIcon from '../assets/bootstrap-icon.png';
import materialUIIcon from '../assets/materialUI-icon.png';
import jawsDBIcon from '../assets/jawsdb-icon.png';
import dynamoDBIcon from '../assets/dynamodb-icon.png';
import apolloIcon from '../assets/apollo-icon.png';
import vscodeIcon from '../assets/vscode-icon.png';

import idesIcon from '../assets/ides-icon.png';
import xcodeIcon from '../assets/xcode-icon.png';

import versionControlIcon from '../assets/version-control-icon.png';
import gitHubIcon from '../assets/github-icon.png';
import gitIcon from '../assets/git-icon.png';
import gitHubPagesIcon from '../assets/github-pages-icon.png';

import projectManagementIcon from '../assets/project-management-icon.png';
import joomlaIcon from '../assets/joomla-icon.png';
import nulabBacklogIcon from '../assets/nulab-backlog-icon.png';
import agileIcon from '../assets/agile-icon.png';
import mondayIcon from '../assets/monday-icon.png';
import airtablesIcon from '../assets/airtables-icon.png';
import slackIcon from '../assets/slack-icon.png';
import advancedMdIcon from '../assets/advancedMd-icon.png';

import developmentAndTestingIcon from '../assets/development-and-testing-icon.png';
import workbenchIcon from '../assets/workbench-icon.png';
import postmanIcon from '../assets/postman-icon.png';
import insomniaIcon from '../assets/insomnia-icon.png';
import compassIcon from '../assets/compass-icon.png';
import herokuIcon from '../assets/heroku-icon.png';
import dockerIcon from '../assets/docker-icon.png';
import googleAnalyticsIcon from '../assets/google-analytics-icon.png';
import atlasIcon from '../assets/atlas-icon.png';
import expoIcon from '../assets/expo-icon.png';



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

function Portfolio() {
    const [spheresLoaded, setSpheresLoaded] = useState(0);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSpheresLoaded((prev) => prev + 1);
        }, 200); // Change the delay time here



        return () => clearTimeout(timeoutId);
    }, [spheresLoaded]);

    const handleSphereClick = () => {
        console.log("Sphere clicked!");
    }
    return (
        <section style={{ marginTop: '3em', fontFamily: 'Climate Crisis', height: '1000px' }}>
            <div className='container row' style={{ display: 'flex', marginTop: '200px', justifyContent: 'center' }}>
                <div id='zoom' style={{ position: "relative", height: "300px", width: '300px', background: 'transparent radial-gradient(closest-side at 50% 50%, #F0EFF6 0%, #000000 100%) 0% 0% no-repeat padding-box', width: '300px', height: '300px', borderRadius: '200px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} className='bounce-in'>

                    {/* <p style={{ position: 'absolute', top: '20%', left: '28%' }}>JavaScript</p> */}
                    <span style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative', textAlign: 'center', display: 'block', alignItems: 'center' }}>
                        <p style={{ position: 'absolute', marginTop: '20px', width: '100%', color: 'white' }}>Languages</p>
                        <img src={languagesIcon} style={{ maxWidth: '80%', maxHeight: '80%', marginTop: '60px' }}></img>
                    </span>
                    {spheresLoaded >= 1 && (
                        <Sphere x={25} y={110} z={-1} color='#353535' text='PHP...' onClick={handleSphereClick} hoverColor='#6C7EB7' srcIcon={phpIcon} textColor='#6C7EB7' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #F0EFF6 0%, #000000 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 2 && (
                        <Sphere x={55} y={110} z={-1} color='#FF5722' text='Swift' onClick={handleSphereClick} hoverColor='#FF5722' srcIcon={swiftIcon} textColor='#FF5722' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #F0EFF6 0%, #000000 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 3 && (
                        <Sphere x={85} y={110} z={-1} color='#FF5722' text='TypeScript' onClick={handleSphereClick} hoverColor='#3178C6' srcIcon={typescriptIcon} textColor='#3178C6' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #F0EFF6 0%, #000000 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 4 && (
                        <Sphere x={10} y={75} z={0} color='#61DAFB' text='MATLAB' onClick={handleSphereClick} hoverColor='transparent linear-gradient(180deg, #B72C0F 0%, #FFAC0F 53%, #6DCDC4 100%) 0% 0% no-repeat padding-box' srcIcon={matlabIcon} textColor='#C3410F' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #F0EFF6 0%, #000000 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 5 && (
                        <Sphere x={40} y={75} z={0} color='#2E64A4' text='CSS...' onClick={handleSphereClick} hoverColor='#004CE8' srcIcon={cssIcon} textColor='#004CE8' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #F0EFF6 0%, #000000 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 6 && (
                        <Sphere x={70} y={75} z={0} color='#77B064' text='HTML' onClick={handleSphereClick} hoverColor='#FF641A' srcIcon={htmlIcon} textColor='#FF641A' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #F0EFF6 0%, #000000 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 7 && (
                        <Sphere x={100} y={75} z={0} color='#353535' text='JavaScript' onClick={handleSphereClick} hoverColor='#E4A126' srcIcon={javascriptIcon} textColor='#E4A126' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #F0EFF6 0%, #000000 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {/* <Sphere x={35} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={75} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={105} y={75} z={0} onClick={handleSphereClick} /> */}
                </div>
                <div id='zoom' style={{ position: "relative", background: 'transparent radial-gradient(closest-side at 50% 50%, #E2BA48 0%, #D49F41 100%) 0% 0% no-repeat padding-box', width: '300px', height: '300px', borderRadius: '200px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} className='bounce-in'>

                    {/* <p style={{ position: 'absolute', top: '20%', left: '28%' }}>JavaScript</p> */}
                    <span style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative', textAlign: 'center', display: 'block' }}>
                        <p style={{ position: 'absolute', marginTop: '20px', width: '100%', color: 'white' }}>Frameworks</p>
                        <img src={frameworksIcon} style={{ maxWidth: '80%', maxHeight: '80%', marginTop: '60px' }}></img>
                    </span>
                    {spheresLoaded >= 1 && (
                        <Sphere x={25} y={110} z={-1} color='#353535' text='Bootstrap...' onClick={handleSphereClick} hoverColor='#4F06BC' srcIcon={bootstrapIcon} textColor='#4F06BC' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E2BA48 0%, #F6EAC6 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 2 && (
                        <Sphere x={55} y={110} z={-1} color='#0081CB' text='MaterialUI' onClick={handleSphereClick} hoverColor='#0081CB' srcIcon={materialUIIcon} textColor='#0081CB' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E2BA48 0%, #F6EAC6 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 3 && (
                        <Sphere x={85} y={110} z={-1} color='#0081CB' text='Apollo' onClick={handleSphereClick} hoverColor='#3E1CC1' srcIcon={apolloIcon} textColor='#3E1CC1' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E2BA48 0%, #F6EAC6 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 4 && (
                        <Sphere x={10} y={75} z={0} color='#61DAFB' text='React' onClick={handleSphereClick} hoverColor='#61DAFB' srcIcon={reactIcon} textColor='#61DAFB' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E2BA48 0%, #F6EAC6 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 5 && (
                        <Sphere x={40} y={75} z={0} color='#2E64A4' text='jQuery' onClick={handleSphereClick} hoverColor='#2E64A4' srcIcon={jQueryIcon} textColor='#2E64A4' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E2BA48 0%, #F6EAC6 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 6 && (
                        <Sphere x={70} y={75} z={0} color='#77B064' text='Node.js' onClick={handleSphereClick} hoverColor='#77B064' srcIcon={nodeIcon} textColor='#77B064' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E2BA48 0%, #F6EAC6 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 7 && (
                        <Sphere x={100} y={75} z={0} color='#353535' text='Express.js' onClick={handleSphereClick} hoverColor='#353535' srcIcon={expressIcon} textColor='#353535' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E2BA48 0%, #F6EAC6 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {/* <Sphere x={35} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={75} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={105} y={75} z={0} onClick={handleSphereClick} /> */}
                </div>
                <div id='zoom' style={{ position: "relative", background: 'transparent radial-gradient(closest-side at 50% 50%, #E4E4E4 0%, #469DDC 100%) 0% 0% no-repeat padding-box', width: '300px', height: '300px', borderRadius: '200px', display: 'flex', float: 'right', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} className='bounce-in'>

                    {/* <p style={{ position: 'absolute', top: '20%', left: '28%' }}>JavaScript</p> */}
                    <span style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative', textAlign: 'center', display: 'block' }}>
                        <p style={{ position: 'absolute', marginTop: '20px', width: '100%', color: 'white' }}>Databases</p>
                        <img src={databaseIcon} style={{ maxWidth: '80%', maxHeight: '80%', marginLeft: '0px', marginTop: '60px' }}></img>
                    </span>
                    {spheresLoaded >= 1 && (
                        <Sphere x={25} y={110} z={0} color='#2E64A4' text='JawsDB' onClick={handleSphereClick} hoverColor='#003B6D' srcIcon={jawsDBIcon} textColor='#003B6D' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E4E4E4 0%, #469DDC 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 2 && (
                        <Sphere x={55} y={110} z={0} color='#2E64A4' text='DynamoDB' onClick={handleSphereClick} hoverColor='#0D416D' srcIcon={dynamoDBIcon} textColor='#0D416D' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E4E4E4 0%, #469DDC 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 3 && (
                        <Sphere x={10} y={75} z={0} color='#61DAFB' text='MySQL' onClick={handleSphereClick} hoverColor='#26557C' srcIcon={mySQLIcon} textColor='#26557C' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E4E4E4 0%, #469DDC 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 4 && (
                        <Sphere x={40} y={75} z={0} color='#2E64A4' text='PostgreSQL' onClick={handleSphereClick} hoverColor='#2E64A4' srcIcon={postgreSQLIcon} textColor='#2E64A4' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E4E4E4 0%, #469DDC 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 5 && (
                        <Sphere x={70} y={75} z={0} color='#77B064' text='MongoDB' onClick={handleSphereClick} hoverColor='#366931' srcIcon={mongodbIcon} textColor='#366931' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E4E4E4 0%, #469DDC 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 6 && (
                        <Sphere x={100} y={75} z={0} color='#353535' text='GraphQL' onClick={handleSphereClick} hoverColor='#CA3097' srcIcon={graphQLIcon} textColor='#CA3097' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #E4E4E4 0%, #469DDC 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {/* <Sphere x={35} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={75} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={105} y={75} z={0} onClick={handleSphereClick} /> */}
                </div>
                <div id='zoom' style={{ position: "relative", background: 'transparent radial-gradient(closest-side at 50% 50%, #767676 0%, #E5E5E5 100%) 0% 0% no-repeat padding-box', width: '300px', height: '300px', borderRadius: '200px', display: 'flex', float: 'right', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} className='bounce-in'>

                    {/* <p style={{ position: 'absolute', top: '20%', left: '28%' }}>JavaScript</p> */}
                    <span style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative', textAlign: 'center', display: 'block', alignItems: 'center' }}>
                        <p style={{ position: 'absolute', marginTop: '20px', color: 'white', width: '100%' }}>IDEs</p>
                        <img src={idesIcon} style={{ maxWidth: '80%', maxHeight: '80%', marginLeft: '0px', marginTop: '60px' }}></img>
                    </span>
                    {/* <Sphere x={25} y={105} z={0} color='#2E64A4' text='JawsDB' onClick={handleSphereClick} hoverColor='#003B6D' srcIcon={vscodeIcon} textColor='#003B6D' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #C7C7C7 0%, #646464 100%) 0% 0% no-repeat padding-box' />
                    <Sphere x={55} y={105} z={0} color='#2E64A4' text='DynamoDB' onClick={handleSphereClick} hoverColor='#0D416D' srcIcon={dynamoDBIcon} textColor='#0D416D' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #C7C7C7 0%, #646464 100%) 0% 0% no-repeat padding-box' /> */}
                    {spheresLoaded >= 1 && (
                        <Sphere x={40} y={75} z={0} color='#61DAFB' text='VSCode' onClick={handleSphereClick} hoverColor='#FEFEFE' srcIcon={vscodeIcon} textColor='#FEFEFE' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #C7C7C7 0%, #646464 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 2 && (
                        <Sphere x={70} y={75} z={0} color='#2E64A4' text='XCode' onClick={handleSphereClick} hoverColor='#00A7EC' srcIcon={xcodeIcon} textColor='#00A7EC' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #C7C7C7 0%, #646464 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {/* <Sphere x={70} y={75} z={0} color='#77B064' text='MongoDB' onClick={handleSphereClick} hoverColor='#366931' srcIcon={mongodbIcon} textColor='#366931' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #C7C7C7 0%, #646464 100%) 0% 0% no-repeat padding-box' />
                    <Sphere x={100} y={75} z={0} color='#353535' text='GraphQL' onClick={handleSphereClick} hoverColor='#CA3097' srcIcon={graphQLIcon} textColor='#CA3097' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #C7C7C7 0%, #646464 100%) 0% 0% no-repeat padding-box' /> */}
                    {/* <Sphere x={35} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={75} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={105} y={75} z={0} onClick={handleSphereClick} /> */}
                </div>
                <div id='zoom' style={{ position: "relative", background: 'transparent radial-gradient(closest-side at 50% 50%, #AAE965 0%, #295819 100%) 0% 0% no-repeat padding-box', width: '300px', height: '300px', borderRadius: '200px', display: 'flex', float: 'left', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} className='bounce-in'>

                    {/* <p style={{ position: 'absolute', top: '20%', left: '28%' }}>JavaScript</p> */}
                    <span style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative', textAlign: 'center', display: 'block', alignItems: 'center' }}>
                        <p style={{ position: 'absolute', marginTop: '35px', width: '100%', color: 'white' }}>Version Control</p>
                        <img src={versionControlIcon} style={{ maxWidth: '80%', maxHeight: '80%', marginTop: '60px' }}></img>
                    </span>
                    {/* <Sphere x={25} y={105} z={0} color='#2E64A4' text='JawsDB' onClick={handleSphereClick} hoverColor='#003B6D' srcIcon={jawsDBIcon} textColor='#003B6D' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #AAE965 0%, #295819 100%) 0% 0% no-repeat padding-box' />
                    <Sphere x={55} y={105} z={0} color='#2E64A4' text='DynamoDB' onClick={handleSphereClick} hoverColor='#0D416D' srcIcon={dynamoDBIcon} textColor='#0D416D' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #AAE965 0%, #295819 100%) 0% 0% no-repeat padding-box' /> */}
                    {spheresLoaded >= 1 && (
                        <Sphere x={25} y={75} z={0} color='#61DAFB' text='GitHub' onClick={handleSphereClick} hoverColor='#2B2B26' srcIcon={gitHubIcon} textColor='#2B2B26' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #AAE965 0%, #295819 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 2 && (
                        <Sphere x={55} y={75} z={0} color='#2E64A4' text='Git.....' onClick={handleSphereClick} hoverColor='#FF674B' srcIcon={gitIcon} textColor='#FF674B' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #AAE965 0%, #295819 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 3 && (
                        <Sphere x={85} y={75} z={0} color='#77B064' text='Pages' onClick={handleSphereClick} hoverColor='#2B2B26' srcIcon={gitHubPagesIcon} textColor='#2B2B26' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #AAE965 0%, #295819 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {/* <Sphere x={100} y={75} z={0} color='#353535' text='GraphQL' onClick={handleSphereClick} hoverColor='#CA3097' srcIcon={graphQLIcon} textColor='#CA3097' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #AAE965 0%, #295819 100%) 0% 0% no-repeat padding-box' /> */}
                    {/* <Sphere x={35} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={75} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={105} y={75} z={0} onClick={handleSphereClick} /> */}
                </div>
                <div id='zoom' style={{ position: "relative", background: 'transparent linear-gradient(180deg, #EE4035 0%, #4F91CD 34%, #7AC043 58%, #F9AE41 82%, #F3AF41 100%) 0% 0% no-repeat padding-box', width: '300px', height: '300px', borderRadius: '200px', display: 'flex', float: 'right', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', lineHeight: '15px' }} className='bounce-in'>

                    {/* <p style={{ position: 'absolute', top: '20%', left: '28%' }}>JavaScript</p> */}
                    <span style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative', textAlign: 'center', display: 'block', alignItems: 'center' }}>
                        <p style={{ position: 'absolute', marginTop: '20px', width: '100%', color: 'white' }}>Project Management</p>
                        <img src={projectManagementIcon} style={{ maxWidth: '80%', maxHeight: '80%', marginLeft: '0px', marginTop: '60px' }}></img>
                    </span>
                    {spheresLoaded >= 1 && (
                        <Sphere x={25} y={110} z={0} color='#2E64A4' text='Airtables' onClick={handleSphereClick} hoverColor='#000000' srcIcon={airtablesIcon} textColor='#000000' notHoverColor='transparent linear-gradient(180deg, #EE4035 0%, #4F91CD 34%, #7AC043 58%, #F9AE41 82%, #F3AF41 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 2 && (
                        <Sphere x={55} y={110} z={0} color='#2E64A4' text='Slack' onClick={handleSphereClick} hoverColor='#000000' srcIcon={slackIcon} textColor='#000000' notHoverColor='transparent linear-gradient(180deg, #EE4035 0%, #4F91CD 34%, #7AC043 58%, #F9AE41 82%, #F3AF41 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 3 && (
                        <Sphere x={85} y={110} z={0} color='#2E64A4' text='AdvancedMD' onClick={handleSphereClick} hoverColor='#FB6427' srcIcon={advancedMdIcon} textColor='#FB6427' notHoverColor='transparent linear-gradient(180deg, #EE4035 0%, #4F91CD 34%, #7AC043 58%, #F9AE41 82%, #F3AF41 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 4 && (
                        <Sphere x={10} y={75} z={0} color='#61DAFB' text='Joomla' onClick={handleSphereClick} hoverColor='#000000' srcIcon={joomlaIcon} textColor='#000000' notHoverColor='transparent linear-gradient(180deg, #EE4035 0%, #4F91CD 34%, #7AC043 58%, #F9AE41 82%, #F3AF41 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 5 && (
                        <Sphere x={40} y={75} z={0} color='#2E64A4' text='Nulab Backlog' onClick={handleSphereClick} hoverColor='#42CE9F' srcIcon={nulabBacklogIcon} textColor='#42CE9F' notHoverColor='transparent linear-gradient(180deg, #EE4035 0%, #4F91CD 34%, #7AC043 58%, #F9AE41 82%, #F3AF41 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 6 && (
                        <Sphere x={70} y={75} z={0} color='#77B064' text='Agile...' onClick={handleSphereClick} hoverColor='#000000' srcIcon={agileIcon} textColor='#000000' notHoverColor='transparent linear-gradient(180deg, #EE4035 0%, #4F91CD 34%, #7AC043 58%, #F9AE41 82%, #F3AF41 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 7 && (
                        <Sphere x={100} y={75} z={0} color='#353535' text='monday' onClick={handleSphereClick} hoverColor='#000000' srcIcon={mondayIcon} textColor='#000000' notHoverColor='transparent linear-gradient(180deg, #EE4035 0%, #4F91CD 34%, #7AC043 58%, #F9AE41 82%, #F3AF41 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {/* <Sphere x={35} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={75} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={105} y={75} z={0} onClick={handleSphereClick} /> */}
                </div>
                <div id='zoom' style={{ position: "relative", background: 'transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box', width: '300px', height: '300px', borderRadius: '200px', display: 'flex', float: 'right', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', lineHeight: '15px' }} className='bounce-in'>

                    {/* <p style={{ position: 'absolute', top: '20%', left: '28%' }}>JavaScript</p> */}
                    <span style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative', textAlign: 'center', display: 'block', alignItems: 'center' }}>
                        <p style={{ position: 'absolute', marginTop: '30px', width: '100%', color: 'white' }}>Development & Testing</p>
                        <img src={developmentAndTestingIcon} style={{ maxWidth: '80%', maxHeight: '80%', marginLeft: '0px', marginTop: '60px' }}></img>
                    </span>
                    {/* <Sphere x={40} y={135} z={0} color='#2E64A4' text='Heroku' onClick={handleSphereClick} hoverColor='#430098' srcIcon={herokuIcon} textColor='#430098' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box' /> */}
                    {spheresLoaded >= 1 && (
                        <Sphere x={25} y={50} z={0} color='#2E64A4' text='Atlas' onClick={handleSphereClick} hoverColor='#424950' srcIcon={atlasIcon} textColor='#424950' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 2 && (
                        <Sphere x={85} y={50} z={0} color='#2E64A4' text='ExpoGo' onClick={handleSphereClick} hoverColor='#00001A' srcIcon={expoIcon} textColor='#00001A' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 3 && (
                        <Sphere x={25} y={110} z={0} color='#2E64A4' text='Heroku' onClick={handleSphereClick} hoverColor='#430098' srcIcon={herokuIcon} textColor='#430098' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 4 && (
                        <Sphere x={55} y={110} z={0} color='#2E64A4' text='Docker' onClick={handleSphereClick} hoverColor='#006BC0' srcIcon={dockerIcon} textColor='#006BC0' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 5 && (
                        <Sphere x={85} y={110} z={0} color='#2E64A4' text='Google Analytics' onClick={handleSphereClick} hoverColor='#FB6427' srcIcon={googleAnalyticsIcon} textColor='#FB6427' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box' />
                    )}

                    {/* <Sphere x={100} y={110} z={0} color='#2E64A4' text='Atlas' onClick={handleSphereClick} hoverColor='#424950' srcIcon={atlasIcon} textColor='#424950' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box' /> */}
                    {spheresLoaded >= 6 && (
                        <Sphere x={10} y={75} z={0} color='#61DAFB' text='Workbench' onClick={handleSphereClick} hoverColor='#C8C8C7' srcIcon={workbenchIcon} textColor='#C8C8C7' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 7 && (
                        <Sphere x={40} y={75} z={0} color='#2E64A4' text='Postman' onClick={handleSphereClick} hoverColor='#E9663E' srcIcon={postmanIcon} textColor='#E9663E' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 8 && (
                        <Sphere x={70} y={75} z={0} color='#77B064' text='Insomnia' onClick={handleSphereClick} hoverColor='#4000BF' srcIcon={insomniaIcon} textColor='#4000BF' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {spheresLoaded >= 9 && (
                        <Sphere x={100} y={75} z={0} color='#353535' text='Compass' onClick={handleSphereClick} hoverColor='#13AA52' srcIcon={compassIcon} textColor='#13AA52' notHoverColor='transparent radial-gradient(closest-side at 50% 50%, #3F81B5 0%, #144771 100%) 0% 0% no-repeat padding-box' />
                    )}
                    {/* <Sphere x={35} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={75} y={75} z={0} onClick={handleSphereClick} /> */}
                    {/* <Sphere x={105} y={75} z={0} onClick={handleSphereClick} /> */}
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
export default Portfolio

