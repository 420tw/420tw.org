import React from "react"

import Layout from "../components/layout"
import Card from "../components/community/card"

const Community = ({ resources }) => {
  const Cards = resources.map(resource => (
    <Card key={resource.id} resource={resource} />
  ))
  return (
    <Layout>
      <div className="p-2 sm:p-4 md:p-6 lg:p-8 ">
        <div className="flex flex-wrap">{Cards}</div>
      </div>
    </Layout>
  )
}

export default Community
