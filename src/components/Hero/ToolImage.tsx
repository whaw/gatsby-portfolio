import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";

const Image = ({ name }: { name: string }) => {

  interface ImageNode {
    node: {
      name: string,
      childImageSharp?: {
        fluid: any,
      }
    }
  }

  interface ImageQueryResult {
    allFile: {
      edges: ImageNode[],
    }
  }

  // get all images in images/tools/ directory and
  // optimize them with gatsby plugin
  const data: ImageQueryResult = useStaticQuery(graphql`
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

  // find tool image from query === passed name prop
  const imageNode = data.allFile.edges.find(
    (file) => file.node.name === name.toLowerCase()
  ) ?? null;

  if (!imageNode?.node.childImageSharp?.fluid) return null;

  return <GatsbyImage alt={name} fluid={imageNode.node.childImageSharp.fluid} />
}

export default Image;
