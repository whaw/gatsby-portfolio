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
  /* Find matching image in collection for props.selector  */
  const imageNode = data.allToolsAnimJson.edges[0].node.images.find((n) => n.selector.includes(selector)
  )
  if (!imageNode) return null
  return <GatsbyImage key={selector} alt={alt} fluid={imageNode.image.childImageSharp.fluid} />
}

export default Image
