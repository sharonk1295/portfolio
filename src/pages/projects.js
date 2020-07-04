import React from "react"

import { graphql } from "gatsby"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectStyle from "./projects.module.css"


const ProjectsPage = (props) => (
  <Layout>
    <SEO title="Projects" />
    <h1 className={projectStyle.projectsTitle}
    >PROJECTS</h1>
    <p>Curating my curiosity of new technologies, I am always learning and building new apps, so come back soon to view more!</p>

    <CardDeck className="col-sm-auto">
      <Card className={projectStyle.card} className="shadow p-3 mb-5 bg-white rounded">
        <Img style={{ height: `17rem`}} variant="top" fluid={props.data.project1.childImageSharp.fluid} />
        <Card.Body>
          <Card.Title className={projectStyle.cardTitle}
          >Odd One Out!
          </Card.Title>
          <Card.Text>
            Project 1: A trivia game built using HTML, CSS, JavaScript, and jQuery. User must find the odd character/item out of desired category.
          </Card.Text>
          <div className={projectStyle.buttons}><Button variant="info" href="https://sharonk1295.github.io/Odd-One-Out/" target="_blank">Live</Button>
          <Button variant="info" href="https://github.com/sharonk1295/Odd-One-Out" target="_blank">GitHub Code</Button></div>
        </Card.Body>
      </Card>
      <Card className={projectStyle.card} className="shadow p-3 mb-5 bg-white rounded">
        <Img style={{ height: `17rem`}} variant="top" fluid={props.data.project2.childImageSharp.fluid} />
        <Card.Body>
          <Card.Title className={projectStyle.cardTitle}>
            What's On Your Vanity?
          </Card.Title>
          <Card.Text>
            Project 2: A MERN-stack app built with full CRUD functionality. User is able to keep track of his/her skincare products (very useful for skincare junkies!)  
          </Card.Text>
          <div className={projectStyle.buttons}><Button variant="info" href="https://sharonkim-unit2-project.herokuapp.com/" target="_blank">Live</Button>
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