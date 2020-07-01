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
        padding: `3rem 1.0875rem`,
      }}
    >
      <h1 className="name_title" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `90px`,
            letterSpacing: `1px`,
            // fontFamily: `Rufina, serif`
            fontFamily: `Antic Didone, serif`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p style={{
        color: `gray`
      }}>Software Engineer | Full-stack Developer</p>
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
