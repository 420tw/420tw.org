import React from "react"
import ResourceCard from "../components/resource/card"
import Layout from "../components/layout"

const Community = ({ resources }) => {
  const resourceCards = resources.map(resource => (
    <ResourceCard key={resource.id} resource={resource} />
  ))
  return (
    <Layout>
      <div className="p-2 sm:p-4 md:p-6 lg:p-8 ">
        <div className="flex flex-wrap">{resourceCards}</div>
      </div>
    </Layout>
  )
}

export default Community
