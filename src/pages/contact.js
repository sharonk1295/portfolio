import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaLinkedin, FaMediumM, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import {IconContext } from "react-icons"
import contactStyles from "./contact.module.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className={contactStyles.header}>
      Let's Connect!
    </h1>
    <p>Want to work together? Have a question? Feel free to reach me at &nbsp;
      <IconContext.Provider value={{color: `pink`}}>
        <MdEmail />
      </IconContext.Provider>
       sharonk1295@gmail.com</p>
    <p className={contactStyles.optionsTitle}>You can also connect with me via:</p>
    <div className={contactStyles.options}>
      <IconContext.Provider value={{color: `pink`, size: `4rem`}}>
      <a href="https://www.linkedin.com/in/sharon-kim-sk/" target="_blank" rel="noreferrer"><FaLinkedin aria-label="Mute volume"/></a>
      <a href="https://github.com/sharonk1295" target="_blank" rel="noreferrer"><FaGithub aria-label="Mute volume"/></a>
      <a href="https://medium.com/@sharonk1295_18369" target="_blank" rel="norefeerer"><FaMediumM aria-label="Mute volume"/></a>
      </IconContext.Provider>
    </div>
  </Layout>
)

export default Contact
