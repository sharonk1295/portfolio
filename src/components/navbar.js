import React from "react"
import {Link} from "gatsby"

import navbarStyles from "./navbar.module.css"


const Navbar = () => (

    <nav className={navbarStyles.navbar}>
        <ul>
            <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeLink} to="/">Home</Link>
            <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeLink} to="/about">About</Link>
            <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeLink} to="/projects">Projects</Link>
            <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeLink} to="/contact">Contact</Link>
        </ul>
    </nav>
)

export default Navbar

