import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface Props {
  alt: string
  selector: string
}

const Image = (props: Props) => (
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
        /* TYPE FOR IMAGE HERE? */
        (n: any) => {
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
