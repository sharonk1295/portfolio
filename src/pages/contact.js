import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaLinkedin, FaMediumM } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import {IconContext } from "react-icons"


const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 style={{
      fontFamily: `Barlow Semi Condensed, sans-serif`,
      letterSpacing: `1px`
    }}>Let's Connect!</h1>
    <p>Want to work together? Have a question? Feel free to reach me via:</p>
    <div style={{display: `flex`, justifyContent: `space-evenly`, margin: `10rem 0rem`}}>
      <IconContext.Provider value={{color: `pink`, size: `4rem`}}>
      <a href="https://www.linkedin.com/in/sharon-kim-sk/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <MdEmail />
      <a href="https://medium.com/@sharonk1295_18369" target="_blank" rel="norefeerer"><FaMediumM /></a>
      </IconContext.Provider>
    </div>
  </Layout>
)

export default Contact
