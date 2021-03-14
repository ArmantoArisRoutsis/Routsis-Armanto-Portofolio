import React from 'react';
import { Link } from "react-router-dom";

const NavLinks = () => {

  return (
    <div class="nav__menu" id="nav-menu">
      <ul class="nav__list">
        <li class="nav__item"><Link to="/#home" class="nav__link">Home</Link></li>
        <li class="nav__item"><Link to="/#about" class="nav__link">About</Link></li>
        <li class="nav__item"><Link to="/#skills" class="nav__link">Skills</Link></li>
        <li class="nav__item"><Link to="/#work" class="nav__link">Work</Link></li>
        <li class="nav__item"><Link to="/#contact" class="nav__link">Contact</Link></li>
        <li class="nav__item"><Link to="https://routsis-armanto.netlify.app/certifications" class="nav__link">Certifications</Link></li>
      </ul>
    </div>
  );
};

export default NavLinks;