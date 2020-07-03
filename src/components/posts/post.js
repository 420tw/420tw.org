import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Moment from "react-moment"
import { useIntl } from "react-intl"
import Helmet from "react-helmet"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const Post = ({ post }) => {
  const { title, content, publishedAt, node_locale, slug } = post
  const { siteUlr } = useSiteMetadata()
  const intl = useIntl()
  const canonical = `${siteUlr}/${node_locale}/community/${slug}`
  return (
    <div className="max-w-3xl mx-auto my-8 py-2 px-4">
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={documentToReactComponents(content.json)}
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={node_locale} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={documentToReactComponents(content.json)}
        />
      </Helmet>
      <h1 className="text-4xl">{title}</h1>
      <div className="text-sm dark:text-gray-300">
        {intl.formatMessage({ id: "published_at" })}{" "}
        <Moment fromNow locale={node_locale === "zh" ? "zh-tw" : "en"}>
          {publishedAt}
        </Moment>
      </div>
      <div className="my-4 space-y-4">
        {documentToReactComponents(content.json)}
      </div>
    </div>
  )
}
export default Post
