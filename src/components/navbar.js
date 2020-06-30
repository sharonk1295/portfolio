import React from "react"
import {Link} from "gatsby"


const Navbar = () => (
    <div>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    </div>
)

export default Navbar

