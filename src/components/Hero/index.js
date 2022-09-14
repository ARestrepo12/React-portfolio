import React from 'react';
import Headshot from '../../assets/profile-pic.JPG';

function Hero() {

    return (
        <div className='heroDiv'>
            <img alt='profile-pic' src={Headshot}></img>
            <div className='heroText'>
                <h1> Hello there, I'm Alex Restrepo, a full-stack web developer, and welcome to my portfolio!</h1>
            </div>
        </div>
    )
}

export default Hero;