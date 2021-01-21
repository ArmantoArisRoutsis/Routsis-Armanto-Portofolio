import React from 'react'
import { NavLink } from "react-router-dom"

const NavLinks = () => {
    return (
        <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="/#home" class="nav__link">Home</a></li>
                        <li class="nav__item"><a href="/#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="/#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="/#work" class="nav__link">Work</a></li>
                        <li class="nav__item"><a href="/#contact" class="nav__link">Contact</a></li>
                        <li class="nav__item"><a href="https://routsis-armanto.netlify.app/certifications" class="nav__link">Certifications</a></li>
                    </ul>
                </div>
    )
}

export default NavLinks
