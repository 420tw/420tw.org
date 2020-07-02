import React, { Fragment } from "react"
import Img from "gatsby-image"

const Grids = ({ resources }) => {
  const grids = resources.map(resource => {
    return (
      <Fragment key={resource.id}>
        <Img
          fluid={resource.profile.fluid}
          alt={resource.name}
          className="rounded h-12 w-12 my-1 mx-1"
        />
      </Fragment>
    )
  })
  return <div className="flex flex-wrap">{grids}</div>
}

export default Grids
