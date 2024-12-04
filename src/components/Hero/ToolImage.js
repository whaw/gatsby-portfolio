import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

const Image = ({ name }) => {
  // get all images in images/tools/ directory and
  // optimize them with gatsby plugins
  const data = useStaticQuery(graphql`
    query getToolImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" },
          relativeDirectory: { eq: "tools" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

// find tool image from query === passed prop
const imageNode = data.allFile.edges.find(
  (file) => file.node.name === name.toLowerCase()
)

if (!imageNode) return null

return <GatsbyImage alt={name} fluid={imageNode.node.childImageSharp.fluid} />
}

export default Image;
