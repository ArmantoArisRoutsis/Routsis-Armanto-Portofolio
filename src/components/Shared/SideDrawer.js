import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => {

  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
    
  return (
    <header class="l-header">
            <nav class={drawerClasses +" nav bd-grid"}>
                <div>
                    <a href="#home" class="nav__logo">A.R.</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="/#home" class="nav__link">Home</a></li>
                        <li class="nav__item"><a href="/#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="/#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="/#work" class="nav__link">Work</a></li>
                        <li class="nav__item"><a href="/#contact" class="nav__link">Contact</a></li>
                        <li class="nav__item"><a href="/certifications" class="nav__link">Certifications</a></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>
  )
}

export default sideDrawer
