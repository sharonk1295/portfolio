import React from "react"
import {Link} from "gatsby"
import Layout from "./layout"

const Navbar = () => (
    <div>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/page-2">Page-2</Link>
        </ul>
    </div>
)

export default Navbar

