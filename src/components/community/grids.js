import React, { Fragment } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Grids = ({ resources }) => {
  const grids = resources.map(resource => {
    return (
      <Fragment key={resource.id}>
        <Link to={`/${resource.node_locale}/community/${resource.slug}`}>
          <Img
            fluid={resource.profile.fluid}
            title={resource.name}
            alt={resource.name}
            className="rounded h-12 w-12 my-1 mx-1"
          />
        </Link>
      </Fragment>
    )
  })
  return <div className="flex flex-wrap">{grids}</div>
}

export default Grids
