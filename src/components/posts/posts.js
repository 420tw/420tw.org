import React from "react"
import { FaCannabis } from "react-icons/fa"
import { useIntl } from "react-intl"
import Moment from "react-moment"
import "moment/locale/zh-tw"
import { Link } from "gatsby"

export const Item = ({ post }) => {
  const { title, publishedAt, slug } = post
  const intl = useIntl()
  return (
    <Link to={`/${intl.locale}/posts/${slug}`}>
      <div className="flex items-center">
        <div className="px-4">
          <FaCannabis />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl">{title}</h1>
          <div className="text-sm dark:text-gray-300">
            {intl.formatMessage({ id: "published_at" })}{" "}
            <Moment fromNow locale={intl.locale === "zh" ? "zh-tw" : "en"}>
              {publishedAt}
            </Moment>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Posts = ({ posts }) => {
  const items = posts.map(post => <Item key={`post__${post.id}`} post={post} />)
  return <div className="my-5">{items}</div>
}
export default Posts
