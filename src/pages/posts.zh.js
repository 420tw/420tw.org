import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Posts from "../containers/posts"

export default () => {
  const data = useStaticQuery(graphql`
    {
      posts: allContentfulPosts(filter: { node_locale: { eq: "zh" } }) {
        ...PostsFragment
      }
    }
  `)
  return <Posts posts={data.posts.nodes} />
}
