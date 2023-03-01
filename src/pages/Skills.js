import React, { useState } from 'react';
import '../styles/SkillsStyle.css'
import threeDBubble from '../assets/3d-bubble.svg'

// ultimately use Link to to link to further component than map through that to display main diplay with more info about the item
function Skills() {
    return (
        <div id='canvas'>
            {itemData.map((item) => (
                <a href={item.link} target="_blank">

                    <div id='ball-1' class='bubble' style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.widthBubbleOne}`, height: `${item.heightBubbleOne}`, borderRadius: `${item.borderRadius}`, opacity: `${item.opacityBubbleOne}`, position: 'absolute', boxShadow: '0px 3px 6px #00000029', background: `${item.backgroundBubbleOne}` }}></div>
                    <div id='ball-1' class='bubble' style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}`, borderRadius: `${item.borderRadius}`, position: 'absolute', opacity: 1 }}>
                        {/* <a href={item.link} target="_blank"><img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5OGM1MGIzNjc0MzAwYzliZDk2OWNmZTU4OWU0NDMyY2UyZjJjNSZjdD1n/emFmKxgQdkMOumVPhf/giphy.gif'></img></a> */}
                        <img src={item.img} style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}`, borderRadius: `${item.borderRadius}`, opacity: .85 }}></img>
                    </div>
                    <div id='ball-1' class={item.class} style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}`, position: 'absolute', opacity: `${item.opacityBubbleTwo}`, textAlign: 'center', borderRadius: `${item.borderRadius}` }}>
                        <p style={{ marginTop: `${item.marginTop}`, color: `${item.color}`, fontSize: `${item.fontSize}`, textShadow: '1px 1px whitesmoke', lineHeight: '20px' }}>{item.title}</p>
                    </div>

                </a>
            ))}
            {/* <img id='threeD' src={threeDBubble}></img> */}
            {/* <svg viewBox="-40 0 150 100" xmlns={threeDBubble} id='threeD'></svg> */}
        </div>
    )
}

const itemData = [
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5OGM1MGIzNjc0MzAwYzliZDk2OWNmZTU4OWU0NDMyY2UyZjJjNSZjdD1n/emFmKxgQdkMOumVPhf/giphy.gif',
        link: 'https://etiquette.herokuapp.com/',
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
        opacityBubbleTwo: 0.9,
        fontSize: '16px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #F8E7AB 0%, #F3DE84 23%, #F4CC69 34%, #F0B24C 46%, #F6CB62 62%, #F1B850 78%, #F8FFF6 88%, #F5DE8C 100%) 0% 0% no-repeat padding-box',
        marginTop: '40%'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNmNTQ4YzI1NjgxZGQ0OTdlMWNhNTdiMWQyMGM4MmQ1ZDc3ODlhMiZjdD1n/5DK2cpXXE8ILNqX9pc/giphy.gif',
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
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODMzM2ZlYmMzZTU3MjVhOGE0OThlMTdhOTg0NjE2YzdiYTgyYjY4NSZjdD1n/cqMuhqltXsS7QlGU50/giphy.gif',
        link: 'https://kaylacasale.github.io/whats-the-weather/',
        top: '36px',
        left: '72.5%',
        widthBubbleOne: '103px',
        heightBubbleOne: '103px',
        width: '100px',
        height: '100px',
        title: `What's the Weather`,
        class: 'bubbleTop',
        color: '#65C1FF',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.91,
        fontSize: '9px',
        borderRadius: '90px',
        backgroundBubbleOne: 'transparent conic-gradient(from 90deg at 50% 50%, #5DB7EB 0.00%, #B3B8EB 7.77%, #7FAEDC 19.25%, #B3AFFA 26.87%, #FECAFD 37.45%, #509ACC 44.42%, #4DB2E1 50.83%, #B0E7F2 59.83%, #3593C0 67.41%, #6B90BA 74.06%, #B494C1 81.83%, #3BC8EA 90.78%, #4BD3F3 100.00%) 0% 0% no-repeat padding-box',
        marginTop: '30%'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2VmMTBmYWFkMjhhYWIwZDUxZGJjZDE5Y2RiNjQ1NWMzMzQzZWFiZCZjdD1n/GNMkGHRvKFRaV1hHdB/giphy.gif',
        link: 'https://www.behance.net/gallery/150627573/SMISE-Dental-Application-Final-Version-2022',
        top: '272px',
        left: '72%',
        widthBubbleOne: '163px',
        heightBubbleOne: '163px',
        width: '160px',
        height: '160px',
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
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjIxMThjNTBlYmJjZTBkYjk1MmI0NWU2Mjc5YTI1ZTI4MTMxMGQwNSZjdD1n/1WfTvC5dt6uNzvxTkG/giphy.gif',
        link: 'https://apps.apple.com/ng/developer/shangoo-inc/id1489129176',
        top: '272px',
        left: '-2.5%',
        widthBubbleOne: '163px',
        heightBubbleOne: '163px',
        width: '160px',
        height: '160px',
        title: 'Shangoo',
        class: 'bubbleTopOrangeBlue',
        color: '#245786',
        opacityBubbleOne: 1,
        opacityBubbleTwo: 0.91,
        fontSize: '20px',
        borderRadius: '100px',
        backgroundBubbleOne: 'transparent linear-gradient(180deg, #365D90 0%, #DB7450 100%) 0% 0% no-repeat padding-box',
        marginTop: '43%'
    },
]

export default Skills