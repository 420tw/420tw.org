import React from "react"
import ResourceCard from "../components/resource/card"
import { shuffle } from "../utils"

const Home = ({ resources }) => {
  const resourceCards = shuffle(resources).map(node => (
    <ResourceCard key={node.node.id} resource={node.node} />
  ))
  return (
    <div className="max-w-6xl lg:max-w-full mx-auto px-8 py-8 flex flex-col">
      <div className="flex flex-wrap">{resourceCards}</div>
    </div>
  )
}

export default Home
