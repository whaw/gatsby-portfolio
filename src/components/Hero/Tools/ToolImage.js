import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
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
    `}
    render={data => {
      const imageNode = data.allToolsAnimJson.edges[0].node.images.find(
        (n) => {
          return n.selector.includes(props.selector)
        }
      )
      if (!imageNode) {
        return null
      }
      return (
        <Img alt={props.alt} fluid={imageNode.image.childImageSharp.fluid} />
      )
    }}
  />
)

export default Image
