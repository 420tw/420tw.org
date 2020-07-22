import React from "react"
import Navbar from "./navbar"
import { IntlProvider } from "react-intl"
import Footer from "./footer"
import SiteMetadata from "./site-metadata"
import useLanguage from "../hooks/use-language"

const Layout = ({ children }) => {
  const { currentLang } = useLanguage()
  const i18nMessages = require(`../data/messages/${currentLang}`)

  return (
    <IntlProvider
      locale={currentLang}
      key={currentLang}
      messages={i18nMessages}
    >
      <SiteMetadata pathname={``} />
      <div className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </div>
    </IntlProvider>
  )
}
export default Layout
