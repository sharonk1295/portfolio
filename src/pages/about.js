import React from "react"
import { graphql } from "gatsby"

import Carousel from "react-bootstrap/Carousel";
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


const About = (props) => (
  <Layout>
    <SEO title="About" />
    <h1>Who is Sharon?</h1>
    <p>Welcome to the about page. I am a developer and blahblahblah. However, there is more to me, don't be a stranger and get to know me!</p>

    <Carousel>
      <Carousel.Item>
        <Img fluid={props.data.image1.childImageSharp.fluid} alt="in the teacher role" />
        <Carousel.Caption>
          <h3>Sharon as a teacher</h3>
          <p>She used to teach kids at an after school and really adores kids.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={props.data.image2.childImageSharp.fluid} alt="in the dancer role" />
        <Carousel.Caption>
          <h3>Sharon as a dancer</h3>
          <p>Dancing for over a decade now, she really finds joy in expressing herself through movement and performance.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={props.data.image3.childImageSharp.fluid} alt="in the adventurer role" />
        <Carousel.Caption>
          <h3>Sharon as an adventurer</h3>
          <p>Just like how coding was a new journey for her, she really enjoys exploring new expeditions and staying active.</p>
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
