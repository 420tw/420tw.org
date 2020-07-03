import React from "react"
import Layout from "../layout"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Tag from "./tag"
import Links from "./links"
import { AiOutlineGlobal } from "react-icons/ai"

const LocationPin = ({ location }) => {
  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lon}`}
      target="_blank"
      rel="noreferrer"
    >
      <span className="flex items-center">
        <AiOutlineGlobal />
        <p className="ml-1">
          {location.lat}, {location.lon}
        </p>
      </span>
    </a>
  )
}

const Community = ({ resource }) => {
  const { name, profile, description, location } = resource
  const tags = resource.tags.map((tag, index) => (
    <Tag key={`tag__${index}`} tag={tag} />
  ))
  return (
    <Layout>
      <div className="flex flex-wrap p-6 lg:p-8 items-center">
        <div className="w-full mt-4">
          <Img
            fluid={profile.fluid}
            alt={resource.name}
            title={resource.name}
            className="w-1/3 sm:w-48 rounded rounded-full sm:rounded-lg mx-auto sm:mx-24"
          />
        </div>
        <div className="w-full -mt-24 p-24 bg-gray-300 dark:bg-teal-900 rounded rounded-lg">
          <h1 className="font-bold text-4xl mt-4 text-center sm:text-left">
            {name}
          </h1>
          <div className="my-4">{tags}</div>
          <div className="my-4 text-2xl">
            <Links resource={resource} />
          </div>
          {location && <LocationPin location={location} />}
          <div className="mx-auto sm:mx-0 w-full pt-3 border-b-2 border-teal-500 opacity-25" />
          <div className="my-4 text-left">
            {description && documentToReactComponents(description.json)}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Community
