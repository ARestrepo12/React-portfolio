import React from 'react';
import BestFurrends from '../../assets/portfolio-mockups/best-furrends.JPG';
import PasswordGenerator from '../../assets/portfolio-mockups/password-generator.JPG';
import PickAFlic from '../../assets/portfolio-mockups/pick-a-flic.JPG';
import WeatherDashboard from '../../assets/portfolio-mockups/weather-dashboard1.JPG';
import Github from '../../assets/github-icon.png';
import RunBuddy from '../../assets/portfolio-mockups/run-buddy.JPG';
import WorkdayScheduler from '../../assets/portfolio-mockups/work-day-scheduler.JPG';
import LetsGrow from '../../assets/portfolio-mockups/lets-grow.JPG';
import CodingQuiz from '../../assets/portfolio-mockups/coding-quiz.JPG';

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
                    <h4>This application using JavaScript allows users enter a zipcode and find adoptable dogs within a 50 mile radius. When you click search you will be met with pictures of the dogs along with their names, breed, age, and distance away. You can also learn fun dog facts at the click of a button, and have an option to donate money to help homeless pets. This project utilized two different server-side API's for the pet search and fun facts.</h4>
                    <a href='https://github.com/Karlyweatherstein/best-furrends'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript, Server-side API</p>
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
                    <h4>A movie searching application to help you choose your next movie to watch. While most streaming services have a feature to search movies by genre, they do not allow you to search movies that fit multiple genre's. Our application will search all movies that fit the specific genres you are looking for in a movie. It also can search for movies by title and can add to a favorites page at the click of a button when logged in. This project utilized the "TMDB" server-side API.</h4>
                    <a href='https://github.com/jtal3/Pick-A-Flic'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript, Server-side API</p>
                </div>
            </div>
            
            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://limitless-crag-16722.herokuapp.com/'>
                        <img alt='lets-grow' src={LetsGrow}></img>
                    </a>
                </div>
                <div className='icon'>
                    <h2>Lets Grow</h2>
                    <h4>An e-commerce React application that creates a space that allows users to find tutors/trainers in specific subjects and work with them personally or their materials. After choosing from a variety of categories, you are met with tutors or trainers in that field who you can click on to see their shop which displays the goods and services they sell. If you wanted to purchase anything our seamless stripe integration makes it easy to checkout from your cart.</h4>
                    <a href='https://github.com/Karlyweatherstein/lets-grow'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: React, MongoDB, Javascript, Bootstrap</p>
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
                    <h4> A simple weather forecasting application. You enter a city you would like to see the 5 day forecast for and the application will return the temperature, wind, and humidity of those days. </h4>
                    <a href='https://github.com/arestrepo12/weather-dashboard'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript, Server-side API</p>
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
                    <h4>An easy to use password generator that generates a random password based on the length, use of uppercase and/or lowercase letters, numbers, and special characters that you choose when prompted.</h4>
                    <a href='https://github.com/ARestrepo12/password-generator'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>
            
            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <iframe src="https://www.youtube.com/embed/yn5bDt3s81g" width="725" height="400" title="Youtube video" allowFullScreen></iframe>
                    </div>
                <div className='icon'>
                    <h2>README Generator</h2>
                    <h4>A command line application that utilizes Node.js to create a README for you based on your answers to a few questions about your project.</h4>
                    <a href='https://github.com/ARestrepo12/Professional-README-Generator'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: Node.js, Javascript</p>
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
                    <h4>A useful work day scheduler that helps you plan out your tasks for the day. After you save a task you are also free to leave the site and your tasks will be locally stored for the next time you open it.</h4>
                    <a href='https://github.com/ARestrepo12/work-day-scheduler'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript, Third-Party API</p>
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
                    <h4> A mockup of a business' website that would help you find trainers to help you reach your fitness goals</h4>
                    <a href='https://github.com/ARestrepo12/run-buddy'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS</p>
                </div>
            </div>

            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <iframe src="https://www.youtube.com/embed/E77eCMtuJ00" width="725" height="400" title="Youtube video" allowFullScreen></iframe>
                    </div>
                <div className='icon'>
                    <h2>Team Profile Generator</h2>
                    <h4>A command line application that utilizes Node.js to create an HTML page with cards of individuals on a team. You answer some questions about who is in your team and it will do the rest. </h4>
                    <a href='https://github.com/ARestrepo12/Professional-README-Generator'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: Node.js, Javascript</p>
                </div>
            </div>

            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://arestrepo12.github.io/coding-quiz/'>
                        <img alt='coding-quiz' src={CodingQuiz}></img>
                    </a>
                </div>
                <div className='icon'>
                    <h2>Soccer Quiz</h2>
                    <h4>A fun Premier League soccer quiz that may have some bias in the questions.</h4>
                    <a href='https://github.com/ARestrepo12/coding-quiz'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript, Web API</p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;


