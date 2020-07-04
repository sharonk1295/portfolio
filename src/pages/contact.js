import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaLinkedin, FaMediumM } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 style={{
      fontFamily: `Barlow Semi Condensed, sans-serif`,
      letterSpacing: `1px`
    }}>Let's Connect!</h1>
    <p>Want to work together? Have a question? Feel free to reach me via:</p>
    <a href="https://www.linkedin.com/in/sharon-kim-sk/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
    <MdEmail />
    <FaMediumM />
  </Layout>
)

export default Contact
