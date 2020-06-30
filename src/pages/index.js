import React, { useEffect } from "react"
import Index from "../layouts"
import { graphql, navigate, withPrefix } from "gatsby"
import { getUserLangKey } from "ptz-i18n"

export default function Home({ data }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { langs, defaultLangKey } = data.site.siteMetadata.languages
      const langKey = getUserLangKey(langs, defaultLangKey)
      const homeUrl = withPrefix(`/${langKey}/`)

      navigate(homeUrl)
    }
  })
  return <Index>Hello world!</Index>
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`
