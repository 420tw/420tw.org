import React from "react"
import Navbar from "../components/Navbar"
import Copyright from "../components/Copyright"
import { IntlProvider } from "react-intl"
import { globalHistory } from "@reach/router"
import { getCurrentLangKey } from "ptz-i18n"
import { graphql, useStaticQuery } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
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
  )
  const url = globalHistory.location.pathname
  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  return (
    <IntlProvider locale={langKey} key={langKey}>
      <Navbar />
      {children}
      <Copyright />
    </IntlProvider>
  )
}
