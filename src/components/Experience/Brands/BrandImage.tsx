import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface Props {
  alt: string
  src: string
  className: string
}

const Image = (props: Props) => (
  <StaticQuery
    query={graphql`
      query {
        allBrandImagesJson {
          edges {
            node {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 75, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const imageNode = data.allBrandImagesJson.edges.find((n: any) => {
        return n.node.alt.includes(props.alt)
      })

      if (!imageNode) {
        return null
      }

      return (
        <Img
          alt={props.alt}
          fluid={imageNode.node.image.childImageSharp.fluid}
          className={props.className}
        />
      )
    }}
  />
)

export default Image
