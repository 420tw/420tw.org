import { Helmet } from "react-helmet"
import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import useLanguage from "../hooks/use-language"
import ogImage from "../images/420Asia.org.png"

const SiteMetadata = ({ pathname }) => {
  const { title, description, siteUrl, twitter } = useSiteMetadata()
  const { currentLang } = useLanguage()
  const href = `${siteUrl}${pathname}`
  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang={currentLang} />
      <link rel="canonical" href={href} />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={href} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={currentLang} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:alt" content="420Asia.org Logo" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
    </Helmet>
  )
}
export default SiteMetadata
