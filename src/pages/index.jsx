import React, { useEffect } from "react"
import Index from "../components/layout"
import { navigate, withPrefix } from "gatsby"
import { getUserLangKey } from "ptz-i18n"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function Home() {
  const { languages } = useSiteMetadata()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { langs, defaultLangKey } = languages
      const langKey = getUserLangKey(langs, defaultLangKey)
      const homeUrl = withPrefix(`/${langKey}/`)

      navigate(homeUrl)
    }
  })
  return <div>Hello world!</div>
}
