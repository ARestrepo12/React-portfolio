import React from 'react';
import BestFurrends from '../../assets/portfolio-mockups/best-furrends.JPG';
import PasswordGenerator from '../../assets/portfolio-mockups/password-generator.JPG';
import PickAFlic from '../../assets/portfolio-mockups/pick-a-flic.JPG';
import WeatherDashboard from '../../assets/portfolio-mockups/weather-dashboard1.JPG';
import Github from '../../assets/github-icon.jpg';

function Portfolio() {

    return (
        <div>
            <h1 className='titles'>
                Portfolio
            </h1>
            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://karlyweatherstein.github.io/best-furrends/'>
                        <img alt='best-furrends' src={BestFurrends}></img>
                    </a>
                </div>
                <div className='icon'>
                    <h2>Best Furrends</h2>
                    <a href='https://github.com/Karlyweatherstein/best-furrends'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>

            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://arestrepo12.github.io/password-generator/'>
                        <img alt='password-generator' src={PasswordGenerator}></img>
                    </a>
                </div>
                <div className='icon'>
                    <h2>Password Generator</h2>
                    <a href='https://github.com/ARestrepo12/password-generator'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>

            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://karlyweatherstein.github.io/best-furrends/'>
                        <img alt='best-furrends' src={BestFurrends}></img>
                    </a>
                </div>
                <div className='icon'>
                    <h2>Best Furrends</h2>
                    <a href='https://github.com/Karlyweatherstein/best-furrends'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>

            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://karlyweatherstein.github.io/best-furrends/'>
                        <img alt='best-furrends' src={BestFurrends}></img>
                    </a>
                </div>
                <div className='icon'>
                    <h2>Best Furrends</h2>
                    <a href='https://github.com/Karlyweatherstein/best-furrends'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;