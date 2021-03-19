import React from 'react'
import './SideDrawer.css'

const sideDrawer = props => {

  let drawerClasses = 'side-drawer'
  
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
    
  return (
    <header className="l-header">
      <nav className={drawerClasses + " nav bd-grid"}>
        <div>
          <a href="#home" className="nav__logo">A.R.</a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="/#home" class="nav__link" onClick={props.closeDrawer}>Home</a></li>
            <li className="nav__item"><a href="/#about" class="nav__link" onClick={props.closeDrawer}>About</a></li>
            <li className="nav__item"><a href="/#skills" class="nav__link" onClick={props.closeDrawer}>Skills</a></li>
            <li className="nav__item"><a href="/#work" class="nav__link" onClick={props.closeDrawer}>Work</a></li>
            <li className="nav__item"><a href="/#contact" class="nav__link" onClick={props.closeDrawer}>Contact</a></li>
            <li className="nav__item"><a href="/certifications" class="nav__link" onClick={props.closeDrawer}>Certifications</a></li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
};

export default sideDrawer