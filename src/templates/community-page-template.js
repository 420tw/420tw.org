import React from "react"
import { graphql } from "gatsby"
import CommunityPage from "../components/community/community-page"

export const communityPageQuery = graphql`
  query CommunityQuery($slug: String!, $locale: String!) {
    contentfulResources(slug: { eq: $slug }, node_locale: { eq: $locale }) {
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
      location {
        lat
        lon
      }
    }
  }
`

const CommunityPageTemplate = ({ data }) => {
  const { contentfulResources: resource } = data
  return <CommunityPage resource={resource} />
}
export default CommunityPageTemplate
