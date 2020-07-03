import React from "react"
import Layout from "../layout"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Tag from "./tag"
import Links from "./links"
import { AiOutlineGlobal } from "react-icons/ai"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Helmet from "react-helmet"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const LocationPin = ({ location }) => {
  return (
    <OutboundLink
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
    </OutboundLink>
  )
}

const Community = ({ resource }) => {
  const { name, profile, description, location, node_locale, slug } = resource
  const { siteUlr } = useSiteMetadata()
  const canonical = `${siteUlr}/${node_locale}/community/${slug}`
  const title = resource.name
  const tags = resource.tags.map((tag, index) => (
    <Tag key={`tag__${index}`} tag={tag} />
  ))
  return (
    <Layout>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={node_locale} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <div className="flex flex-wrap p-4 sm:p-8 items-center">
        <div className="w-full mt-4">
          <Img
            fluid={profile.fluid}
            alt={resource.name}
            title={resource.name}
            className="w-1/3 rounded rounded-full sm:rounded-lg sm:w-48 mx-auto sm:mx-24 shadow-2xl"
          />
        </div>
        <div className="w-full -mt-12 p-6 sm:-mt-24 sm:p-24 bg-gray-300 dark:bg-teal-900 rounded rounded-lg">
          <h1 className="font-bold text-2xl sm:text-2xl md:text-4xl mt-12 text-center sm:text-left">
            {name}
          </h1>
          <div className="my-4">{tags}</div>
          <div className="my-4 text-base sm:text-2xl">
            <Links resource={resource} />
          </div>
          {location && <LocationPin location={location} />}
          <div className="mx-auto sm:mx-0 w-full pt-3 border-b-2 border-teal-500 opacity-25" />
          <div className="my-4 text-left text-sm sm:text-base">
            {description && documentToReactComponents(description.json)}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Community
