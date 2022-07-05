import React from "react";
import Github from '../../../public/assets/github-icon.jpg';
import Email from '../../../public/assets/email-icon.jpg';
import Linkedin from '../../../public/assets/linkedin-icon.jpg';

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
                    <a>
                        <img src={Linkedin} alt='Linkedin'></img>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;