import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import {  graphql } from "gatsby"
import { ThemeContext } from "../utils" // , SEO
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )
  console.log(MediaLink)

  const {
    occupation,
    unemployed,
  } = data.site.siteMetadata

 // const { firstName, lastName } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)

  return (
    <PageLayout>
      {/* <SEO title="About Me" /> */}
      <PageTitle title="About Me" />
      <Container>
      <Image
          width="150"
          height="150"
          fluid
         // src={dark ? `../../icons/darth-vader.png` : `../../icons/r2-d2.png`}
          // EdgarMartinezProfilePhoto
          src={`../../icons/EdgarMartinezProfilePhoto.jpg`}
         alt={dark ? "Darth Vader" : "R2-D2"}
        />
        {unemployed && (
          <p style={{ textAlign: "justify"}}  className="mt-2">
            <b> I am a Software Developer with over 2 years of professional
experience developing commercial web and mobile apps using
Java, PHP and JavaScript :)</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span className="first-name">Edgar</span>&nbsp;
            <span className="last-name">Martínez</span>
          </h1>
          <p>
            <i>
              {occupation}
              {/* {occupation} by day,&nbsp; */}
              {/* {dark ? `Imperial enforcer by night` : `Rebel scum by night`} */}
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://github.com/EdgarGGamartgo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://linkedin.com/in/edgar-martínez-g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100025010387662"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="icons facebook"
              title="Facebook"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMG4WuLjf5EaCuKB4kWUFng?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "youtube"]}
              className="icons youtube"
              title="Youtube"
            />
          </a>
          <a
            href="https://twitter.com/Edgar72356895"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="icons twitter"
              title="Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com/edgargamartgoedoga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="icons instagram"
              title="Instagram"
            />
          </a>
          {/* <a
            href="https://www.freecodecamp.org"
            target="_blank"
            rel="noopener noreferrer"
          >https://www.instagram.com/EdgarGamartgoEdoga/
            <FontAwesomeIcon
              icon={["fab", "free-code-camp"]}
              className="icons fcc"
              title="FreeCodeCamp"
            />
          </a> */}
          {/* <a
            href="https://www.hackerrank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "hackerrank"]}
              className="icons hr"
              title="Hackerrank"
            />
          </a> */}
          {/* <a
            href="mailto:edgarggamartgo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a> */}
           <a href="../../edgarMartinezCV.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a> 
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
