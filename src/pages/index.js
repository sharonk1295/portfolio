import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import BackgroundImage from "gatsby-background-image"
import indexStyles from "./index.module.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    indexPic: file(relativePath: { eq: "cartoon_engineer.png" }) {
      childImageSharp {
        fluid(maxWidth: 3080, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <BackgroundImage id="mybg" fluid={data.indexPic.childImageSharp.fluid} fadeIn={true}>
      <Layout>
        <SEO title="Home" />
          <div className={indexStyles.background}>
            <h1>Hi, I'm Sharon Kim.</h1>
            <p>A full-stack developer with a creative passion <br/>for building apps to improve user experience.</p>
            <button><Link to="/about">Learn More</Link></button>
          </div>
      </Layout>
    </BackgroundImage>
  )}


export default IndexPage

// {/* <Layout>
//     <SEO title="Home" />
//     <BackgroundImage fluid={data.indexPic.childImageSharp.fluid} fadeIn={true}>
//       <div className={indexStyles.background}>
//         <h1>Hi, I'm Sharon Kim.</h1>
//         <p>A full-stack developer with a creative passion <br/>for building apps to improve user experience.</p>
//         <button><Link to="/about">Learn More</Link></button>
//       </div>
//     </BackgroundImage>
//   </Layout> */}