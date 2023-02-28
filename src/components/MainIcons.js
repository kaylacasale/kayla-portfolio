import React from 'react';
import myLogo from '../assets/my-logo.png'

function MainIcons() {
    return (
        <div className='row'>
            <div className='rotate'>
                <div className='column rotate'><img src={myLogo} style={{ width: '100px' }} id='zoom'></img></div>
            </div>
            <div className='column'></div>
            <div className='column'></div>

        </div>
    )
}

export default MainIcons