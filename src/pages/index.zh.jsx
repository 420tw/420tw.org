/*eslint no-unused-vars: "error"*/
import React from "react"
import { graphql } from "gatsby"
import Home from "../containers/Home"

export default ({ data }) => {
  return <Home data={data} />
}

export const query = graphql`
  {
    resources: allContentfulResources(filter: { node_locale: { eq: "zh" } }) {
      ...ResourcesFragment
    }
  }
`
