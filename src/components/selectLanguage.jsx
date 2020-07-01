import { useSiteMetadata } from "../hooks/use-site-metadata"
import { globalHistory } from "@reach/router"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"
import React from "react"
import { FaCannabis } from "react-icons/fa"

const SelectLanguage = () => {
  const { languages } = useSiteMetadata()
  const url = globalHistory.location.pathname
  const { langs, defaultLangKey } = languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}/`
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))
  const links = langsMenu.map(lang => (
    <Link
      key={lang.langKey}
      to={lang.link}
      className={`${lang.selected ? "underline" : ""} mx-1 flex items-center`}
    >
      {lang.selected && <FaCannabis className="inline mx-1" />}
      <FormattedMessage id={lang.langKey} />
    </Link>
  ))

  return <>{links}</>
}
export default SelectLanguage
