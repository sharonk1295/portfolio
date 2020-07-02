import React from "react"

import { graphql } from "gatsby"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const buttonStyle = {
  display: `flex`,
  justifyContent: `space-around`
}

const ProjectsPage = (props) => (
  <Layout>
    <SEO title="Projects" />
    <h1 style={{
      fontFamily: `Barlow Semi Condensed, sans-serif`,
      letterSpacing: `1px`
    }}>Hi from the projects page</h1>
    <p>Display projects here</p>

    <CardDeck className="col-sm-auto">
      <Card style={{ width: '18rem', marginRight: `3rem` }}>
        <Img style={{ height: `17rem`}} variant="top" fluid={props.data.project1.childImageSharp.fluid} />
        <Card.Body>
          <Card.Title style={{
            color: `purple`,
            fontWeight: `700`,
          }}>Odd One Out!</Card.Title>
          <Card.Text>
            Project 1: A trivia game built using HTML, CSS, JavaScript, and jQuery. User must find the odd character/item out of desired category.
          </Card.Text>
          <div style={buttonStyle}><Button variant="info" href="https://sharonk1295.github.io/Odd-One-Out/" target="_blank">Live</Button>
          <Button variant="info" href="https://github.com/sharonk1295/Odd-One-Out" target="_blank">GitHub Code</Button></div>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Img style={{ height: `17rem`}} variant="top" fluid={props.data.project2.childImageSharp.fluid} />
        <Card.Body>
          <Card.Title style={{
            color: `purple`,
            fontWeight: `700`,
          }}>What's On Your Vanity?</Card.Title>
          <Card.Text>
            Project 2: A MERN-stack app built with full CRUD functionality. User is able to keep track of his/her skincare products (very useful for skincare junkies!)  
          </Card.Text>
          <div style={buttonStyle}><Button variant="info" href="https://sharonkim-unit2-project.herokuapp.com/" target="_blank">Live</Button>
          <Button variant="info" href="https://github.com/sharonk1295/project_2" target="_blank">GitHub Code</Button></div>
        </Card.Body>
      </Card>
    </CardDeck>
  </Layout>
)

export const query = graphql`
  query {
    project1: file(relativePath: { eq: "project_1.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project2: file(relativePath: { eq: "Vanity.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ProjectsPage

// src={require('../images/Vanity.png')}