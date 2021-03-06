import React from "react"
import Img from "gatsby-image"
import Links from "./links"
import Tag from "./tag"
import { Link } from "gatsby"

const Card = ({ resource }) => {
  const tags = resource.tags.map((tag, index) => (
    <Tag key={`tag__${index}`} tag={tag} />
  ))
  return (
    <div className="mt-6 px-2 w-full sm:w-1/2 lg:w-1/3 ">
      <div className="flex rounded-lg shadow-lg overflow-hidden bg-gray-200 dark:bg-gray-900">
        <Link
          to={`/${resource.node_locale}/community/${resource.slug}`}
          className="h-1/2 w-1/2 flex-shrink-0 object-cover object-center"
        >
          <Img
            fluid={resource.profile.fluid}
            alt={resource.name}
            title={resource.name}
          />
        </Link>
        <div className="flex flex-col overflow-hidden">
          <div className="w-full flex-grow flex items-center">
            <h2 className="px-3 font-semibold text-lg text-gray-800 dark:text-gray-100">
              <Link to={`/${resource.node_locale}/community/${resource.slug}`}>
                {resource.name}
              </Link>
            </h2>
          </div>
          <div className="px-3 mb-1">
            <Links resource={resource} />
          </div>
          <div className="pb-3 px-2">{tags}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
