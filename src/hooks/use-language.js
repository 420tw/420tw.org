import { useSiteMetadata } from "./use-site-metadata"
import { globalHistory } from "@reach/router"
import { getCurrentLangKey } from "ptz-i18n"

const useLanguage = () => {
  const { languages } = useSiteMetadata()
  const url = globalHistory.location.pathname
  const { langs, defaultLangKey } = languages
  const currentLang = getCurrentLangKey(langs, defaultLangKey, url)

  return { currentLang, langs }
}

export default useLanguage
