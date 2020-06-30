import React from "react"
import Navbar from "../components/Navbar"
import Copyright from "../components/Copyright"
import { IntlProvider } from "react-intl"
import { globalHistory } from "@reach/router"
import { getCurrentLangKey } from "ptz-i18n"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default ({ children }) => {
  const { languages } = useSiteMetadata()
  const url = globalHistory.location.pathname
  const { langs, defaultLangKey } = languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  return (
    <IntlProvider locale={langKey} key={langKey}>
      <Navbar />
      {children}
      <Copyright />
    </IntlProvider>
  )
}
