import React from "react"
import Img from "gatsby-image"
import Links from "./links"
import Tag from "./tag"

const ResourceCard = ({ resource }) => {
  const tags = resource.tags.map((tag, index) => (
    <Tag key={`tag__${index}`} tag={tag} />
  ))
  return (
    <div className="mt-6 px-2 w-full sm:w-1/2 lg:w-1/3">
      <div className="flex rounded-lg shadow-lg overflow-hidden bg-gray-200 dark:bg-gray-900">
        <Img
          fluid={resource.profile.fluid}
          alt={resource.name}
          title={resource.name}
          className="h-1/2 w-1/2 flex-shrink-0 object-cover object-center"
        />
        <div className="flex flex-col overflow-hidden">
          <div className="w-full flex-grow flex items-center">
            <h2 className="px-3 font-semibold text-lg text-gray-800 dark:text-gray-100">
              {resource.name}
            </h2>
          </div>
          <div className="px-3">
            <Links resource={resource} />
          </div>
          <div className="pb-2 px-3">{tags}</div>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard
