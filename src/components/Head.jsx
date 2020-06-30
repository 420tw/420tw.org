import { Helmet } from "react-helmet"
import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { title } = useSiteMetadata()
  return <Helmet title={title} />
}
