import React, { useState } from 'react';
import '../styles/SkillsStyle.css'
import threeDBubble from '../assets/3d-bubble.svg'

// ultimately use Link to to link to further component than map through that to display main diplay with more info about the item
function Skills() {
    return (
        <div id='canvas'>
            {itemData.map((item) => (
                <a href={item.link} target="_blank">

                    <div id='ball-1' class='bubble' style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.widthBubbleOne}`, height: `${item.heightBubbleOne}`, borderRadius: `${item.borderRadius}`, opacity: `${item.opacityBubbleOne}`, position: 'absolute', boxShadow: '0px 3px 6px #00000029' }}></div>
                    <div id='ball-1' class='bubble' style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}`, borderRadius: `${item.borderRadius}`, position: 'absolute', opacity: 1 }}>
                        {/* <a href={item.link} target="_blank"><img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5OGM1MGIzNjc0MzAwYzliZDk2OWNmZTU4OWU0NDMyY2UyZjJjNSZjdD1n/emFmKxgQdkMOumVPhf/giphy.gif'></img></a> */}
                        <img src={item.img} style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}`, borderRadius: `${item.borderRadius}`, opacity: 1 }}></img>
                    </div>
                    <div id='ball-1' class={item.class} style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}`, position: 'absolute', opacity: `${item.opacityBubbleTwo}`, textAlign: 'center', borderRadius: `${item.borderRadius}` }}>
                        <p style={{ marginTop: '15px', color: `${item.color}`, fontSize: `${item.fontSize}`, textShadow: '1px 1px grey', lineHeight: '20px' }}>{item.title}</p>
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
        top: '500px',
        left: '500px',
        widthBubbleOne: '153px',
        heightBubbleOne: '153px',
        width: '150px',
        height: '150px',
        title: 'Etiquette',
        class: 'bubbleTopYellow',
        color: '#FEFDE7',
        opacityBubbleOne: 0.61,
        opacityBubbleTwo: 0.71,
        fontSize: '12px',
        borderRadius: '100px'

    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNmNTQ4YzI1NjgxZGQ0OTdlMWNhNTdiMWQyMGM4MmQ1ZDc3ODlhMiZjdD1n/5DK2cpXXE8ILNqX9pc/giphy.gif',
        link: 'https://guarded-headland-91004.herokuapp.com/',
        top: '100px',
        left: '1000px',
        widthBubbleOne: '153px',
        heightBubbleOne: '153px',
        width: '150px',
        height: '150px',
        title: 'Blog for Techs',
        class: 'bubbleTop',
        color: '#4188B8',
        opacityBubbleOne: 0.61,
        opacityBubbleTwo: 0.71,
        fontSize: '10px',
        borderRadius: '100px'


    }
]

export default Skills