import React from "react"
import Grids from "../components/community/grids"
import Layout from "../components/layout"
import Posts from "../components/posts/posts"
import SiteMetadata from "../components/site-metadata"

const Home = ({ posts, resources }) => {
  return (
    <Layout>
      <SiteMetadata pathname={`/`} />
      <div className="p-2 sm:p-4 md:p-6 lg:p-8 flex flex-wrap">
        <div className="w-full md:w-3/5">
          <Posts posts={posts} />
        </div>
        <div className="w-full md:w-2/5">
          <Grids resources={resources} />
        </div>
      </div>
    </Layout>
  )
}

export default Home
