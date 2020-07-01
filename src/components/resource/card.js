import React from "react"
import Img from "gatsby-image"
import Links from "./links"
import Tag from "./tag"

const ResourceCard = ({ resource }) => {
  const tags = resource.tags.map((tag, index) => (
    <Tag key={`tag__${index}`} tag={tag} />
  ))
  return (
    <div className="mt-6 w-full px-2 md:w-1/2 lg:w-1/3">
      <div className="flex items-center rounded-lg shadow-lg overflow-hidden bg-gray-200 dark:bg-gray-900">
        <Img
          fluid={resource.profile.fluid}
          alt={resource.name}
          className="h-1/2 w-1/2 flex-shrink-0 object-cover object-center"
        />
        <div className="px-6 py-4">
          <div className="flex items-center">
            <h2 className="text-xs md:text-base lg:text-xl text-gray-800 dark:text-gray-100 tracking-normal font-semibold">
              {resource.name}
            </h2>
          </div>
          <Links resource={resource} />
          {tags}
        </div>
      </div>
    </div>
  )
}

export default ResourceCard
