import React from "react";
import Github from '../../assets/github-icon.png';
import Email from '../../assets/email-icon.png';
import Linkedin from '../../assets/linkedin-icon.png';

function Footer() {

    return (
        <footer>
            <ul>
                <li>
                    <a href='https://github.com/ARestrepo12'>
                        <img src={Github} alt='Github' ></img>
                    </a>
                </li>
                <li>
                    <a href='mailto: alex.restrepo1270@gmail.com'>
                        <img src={Email} alt='Email'></img>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/alejandro-restrepo-b6a1b4196/'>
                        <img src={Linkedin} alt='Linkedin'></img>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;