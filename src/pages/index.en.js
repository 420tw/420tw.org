/*eslint no-unused-vars: "error"*/
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Home from "../containers/home"

export default () => {
  const data = useStaticQuery(graphql`
    {
      resources: allContentfulResources(
        filter: { node_locale: { eq: "en" } }
        sort: { fields: name }
      ) {
        ...ResourcesProfileFragment
      }
      posts: allContentfulPosts(filter: { node_locale: { eq: "en" } }) {
        ...PostsFragment
      }
    }
  `)
  return <Home posts={data.posts.nodes} resources={data.resources.nodes} />
}
