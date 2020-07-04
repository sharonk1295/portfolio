import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header
    className={headerStyles.header}
  >
    <div
      className={headerStyles.headerText}
    >
      <h1 className={headerStyles.title}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <p className={headerStyles.description}>
        Software Engineer <span>|</span> Full-Stack Developer</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
