import React from "react";
import { Link } from "react-router-dom"

function Nav() {

    return (
        <nav>
            <h1>Alex Restrepo</h1>
            <ul>
                <li>
                    <Link to="/" className={({ isActive }) => (isActive ? "tab-active" : "tab")}>Home</Link>
                </li>
                <li>
                    <Link to="/about" className={({ isActive }) => (isActive ? "tab-active" : "tab")}>About Me</Link>
                </li>
                <li>
                    <Link to="/portfolio" className={({ isActive }) => (isActive ? "tab-active" : "tab")}>Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact" className={({ isActive }) => (isActive ? "tab-active" : "tab")}>Contact</Link>
                </li>
                <li>
                    <Link to="/resume" className={({ isActive }) => (isActive ? "tab-active" : "tab")}>Resume</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;