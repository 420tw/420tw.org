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
        ...ResourcesFragment
      }
    }
  `)
  return <Home resources={data.resources.edges} />
}
