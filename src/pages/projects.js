import React from "react"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import Layout from "../components/layout"
import SEO from "../components/seo"

const buttonStyle = {
  marginRight: `1rem`
}

const ProjectsPage = (props) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the projects page</h1>
    <p>Display projects here</p>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../images/project_1.png')} />
      <Card.Body>
        <Card.Title style={{
          color: `purple`,
          fontWeight: `700`,
        }}>Odd One Out!</Card.Title>
        <Card.Text>
          Project 1: A trivia game built using HTML, CSS, JavaScript, and jQuery. 
        </Card.Text>
        <Button style={buttonStyle} variant="primary" href="https://sharonk1295.github.io/Odd-One-Out/" target="_blank">Live</Button>
        <Button variant="primary" href="https://github.com/sharonk1295/Odd-One-Out" target="_blank">GitHub Code</Button>
      </Card.Body>
    </Card>

  </Layout>
)


export default ProjectsPage