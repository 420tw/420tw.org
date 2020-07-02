import React from "react"
import Grids from "../components/resource/grids"
import Layout from "../components/layout"

const Home = ({ resources }) => {
  return (
    <Layout>
      <div className="p-2 sm:p-4 md:p-6 lg:p-8 flex flex-wrap">
        <div className="w-full md:w-3/4">Left</div>
        <div className="w-full md:w-1/4">
          <Grids resources={resources} />
        </div>
      </div>
    </Layout>
  )
}

export default Home
