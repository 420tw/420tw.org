import React from "react"
import Post from "../components/posts/post"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const postPageQuery = graphql`
  query PostQuery($slug: String!, $locale: String!) {
    contentfulPosts(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      id
      title
      content {
        json
      }
      publishedAt
      slug
      cover {
        fixed {
          src
        }
      }
      node_locale
    }
  }
`

const PostPageTemplate = ({ data }) => {
  const { contentfulPosts: post } = data
  return (
    <Layout>
      <Post post={post} />
    </Layout>
  )
}
export default PostPageTemplate
