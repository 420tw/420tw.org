import { graphql } from "gatsby"

export const PostsFragment = graphql`
  fragment PostsFragment on ContentfulPostsConnection {
    nodes {
      id
      title
      content {
        json
      }
      slug
      publishedAt
      cover {
        fixed {
          src
        }
      }
      node_locale
    }
  }
`
