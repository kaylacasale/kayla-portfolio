import React, { useEffect, useState, useRef } from 'react';
import '../styles/SkillsStyle.css'
import threeDBubble from '../assets/3d-bubble.svg'
// SMISE images
import smiseScreens from '../assets/SMISE-screen.png'
import smiseScreensFour from '../assets/SMISE-screens-gif.png'
import smiseScreenTools from '../assets/screen-smise-gif-tools.png'
import smiseScreenImplant from '../assets/screen-gif-implant.png'
import smiseScreenImaging from '../assets/screen-smise-gif-imaging.png'

import ymmWelcome from '../assets/YMM-screen-welcome.png'
import Etiquette from '../components/Etiquette';
import BlogForTechs from '../components/BlogForTechs';
import Smise from '../components/Smise';
import Shangoo from '../components/Shangoo';
import Wako from '../components/Wako';
import Jotter from '../components/Jotter';
import MyMetro from '../components/MyMetro';
import { elementAcceptingRef } from '@mui/utils';
import WorkYourSchedule from '../components/WorkYourSchedule';
import CodingQuiz from '../components/CodingQuiz';
import PasswordGenerator from '../components/PasswordGenerator';
import YouMeMix from '../components/YouMeMix';
import WhatsTheWeather from '../components/WhatsTheWeather';
import BackgroundCircles from '../components/BackgroundCircles';
import Section from '../components/Section'
// ultimately use Link to to link to further component than map through that to display main diplay with more info about the item
const Skills = () => {
    // const [itemData, setItemData] = useState(null);

    // const handleClick = (id) => {
    //     const updatedItemData = itemData.map((item) => {
    //         if (item.id === id) {
    //             return { ...item, title: 'This' };
    //         }
    //         return item;
    //     });
    //     setItemData(updatedItemData);
    // }
    const [selectedId, setSelectedId] = useState(0);

    const renderComponent = () => {

        if (selectedId === 1) {
            handleClick()
            return <div><Etiquette /> <button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#F4E4A4', boxShadow: '0px 3px 6px #00000029', zIndex: 10 }} id='wiggle'>Exit</button></div>;
        } else if (selectedId === 2) {
            handleClick()
            return <div><BlogForTechs /><button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#BDF4FB', boxShadow: '0px 3px 6px #00000029' }} id='wiggle'>Exit</button></div>;
        } else if (selectedId === 4) {
            handleClick()
            return <div><Smise /><button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#E8873F', boxShadow: '0px 3px 6px #00000029', background: 'transparent linear-gradient(180deg, #E4632A 0%, #EBA73B 23%, #EFBF41 34%, #F89468 46%, #EBA63A 58%, #FDE37B 73%, #F3D76A 86%, #F5DA5F 100%) 0% 0% no-repeat padding-box', borderColor: '#F3D87E' }} id='wiggle'>Exit</button></div>;
        } else if (selectedId === 5) {
            handleClick()
            return <div><Shangoo /><button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#525A70', boxShadow: '0px 3px 6px #00000029', color: 'white', background: 'transparent linear-gradient(180deg, #365D90 0%, #DB7450 100%) 0% 0% no-repeat padding-box', borderColor: '#286094' }} id='wiggle'>Exit</button></div>;
        } else if (selectedId === 7) {
            handleClick()
            return <div><Wako /><button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#C5C7D5', borderColor: '#A2C4D7', boxShadow: '0px 3px 6px #00000029', color: 'black' }} id='wiggle'>Exit</button></div>;
        } else if (selectedId === 9) {
            handleClick()
            return <div><Jotter /><button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#5DBAA4', borderColor: '#5DBAA4', boxShadow: '0px 3px 6px #00000029', color: 'white' }} id='wiggle'>Exit</button></div>;
        } else if (selectedId === 10) {
            handleClick()
            return <div><MyMetro /><button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#DBFBEF', borderColor: '#71A1FF', boxShadow: '0px 3px 6px #00000029', color: 'white', background: 'transparent linear-gradient(239deg, #4FAFF5 0%, #8D17F3 100%) 0% 0% no-repeat padding-box' }} id='wiggle'>Exit</button></div>;
        } else if (selectedId === 11) {
            handleClick()
            return <div><WorkYourSchedule /><button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#DBFBEF', borderColor: '#71A1FF', boxShadow: '0px 3px 6px #00000029', color: 'white', background: 'transparent linear-gradient(239deg, #4FAFF5 0%, #8D17F3 100%) 0% 0% no-repeat padding-box' }} id='wiggle'>Exit</button></div>;
        } else if (selectedId === 12) {
            handleClick()
            return <div><CodingQuiz /><button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#DBFBEF', borderColor: '#71A1FF', boxShadow: '0px 3px 6px #00000029', color: 'white', background: 'transparent linear-gradient(239deg, #4FAFF5 0%, #8D17F3 100%) 0% 0% no-repeat padding-box' }} id='wiggle'>Exit</button></div>;
        } else if (selectedId === 13) {
            handleClick()
            return <div><PasswordGenerator /><button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#DBFBEF', borderColor: '#535963', boxShadow: '0px 3px 6px #00000029', color: 'white', background: 'transparent linear-gradient(180deg, #D56D6C 0%, #FFD6EE 47%, #9596DB 100%) 0% 0% no-repeat padding-box' }} id='wiggle'>Exit</button></div>;
        } else if (selectedId === 6) {
            handleClick()
            return <div><YouMeMix /><button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#DBFBEF', borderColor: '#535963', boxShadow: '0px 3px 6px #00000029', color: 'white', background: 'transparent linear-gradient(180deg, #010128 0%, #692659 46%, #E3B863 100%) 0% 0% no-repeat padding-box' }} id='wiggle'>Exit</button></div>;
        } else if (selectedId === 3) {
            handleClick()
            return <div><WhatsTheWeather /><button className='exitBtn' onClick={handleComponentVisibility} style={{ backgroundColor: '#DBFBEF', borderColor: '#535963', boxShadow: '0px 3px 6px #00000029', color: 'white', background: 'transparent conic-gradient(from 90deg at 50% 50%, #5DB7EB 0.00%, #B3B8EB 7.77%, #7FAEDC 19.25%, #B3AFFA 26.87%, #FECAFD 37.45%, #509ACC 44.42%, #4DB2E1 50.83%, #B0E7F2 59.83%, #3593C0 67.41%, #6B90BA 74.06%, #B494C1 81.83%, #3BC8EA 90.78%, #4BD3F3 100.00%) 0% 0% no-repeat padding-box' }} id='wiggle'>Exit</button></div>;
        }
    }

    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(true);

    };

    const handleComponentVisibility = () => {
        setSelectedId(null);
    }
    //  after pressing an item (bubble/individual project) in the map function, handleClick() is called in the renderComponent function before returning the div with the component
    function handleClick() {
        // scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        const element = document.getElementById('my-element');
        const elementPosition = element.getBoundingClientRect().bottom;
        // const viewportHeight = window.innerHeight;
        // const scrollHeight = document.documentElement.scrollHeight;
        const offset = window.innerHeight - elementPosition - 320;
        window.scrollBy({
            top: offset,
            behavior: 'smooth'
        });
    }

    const scrollToRef = useRef(null);
    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentIndex([Math.floor(Math.random() * this.length)])
    //     }, 1000)
    //     return () => clearInterval(intervalId);
    // }, [])

    // const [selected, setSelected] = React.useState(false);

    // const toggle = () => {
    //     setSelected(!selected)
    // }


    return (

        <div id='canvas' style={{ fontFamily: 'Climate Crisis' }}>
            <div style={{ left: '-5%', top: '0px', position: 'absolute' }}>
                <Section />
            </div>
            {/* <div style={{ zIndex: -1 }}>
                <BackgroundCircles />
            </div> */}


            {itemData.map((item) => (

                // <a href={item.link} target="_blank" >
                <div key={item.id} onClick={() => setSelectedId(item.id)} className='bounce-in' >




                    <div id='ball-1' class='bubble' style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.widthBubbleOne}`, height: `${item.heightBubbleOne}`, borderRadius: `${item.borderRadius}`, opacity: `${item.opacityBubbleOne}`, position: 'absolute', boxShadow: '0px 3px 6px #00000029', background: `${item.backgroundBubbleOne}` }} ></div>
                    <div id='ball-1' class='bubble' style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}`, borderRadius: `${item.borderRadius}`, position: 'absolute', opacity: 1 }}>

                        {/* <a href={item.link} target="_blank"><img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5OGM1MGIzNjc0MzAwYzliZDk2OWNmZTU4OWU0NDMyY2UyZjJjNSZjdD1n/emFmKxgQdkMOumVPhf/giphy.gif'></img></a> */}
                        <img src={item.img} style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}`, borderRadius: `${item.borderRadius}`, opacity: .85 }}></img>
                    </div>
                    <div id='ball-1' class={item.class} style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}`, position: 'absolute', opacity: `${item.opacityBubbleTwo}`, textAlign: 'center', borderRadius: `${item.borderRadius}` }}>
                        <p style={{ marginTop: `${item.marginTop}`, color: `${item.color}`, fontSize: `${item.fontSize}`, textShadow: '1px 1px whitesmoke', lineHeight: '20px', fontFamily: 'Climate Crisis' }}>{item.title}</p>
                    </div>

                </div>
            ))
            }
            <div className='component-div' ref={scrollToRef} id='my-element'>
                {selectedId ? renderComponent() : !renderComponent()}
                {/* {isClicked ? <button>Exit</button> : 'No Btn'} */}
            </div>
            {/* <div style={{ zIndex: -1 }}>
                <BackgroundCircles />
            </div> */}

            {/* <img id='threeD' src={threeDBubble}></img> */}
            {/* <svg viewBox="-40 0 150 100" xmlns={threeDBubble} id='threeD'></svg> */}


        </div >
    )
}

const itemData = [
    {
        id: 1,
        img: ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5OGM1MGIzNjc0MzAwYzliZDk2OWNmZTU4OWU0NDMyY2UyZjJjNSZjdD1n/emFmKxgQdkMOumVPhf/giphy.gif'],
        // link: 'https://etiquette.herokuapp.com/',
        top: '60px',
        left: '90%',
        widthBubbleOne: '153px',
        heightBubbleOne: '153px',
        width: '150px',
        height: '150px',
        title: 'Etiquette',
        class: 'bubbleTopYellow',
        color: '#1A1A1A',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.91,
        fontSize: '16px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #F8E7AB 0%, #F3DE84 23%, #F4CC69 34%, #F0B24C 46%, #F6CB62 62%, #F1B850 78%, #F8FFF6 88%, #F5DE8C 100%) 0% 0% no-repeat padding-box',
        marginTop: '40%',
        zIndex: 4
    },
    {
        id: 2,
        img: ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNmNTQ4YzI1NjgxZGQ0OTdlMWNhNTdiMWQyMGM4MmQ1ZDc3ODlhMiZjdD1n/5DK2cpXXE8ILNqX9pc/giphy.gif'],
        link: 'https://guarded-headland-91004.herokuapp.com/',
        top: '50px',
        left: '15%',
        widthBubbleOne: '153px',
        heightBubbleOne: '153px',
        width: '150px',
        height: '150px',
        title: 'Blog for Techs',
        class: 'bubbleTop',
        color: '#65C1FF',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.91,
        fontSize: '12px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent conic-gradient(from 90deg at 50% 50%, #5DB7EB 0.00%, #B3B8EB 7.77%, #7FAEDC 19.25%, #B3AFFA 26.87%, #FECAFD 37.45%, #509ACC 44.42%, #4DB2E1 50.83%, #B0E7F2 59.83%, #3593C0 67.41%, #6B90BA 74.06%, #B494C1 81.83%, #3BC8EA 90.78%, #4BD3F3 100.00%) 0% 0% no-repeat padding-box',
        marginTop: '40%'
    },
    {
        id: 3,
        img: ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODMzM2ZlYmMzZTU3MjVhOGE0OThlMTdhOTg0NjE2YzdiYTgyYjY4NSZjdD1n/cqMuhqltXsS7QlGU50/giphy.gif'],
        link: 'https://kaylacasale.github.io/whats-the-weather/',
        top: '40.5px',
        left: '71%',
        widthBubbleOne: '113px',
        heightBubbleOne: '113px',
        width: '110px',
        height: '110px',
        title: `What's the Weather`,
        class: 'bubbleTopWhiteBlue',
        color: '#65C1FF',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.91,
        fontSize: '9px',
        borderRadius: '90px',
        backgroundBubbleOne: 'transparent conic-gradient(from 90deg at 50% 50%, #5DB7EB 0.00%, #B3B8EB 7.77%, #7FAEDC 19.25%, #B3AFFA 26.87%, #FECAFD 37.45%, #509ACC 44.42%, #4DB2E1 50.83%, #B0E7F2 59.83%, #3593C0 67.41%, #6B90BA 74.06%, #B494C1 81.83%, #3BC8EA 90.78%, #4BD3F3 100.00%) 0% 0% no-repeat padding-box',
        marginTop: '30%'
    },
    {
        id: 4,
        img: ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2VmMTBmYWFkMjhhYWIwZDUxZGJjZDE5Y2RiNjQ1NWMzMzQzZWFiZCZjdD1n/GNMkGHRvKFRaV1hHdB/giphy.gif'],
        // img: [`${smiseScreens}`, `${smiseScreensFour}`, `${smiseScreenTools}`, `${smiseScreenImplant}`, `${smiseScreenImaging}`],
        link: 'https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022',
        top: '291px',
        left: '72.3%',
        widthBubbleOne: '170px',
        heightBubbleOne: '170px',
        width: '168px',
        height: '168px',
        title: 'SMISE',
        class: 'bubbleTopOrange',
        color: '#E6692B',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.91,
        fontSize: '20px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #E4632A 0%, #EBA73B 23%, #EFBF41 34%, #F89468 46%, #EBA63A 58%, #FDE37B 73%, #F3D76A 86%, #F5DA5F 100%) 0% 0% no-repeat padding-box',
        marginTop: '43%'
    },
    {
        id: 5,
        img: ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjIxMThjNTBlYmJjZTBkYjk1MmI0NWU2Mjc5YTI1ZTI4MTMxMGQwNSZjdD1n/1WfTvC5dt6uNzvxTkG/giphy.gif'],
        link: 'https://apps.apple.com/ng/developer/shangoo-inc/id1489129176',
        top: '272px',
        left: '-2.5%',
        widthBubbleOne: '157px',
        heightBubbleOne: '157px',
        width: '155px',
        height: '155px',
        title: 'Shangoo',
        class: 'bubbleTopOrangeBlue',
        color: '#DF7359',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.91,
        fontSize: '20px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #365D90 0%, #DB7450 100%) 0% 0% no-repeat padding-box',
        marginTop: '43%'
    },
    {
        id: 6,
        img: [`${ymmWelcome}`],
        link: 'https://apps.apple.com/ng/developer/shangoo-inc/id1489129176',
        top: '300px',
        left: '48%',
        widthBubbleOne: '152px',
        heightBubbleOne: '152px',
        width: '150px',
        height: '150px',
        title: 'YouMeMix',
        class: 'bubbleTopGoldPurple',
        color: '#CFAC64',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.81,
        fontSize: '18px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #010128 0%, #692659 46%, #E3B863 100%) 0% 0% no-repeat padding-box',
        marginTop: '43%'
    },
    {
        id: 7,
        img: [`https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzQ0OWViNGVhZGIyZjkzNzI4YTVjN2Q4MDgxNDFkZjBiZjM0NWM1YiZjdD1n/OaKJCdN4PbLMUjRFAt/giphy.gif`],
        link: 'https://wvoigt722.github.io/uclaTeamProject/',
        top: '250px',
        left: '31.3%',
        widthBubbleOne: '100px',
        heightBubbleOne: '100px',
        width: '98px',
        height: '98px',
        title: 'WAKO',
        class: 'bubbleTopLightBlue',
        color: '#8CBAD2',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.81,
        fontSize: '18px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #DEEEFF 0%, #C9D0E1 20%, #D7D5E4 46%, #A1C2D6 80%, #A8E0FA 100%) 0% 0% no-repeat padding-box',
        marginTop: '40%'
    },
    {
        id: 8,
        img: [`https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWY4YTgyZGQzZDNmY2ViOGJjMTZlMGExZTgxZTUzNjVhMDBhZTg0YyZjdD1n/548usG7ovvdlAjwGQo/giphy.gif`],
        link: 'https://gsbdaypicks.herokuapp.com/',
        top: '335px',
        left: '96%',
        widthBubbleOne: '102px',
        heightBubbleOne: '102px',
        width: '100px',
        height: '100px',
        title: 'Horse Racing',
        class: 'bubbleTopDarkBlue',
        color: '#566C7A',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.81,
        fontSize: '10px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #A0C8E3 0%, #D3D3D3 18%, #E9EAEA 40%, #868787 68%, #566C7A 84%, #A8D3EF 100%) 0% 0% no-repeat padding-box',
        marginTop: '35%'
    },
    {
        id: 9,
        img: [`https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTY0MmJlY2NiOTZiNjI3YTI1ZmFiNjJmOWRmYmRkM2UzYWZhMjJmZSZjdD1n/3C9NlxmNLEOQ0kbf7j/giphy.gif`],
        link: 'https://jotter-notetakerapp.herokuapp.com/',
        top: '49px',
        left: '53%',
        widthBubbleOne: '117px',
        heightBubbleOne: '117px',
        width: '115px',
        height: '115px',
        title: 'Jotter',
        class: 'bubbleTopLightGreen',
        color: '#58BA9D',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.81,
        fontSize: '18px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #80FDD8 0%, #84D1BB 9%, #BFF0E2 21%, #E9EAEA 46%, #7FB2A3 73%, #69B6A0 88%, #90FFDE 100%) 0% 0% no-repeat padding-box',
        marginTop: '40%'
    },
    {
        id: 10,
        img: [`https://media.giphy.com/media/DeaZM3tmUZnUdRZZ27/giphy.gif`],
        link: 'https://metro-buddy.herokuapp.com/',
        top: '497px',
        left: '13.5%',
        widthBubbleOne: '122px',
        heightBubbleOne: '122px',
        width: '120px',
        height: '120px',
        title: 'My Metro',
        class: 'bubbleTopBluePurple',
        color: '#71A1FF',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.81,
        fontSize: '16px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(239deg, #4FAFF5 0%, #8D17F3 100%) 0% 0% no-repeat padding-box',
        marginTop: '40%'
    },
    {
        id: 11,
        img: [`https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODZhNTlmOTM5OGU5YzEzMGJmZTAzZTYyMjA5MjM5NWExMzI4NjMwZiZjdD1n/FLQC2cAsx6Z1sHIPxR/giphy.gif`],
        link: 'https://kaylacasale.github.io/work-your-schedule/',
        top: '533px',
        left: '61.5%',
        widthBubbleOne: '102px',
        heightBubbleOne: '102px',
        width: '100px',
        height: '100px',
        title: 'Work Your Schedule',
        class: 'bubbleTopBlueGreen',
        color: '#8FDA81',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.81,
        fontSize: '12px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent conic-gradient(from 90deg at 50% 50%, #B5FFA7 0.00%, #96DB96 12.32%, #B1DEEC 26.60%, #6FC2AA 50.74%, #A3EBC2 75.86%, #A5DDD9 88.67%, #77E8F7 100.00%) 0% 0% no-repeat padding-box',
        marginTop: '33%'
    },
    {
        id: 12,
        img: [`https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWY1NzNlZmM0YTNmYTY3MGJmZWY4NmNkNDAzM2YxYjQ2NjhjMDk1MCZjdD1n/7LzJHaURMv7FzogBtW/giphy.gif`],
        link: 'https://kaylacasale.github.io/code-quiz/',
        top: '560px',
        left: '-4%',
        widthBubbleOne: '114px',
        heightBubbleOne: '114px',
        width: '112px',
        height: '112px',
        title: 'Coding Quiz',
        class: 'bubbleTopPinkPurple',
        color: '#CD6DA0',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.81,
        fontSize: '12px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent conic-gradient(from 90deg at 50% 50%, #D4A1CF 0.00%, #A67FDD 12.32%, #8E50CD 26.60%, #B34693 45.32%, #B94A9F 62.56%, #CD628C 75.86%, #D890B2 88.67%, #D291AD 100.00%) 0% 0% no-repeat padding-box',
        marginTop: '40%'
    },
    {
        id: 13,
        img: [`https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmM0MTg3YTczYTM5OWM1NjQ5ZWZmMzEwNTgwZTgzOTI3ZjcxMTA4YSZjdD1n/7K4jFp6dpUvCJWDke6/giphy.gif`],
        link: 'https://kaylacasale.github.io/generate-password/',
        top: '530px',
        left: '89.2%',
        widthBubbleOne: '112px',
        heightBubbleOne: '112px',
        width: '110px',
        height: '110px',
        title: 'pA$sWoRd gEuerA+oR',
        class: 'bubbleTopPinkPurpleDull',
        color: '#9596DB',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.71,
        fontSize: '12px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #D56D6C 0%, #FFD6EE 47%, #9596DB 100%) 0% 0% no-repeat padding-box',
        marginTop: '30%'
    },
    {
        id: 14,
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBkYzI1Y2NkNTBlMDM2MTQ2YjQ1YjA3YjkyZDc2YzNjZGYwMTdlNiZjdD1n/6JDvCpOmLp1jkElkBb/giphy.gif',
        link: 'https://kaylacasale.github.io/portfolio/',
        top: '460px',
        left: '31.9%',
        widthBubbleOne: '114px',
        heightBubbleOne: '114px',
        width: '112px',
        height: '112px',
        title: 'Portfolio V1',
        class: 'bubbleTopPinkPurpleLight',
        color: 'whitesmoke',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.78,
        fontSize: '12px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #F6D1FB 0%, #5498EA 52%, #D2C0FA 100%) 0% 0% no-repeat padding-box',
        marginTop: '40%'
    },
    {
        id: 15,
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2QxMTNmOGM1NDc1ODg5ODUzNjA3NjRjMTczZDRiODdhMjAwMWJjYSZjdD1n/s3bTllyMaDBQI9KW0j/giphy.gif',
        link: 'https://kaylacasale.github.io/horiseon-refactor-accessibility/',
        top: '319.5px',
        left: '18.8%',
        widthBubbleOne: '80px',
        heightBubbleOne: '80px',
        width: '78px',
        height: '78px',
        title: 'Horiseon',
        class: 'bubbleTopBrownBlue',
        color: '#E1BFA0',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.78,
        fontSize: '10px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #4CA0FC 0%, #3C77B8 11%, #D9DCD7 71%, #DEB48A 100%) 0% 0% no-repeat padding-box',
        marginTop: '35%'
    },

]


export default Skills