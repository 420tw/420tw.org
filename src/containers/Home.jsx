import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  const resources = data.resources.edges
  return (
    <div>
      {resources.map(node => {
        const resource = node.node
        return (
          <div>
            {resource.name}
            <Img fluid={resource.profile.fluid} />
          </div>
        )
      })}
    </div>
  )
}

export default Home

export const resourcesFragment = graphql`
  fragment ResourcesFragment on ContentfulResourcesConnection {
    edges {
      node {
        id
        name
        profile {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`
