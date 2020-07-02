import React from "react"
import ResourceCard from "../components/resource/card"
import Layout from "../components/layout"

const Community = ({ resources }) => {
  const resourceCards = resources.map(resource => (
    <ResourceCard key={resource.id} resource={resource} />
  ))
  return (
    <Layout>
      <div className="max-w-6xl lg:max-w-full mx-auto px-8 py-8 flex flex-col">
        <div className="flex flex-wrap">{resourceCards}</div>
      </div>
    </Layout>
  )
}

export default Community
