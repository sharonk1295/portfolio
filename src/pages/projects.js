import React from "react"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"

import Layout from "../components/layout"
import SEO from "../components/seo"

const buttonStyle = {
  marginRight: `2rem`
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
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: `17rem`}} variant="top" src={require('../images/project_1.png')} />
        <Card.Body>
          <Card.Title style={{
            color: `purple`,
            fontWeight: `700`,
          }}>Odd One Out!</Card.Title>
          <Card.Text>
            Project 1: A trivia game built using HTML, CSS, JavaScript, and jQuery. 
          </Card.Text>
          <Button style={buttonStyle} variant="info" href="https://sharonk1295.github.io/Odd-One-Out/" target="_blank">Live</Button>
          <Button variant="info" href="https://github.com/sharonk1295/Odd-One-Out" target="_blank">GitHub Code</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: `17rem`}} variant="top" src={require('../images/Vanity.png')} />
        <Card.Body>
          <Card.Title style={{
            color: `purple`,
            fontWeight: `700`,
          }}>What's On Your Vanity?</Card.Title>
          <Card.Text>
            Project 2: A MERN-stack app built with full CRUD functionality. User is able to keep track of his/her skincare products (very useful for skincare junkies!)  
          </Card.Text>
          <Button style={buttonStyle} variant="info" href="https://sharonkim-unit2-project.herokuapp.com/" target="_blank">Live</Button>
          <Button variant="info" href="https://github.com/sharonk1295/project_2" target="_blank">GitHub Code</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  </Layout>
)


export default ProjectsPage