import React, { useState } from 'react';
import '../styles/SkillsStyle.css'
import threeDBubble from '../assets/3d-bubble.svg'

function Skills() {
    return (
        <div id='canvas'>
            {itemData.map((item) => (
                <a href={item.link} target="_blank">

                    <div id='ball-1' class='bubble' style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}` }}></div>
                    <div id='ball-1' class='bubble' style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}` }}>
                        {/* <a href={item.link} target="_blank"><img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5OGM1MGIzNjc0MzAwYzliZDk2OWNmZTU4OWU0NDMyY2UyZjJjNSZjdD1n/emFmKxgQdkMOumVPhf/giphy.gif'></img></a> */}
                        <img src={item.img} style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}` }}></img>
                    </div>
                    <div id='ball-1' class={item.class} style={{ top: `${item.top}`, left: `${item.left}`, width: `${item.width}`, height: `${item.height}` }}>
                        <p style={{ marginTop: '15px', color: `${item.color}`, fontSize: '12px', textShadow: '1px 1px grey' }}>{item.title}</p>
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
        width: '150px',
        height: '150px',
        title: 'Etiquette',
        class: 'bubbleTopYellow',
        color: '#FEFDE7'

    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNmNTQ4YzI1NjgxZGQ0OTdlMWNhNTdiMWQyMGM4MmQ1ZDc3ODlhMiZjdD1n/5DK2cpXXE8ILNqX9pc/giphy.gif',
        top: '100px',
        left: '1000px',
        width: '150px',
        height: '150px',
        title: 'Blog for Techs',
        class: 'bubbleTop'

    }
]

export default Skills