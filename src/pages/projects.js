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
    <p className={projectStyle.projectsIntro}>Utilized technologies such as HTML5, CSS, JavaScript, React, Express, MongoDB, Gatsby, etc. This site was built with Gatsby.js and GraphQL. Curating my curiosity of new technologies, I am always learning and building new apps, so come back soon to view more!</p>

    <CardDeck className={projectStyle.cardDeck}>
      <Card className={projectStyle.card} className="shadow p-3 mb-5 bg-white rounded" style={{minWidth:"20rem", maxWidth:"20rem"}}>
        <Img style={{ height: `17rem`}} variant="top" fluid={props.data.project4.childImageSharp.fluid} />
        <Card.Body>
          <Card.Title className={projectStyle.cardTitle}
          >A Dietitian's Blog
          </Card.Title>
          <Card.Text>
          A website built for a clinical dietitian/ nutritionist. She is able to maintain a blog (full CRUD functionality) and online presence.<br/>
            <br/>
            <b>Technologies Used: </b>Gatsby, GraphQL, Contentful, CSS/SCSS
          </Card.Text>
          <div className={projectStyle.buttons}><Button variant="info" href="https://sungeunsul.netlify.app/" target="_blank" rel="noreferrer">Live Site</Button>
          <Button variant="info" href="https://github.com/sharonk1295/project-4-sungeun" target="_blank" rel="noreferrer">GitHub Code</Button></div>
        </Card.Body>
      </Card>
      <Card className={projectStyle.card} className="shadow p-3 mb-5 bg-white rounded" style={{minWidth:"20rem", maxWidth:"20rem"}}>
        <Img style={{ height: `17rem`}} variant="top" fluid={props.data.project2.childImageSharp.fluid} />
        <Card.Body>
          <Card.Title className={projectStyle.cardTitle}>
            What's On Your Vanity?
          </Card.Title>
          <Card.Text>
            An app built to have full CRUD functionality using the 7 RESTful routes. User is able to keep track of his/her skincare products (very useful for skincare junkies!)<br/>
            <br/>
            <b>Technologies Used: </b> CSS, Bootstrap, JavaScript, Node.js, Mongoose, MongoDB, Express and JSX
          </Card.Text>
          <div className={projectStyle.buttons}><Button variant="info" href="https://sharonkim-unit2-project.herokuapp.com/" target="_blank" rel="noreferrer">Live Site</Button>
          <Button variant="info" href="https://github.com/sharonk1295/project_2" target="_blank" rel="noreferrer">GitHub Code</Button></div>
        </Card.Body>
      </Card>
      <Card className={projectStyle.card} className="shadow p-3 mb-5 bg-white rounded" style={{minWidth:"20rem", maxWidth:"20rem"}}>
        <Img style={{ height: `17rem`}} variant="top" fluid={props.data.project3.childImageSharp.fluid} />
        <Card.Body>
          <Card.Title className={projectStyle.cardTitle}>
            GIFTED
          </Card.Title>
          <Card.Text>
            An app, built with full CRUD, that keeps track of recipients and the gifts you've ever given to prevent any future gift overlaps. Collaborated with 2 other developers.<br/>
            <br/>
            <b>Technologies Used: </b> The MERN stack (MongoDB, Express, React, and Node.js), CSS/SCSS and Bootstrap
          </Card.Text>
          <div className={projectStyle.buttons}><Button variant="info" href="https://floating-caverns-88204.herokuapp.com/" target="_blank" rel="noreferrer">Live Site</Button>
          <Button variant="info" href="https://github.com/sharonk1295/gifted-project" target="_blank" rel="noreferrer">GitHub Code</Button></div>
        </Card.Body>
      </Card>
      <Card className={projectStyle.card} className="shadow p-3 mb-5 bg-white rounded" style={{minWidth:"20rem", maxWidth:"20rem"}}>
        <Img style={{ height: `17rem`}} variant="top" fluid={props.data.project1.childImageSharp.fluid} />
        <Card.Body>
          <Card.Title className={projectStyle.cardTitle}>
            Odd One Out!
          </Card.Title>
          <Card.Text>
            A trivia game that focuses on finding the odd one out. The user must choose the character/item that does not belong to the desired category (music, movies, TV shows).<br/>
            <br/>
            <b>Technologies Used: </b>HTML, CSS (mainly modals and animations), JavaScript, and jQuery
          </Card.Text>
          <div className={projectStyle.buttons}><Button variant="info" href="https://sharonk1295.github.io/Odd-One-Out/" target="_blank" rel="noreferrer">Live Site</Button>
          <Button variant="info" href="https://github.com/sharonk1295/Odd-One-Out" target="_blank" rel="noreferrer">GitHub Code</Button></div>
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
    project4: file(relativePath: { eq: "project4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  project3: file(relativePath: { eq: "gifted.png" }) {
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