import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

const Image = ({ selector, alt }) => {
  const data = useStaticQuery(graphql`
    query getToolImages {
      allToolsAnimJson {
        edges {
          node {
            images {
              selector
              image {
                childImageSharp {
                  fluid(maxWidth: 75) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)

  /* find matching image in collection to props.selector  */
  const imageNode = data.allToolsAnimJson.edges[0].node.images.find((n) => {
    return n.selector.includes(selector)
  }
  )
  if (!imageNode) {
    return null
  }
  return (
    <><GatsbyImage key={selector} alt={alt} fluid={imageNode.image.childImageSharp.fluid} /></>
  )
}

export default Image
