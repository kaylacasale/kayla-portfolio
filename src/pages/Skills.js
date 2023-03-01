import React, { useState } from 'react';
import '../styles/SkillsStyle.css'
import threeDBubble from '../assets/3d-bubble.svg'

function Skills() {
    return (
        <div id='canvas'>
            <div id='ball-1' class='bubble'></div>
            <div id='ball-1' class='bubble'>
                <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5OGM1MGIzNjc0MzAwYzliZDk2OWNmZTU4OWU0NDMyY2UyZjJjNSZjdD1n/emFmKxgQdkMOumVPhf/giphy.gif'></img>
            </div>
            <div id='ball-1' class='bubbleTop'>
                <p style={{ marginTop: '15px', color: '#F8C8FD', fontSize: '12px', textShadow: '1px 1px #C4D7E9' }}>Etiquette</p>
            </div>
            {/* <img id='threeD' src={threeDBubble}></img> */}
            {/* <svg viewBox="-40 0 150 100" xmlns={threeDBubble} id='threeD'></svg> */}
        </div>
    )
}

export default Skills