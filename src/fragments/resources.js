import { graphql } from "gatsby"

export const ResourcesFragment = graphql`
  fragment ResourcesFragment on ContentfulResourcesConnection {
    nodes {
      id
      name
      profile {
        fluid(maxWidth: 360) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      country
      facebook
      group
      instagram
      medium
      reddit
      slug
      tags
      twitter
      website
      youtube
    }
  }
`
