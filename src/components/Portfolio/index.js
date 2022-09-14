import React from 'react';
import BestFurrends from '../../assets/portfolio-mockups/best-furrends.JPG';
import PasswordGenerator from '../../assets/portfolio-mockups/password-generator.JPG';
import PickAFlic from '../../assets/portfolio-mockups/pick-a-flic.JPG';
import WeatherDashboard from '../../assets/portfolio-mockups/weather-dashboard1.JPG';
import Github from '../../assets/github-icon.png';
import RunBuddy from '../../assets/portfolio-mockups/run-buddy.JPG';
import WorkdayScheduler from '../../assets/portfolio-mockups/work-day-scheduler.JPG';

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
                    <a href='https://jtal3.github.io/Pick-a-Flic/'>
                        <img alt='pick-a-flic' src={PickAFlic}></img>
                    </a>
                </div>
                <div className='icon'>
                    <h2>Pick-A-Flic</h2>
                    <a href='https://github.com/jtal3/Pick-A-Flic'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>

            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://arestrepo12.github.io/weather-dashboard/'>
                        <img alt='weather-dashboard' src={WeatherDashboard}></img>
                    </a>
                </div>
                <div className='icon'>
                    <h2>Weather Dashboard</h2>
                    <a href='https://github.com/arestrepo12/weather-dashboard'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>

            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://arestrepo12.github.io/run-buddy/'>
                        <img alt='run-buddy' src={RunBuddy}></img>
                    </a>
                </div>
                <div className='icon'>
                    <h2>Run Buddy</h2>
                    <a href='https://github.com/ARestrepo12/run-buddy'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>

            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://arestrepo12.github.io/work-day-scheduler/'>
                        <img alt='workday-scheduler' src={WorkdayScheduler}></img>
                    </a>
                </div>
                <div className='icon'>
                    <h2>Work Day Scheduler</h2>
                    <a href='https://github.com/ARestrepo12/work-day-scheduler'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>

            <div className='portfolio'>
                <div className='portfolio-mock' id='youtube'>
                    <iframe src="https://www.youtube.com/embed/yn5bDt3s81g"></iframe>
                    </div>
                <div className='icon'>
                    <h2>README Generator</h2>
                    <a href='https://github.com/ARestrepo12/Professional-README-Generator'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;


