import React from "react"
import { graphql } from "gatsby"
import Community from "../components/community/community"

export const pageQuery = graphql`
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
          src
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

const CommunityPageTemplate = ({ data }) => {
  const { contentfulResources: community } = data
  return <Community community={community} />
}
export default CommunityPageTemplate
