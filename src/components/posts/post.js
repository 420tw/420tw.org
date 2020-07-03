import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Moment from "react-moment"
import { useIntl } from "react-intl"

const Post = ({ post }) => {
  const { title, content, publishedAt } = post
  const intl = useIntl()
  return (
    <div className="max-w-3xl mx-auto my-8 py-2 px-4">
      <h1 className="text-4xl">{title}</h1>
      <div className="text-sm dark:text-gray-300">
        {intl.formatMessage({ id: "published_at" })}{" "}
        <Moment fromNow locale={intl.locale === "zh" ? "zh-tw" : "en"}>
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
