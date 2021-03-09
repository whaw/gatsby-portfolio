import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// adding image customization in return block
// understand variables to be only be addable through gatsby-node > context
// next step: look into gatsby-node for (possible) solution

const Image = props => (
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
                    fluid {
                      src
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
      // specific to tools json
      const imageNode = data.allToolsAnimJson.edges[0].node.images.find(n => {
        return n.selector.includes(props.selector)
      })

      if (!imageNode) {
        return null
      }

      return (
        <Img
          alt={props.alt}
          fluid={imageNode.image.childImageSharp.fluid}
          className={props.className}
        />
      )
    }}
  />
)

export default Image
