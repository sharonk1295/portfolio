import React from "react"
import { graphql } from "gatsby"

import Carousel from "react-bootstrap/Carousel";
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { IconContext } from "react-icons"
import { FaLaptopCode } from "react-icons/fa"

const capStyle = {
  textShadow: `1px 1px gray`,
  marginTop: `-2px`,
  paddingBottom: `3px`
}

const About = (props) => (
  <Layout>
    <SEO title="About" />
    <h1 style={{
      fontFamily: `Barlow Semi Condensed, sans-serif`,
      letterSpacing: `1px`,
      textAlign: `center`
    }}>Who is Sharon?</h1>
    <p style={{textAlign: `center`}}>
      <IconContext.Provider value={{color: `pink`, size: `2rem`}}>
        <FaLaptopCode />
      </IconContext.Provider> 
     Transitioning from sociology and education into the programming realm, I couldn't be more content with the career change. Implementing my acquired skills from all career fields, I strive to be a better, patient, and collaborative developer everyday. My approach to web development is simple: <strong>Build With The User In Mind</strong>. Having a well-functioning website/app is great, but what is the point if the visuals don't serve enough of a unique experience for the user to return?
    </p>
    <p style={{
      textAlign: `center`,
      marginBottom: `2rem`,
    }}>I am a software engineer based in NYC, with a knack for solving problems. Being multi-disciplined, you can expect to see me engaging in other activities when I'm not coding by my desk. Don't be a stranger and get to know the other many hats I wear!</p>

    <Carousel style={{minHeight: `90%`, minWidth: `91%`, maxWidth: `91%`, margin: `0 auto`}}>
      <Carousel.Item>
        <Img fluid={props.data.image1.childImageSharp.fluid} alt="in the teacher role" />
        <Carousel.Caption>
          <h3 style={{
            textShadow: `black 1px 1px`
          }}>Sharon as a teacher</h3>
          <p style={capStyle}>Pursuing my adoration for kids, I used to teach at an after school.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={props.data.image2.childImageSharp.fluid} alt="in the dancer role" />
        <Carousel.Caption>
          <h3 style={{
            textShadow: `black 1px 1px`
          }}>Sharon as a dancer</h3>
          <p style={capStyle}>Dancing for over a decade now, I find joy in expressing myself through movement and performance.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={props.data.image3.childImageSharp.fluid} alt="in the adventurer role" />
        <Carousel.Caption>
          <h3 style={{
            textShadow: `black 1px 1px`
          }}>Sharon as an adventurer</h3>
          <p style={capStyle}>I appreciate exploring new expeditions and staying active.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </Layout>
)

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "aboutme-1.jpeg"}) {
      childImageSharp {
        fluid (maxWidth: 1200, maxHeight: 860){
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "aboutme-2.jpeg"}) {
      childImageSharp {
        fluid (maxWidth: 1200, maxHeight: 860){
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "aboutme-3.jpeg"}) {
      childImageSharp {
        fluid (maxWidth: 1200, maxHeight: 860){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
