import React, {useState, useEffect} from "react"

import NavLinks from "./NavigationComponents/NavLinks"
import SideDrawer from "./Shared/SideDrawer"
import Backdrop from "./Shared/Backdrop"

const Navbar = () =>{

    // This part is related to the how the side bar/navigation will operate
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer =()=>{
        drawerIsOpen===true?setDrawerIsOpen(false):setDrawerIsOpen(true)
    }

    const closeDrawer = () =>{
        setDrawerIsOpen(false);
    };

    // This Part is used to check the window size in order to keep the side bar open or closed
    const checkSize = () =>{
        window.innerWidth>768&&setDrawerIsOpen(false)
    }
    useEffect(() => {
        window.addEventListener('resize',checkSize);
    })

    return(
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="/" class="nav__logo">A.R.</a>
                </div>
                {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
                <SideDrawer show={drawerIsOpen} closeDrawer={closeDrawer}>
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks/>
                    </nav>
                </SideDrawer>
                <NavLinks/>
                <div class="nav__toggle" id="nav-toggle" onClick={openDrawer}>
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    );

}

export default Navbar;