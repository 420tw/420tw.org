import React from "react"
import Grids from "../components/resource/grids"
import Layout from "../components/layout"

const Home = ({ resources }) => {
  return (
    <Layout>
      <div className="max-w-6xl lg:max-w-full mx-auto px-8 py-8 flex flex-wrap">
        <div className="w-full md:w-3/4">Left</div>
        <div className="w-full md:w-1/4">
          <Grids resources={resources} />
        </div>
      </div>
    </Layout>
  )
}

export default Home
