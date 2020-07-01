import React from "react"
import ContentLoader from "react-content-loader"
import Img from "gatsby-image"

const GridLoading = props => (
  <ContentLoader
    speed={2}
    width={56}
    height={56}
    viewBox="0 0 56 56"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="4" y="4" rx="2" ry="2" width="48" height="48" />
  </ContentLoader>
)

const Grids = () => {
  return (
    <div className="flex flex-wrap">
      {resources.map(resource => (
        <div key={resource.id}>
          <Img
            fluid={resource.profile.fluid}
            className="rounded h-12 my-1 mx-1"
          />
        </div>
      ))}
    </div>
  )
}

export default Grids
