import React, {useState} from "react"

import NavLinks from "./NavigationComponents/NavLinks"
import SideDrawer from "./Shared/SideDrawer"
import Backdrop from "./Shared/Backdrop"

const Navbar = () =>{
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer =()=>{
        drawerIsOpen===true?setDrawerIsOpen(false):setDrawerIsOpen(true)
    }

    const closeDrawer = () =>{
        setDrawerIsOpen(false);
    };

    return(
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="/" class="nav__logo">A.R.</a>
                </div>
                {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
                <SideDrawer show={drawerIsOpen}>
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