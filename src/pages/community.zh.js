import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Community from "../containers/community"

export default () => {
  const data = useStaticQuery(graphql`
    {
      resources: allContentfulResources(
        filter: { node_locale: { eq: "zh" } }
        sort: { fields: name }
      ) {
        ...ResourcesFragment
      }
    }
  `)
  return <Community resources={data.resources.nodes} />
}
