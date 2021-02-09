import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default ({ image }) => (
  <div>
    <GatsbyImage image={image.childImageSharp.gatsbyImageData} />
  </div>
)
export const query = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
`
