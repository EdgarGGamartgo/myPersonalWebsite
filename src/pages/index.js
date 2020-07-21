import React from "react"
import { graphql } from "gatsby"
import { PageLayout } from "../components"
// import { SEO } from "../utils"
import { Container ,  Image , Jumbotron, Button} from "react-bootstrap"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bgimage from '../../static/icons/lap.jpg'

export default ({ data }) => {
  return (
    <PageLayout>
      {/* <SEO title="Home" /> */}
      
      <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', minHeight:"120vh" }}>
  <h1>Live the digital experience you've been searching!</h1>
  <p>
    You have an idea which must be turned into a digital reality, let me help you make it a reality.
  </p>
  <p>
    <Button href="/about" variant="primary">Learn more</Button>
  </p>
</Jumbotron>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
