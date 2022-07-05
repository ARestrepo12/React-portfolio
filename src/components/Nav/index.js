import React from "react";
import { Link } from "react-router-dom"

function Nav() {

    return (
        <nav>
            <h1>Alex Restrepo</h1>
            <ul>
                <li>
                    <link to="/" className={({ isActive }) => (isActive ? "tab-active" : "tab")}>Home</link>
                </li>
                <li>
                    <link to="/about" className={({ isActive }) => (isActive ? "tab-active" : "tab")}>About Me</link>
                </li>
                <li>
                    <link to="/portfolio" className={({ isActive }) => (isActive ? "tab-active" : "tab")}>Portfolio</link>
                </li>
                <li>
                    <link to="/contact" className={({ isActive }) => (isActive ? "tab-active" : "tab")}>Contact</link>
                </li>
                <li>
                    <link to="/resume" className={({ isActive }) => (isActive ? "tab-active" : "tab")}>Resume</link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;