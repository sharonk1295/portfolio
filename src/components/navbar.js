import React from "react"
import {Link} from "gatsby"

const linkStyle = {
    marginBottom: `-.9rem`,
    marginTop: `.3rem`
};

const Navbar = () => (

    <nav style={{
        textAlign: `center`,
        border: `double black 3px`,
        marginBottom: `2rem`
    }}>
        <ul style={{
            display: `flex`,
            justifyContent: 'space-evenly',
        }}>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/about">About</Link>
            <Link style={linkStyle} to="/projects">Projects</Link>
            <Link style={linkStyle} to="/contact">Contact</Link>
        </ul>
    </nav>
)

export default Navbar

