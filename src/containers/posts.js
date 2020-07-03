import React from "react"
import Layout from "../components/layout"
import { Item } from "../components/posts/posts"

const Posts = ({ posts }) => {
  const items = posts.map(post => <Item key={`post__${post.id}`} post={post} />)
  return (
    <Layout>
      <div className="my-5">{items}</div>
    </Layout>
  )
}

export default Posts
