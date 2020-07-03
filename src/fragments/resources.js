import { graphql } from "gatsby"

export const ResourcesProfileFragment = graphql`
  fragment ResourcesProfileFragment on ContentfulResourcesConnection {
    nodes {
      id
      name
      slug
      profile {
        fixed(width: 48) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      node_locale
    }
  }
`

export const ResourcesFragment = graphql`
  fragment ResourcesFragment on ContentfulResourcesConnection {
    nodes {
      id
      name
      slug
      description {
        json
      }
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
      node_locale
    }
  }
`
