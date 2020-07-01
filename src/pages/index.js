import React, { useEffect } from "react"
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
  return (
    <div className="max-w-6xl lg:max-w-full mx-auto px-8 py-8 flex flex-col">
      <div className="flex flex-wrap"></div>
    </div>
  )
}
