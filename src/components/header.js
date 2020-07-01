import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `linear-gradient(0deg, rgba(248,249,251,0) 0%, rgba(228,195,209,1) 95%)`,
      // marginBottom: `0.4rem`,
      textAlign: `center`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2.5rem 1.0875rem`,
      }}
    >
      <h1 className="name_title" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textShadow: `whitesmoke 2px 1px`,
            textDecoration: `none`,
            fontSize: `100px`,
            letterSpacing: `1px`,
            fontFamily: `Playfair Display SC, serif`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p style={{
        color: `gray`,
        fontWeight: `600`,
        fontFamily: `Abel, sans-serif`,
      }}>Software Engineer <span style={{
        color: `purple`
      }}>|</span> Full-stack Developer</p>
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
