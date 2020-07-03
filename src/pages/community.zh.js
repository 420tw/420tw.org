import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Communities from "../containers/community"

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
  return <Communities resources={data.resources.nodes} />
}
