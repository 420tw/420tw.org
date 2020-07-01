import React from "react"
import {
  AiFillFacebook,
  AiFillHome,
  AiFillInstagram,
  AiFillMediumSquare,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillRedditSquare,
} from "react-icons/ai"

const IconLink = ({ dest, icon }) => {
  return (
    <div className="flex items-baseline">
      {dest && (
        <a
          href={dest}
          target="_blank"
          className="text-xl pr-2 text-gray-800 dark:text-gray-100"
          rel="noreferrer"
        >
          {icon}
        </a>
      )}
    </div>
  )
}

const Links = ({ resource }) => {
  return (
    <div className="flex my-3">
      <IconLink dest={resource.website} icon={<AiFillHome />} />
      <IconLink dest={resource.facebook} icon={<AiFillFacebook />} />
      <IconLink dest={resource.instagram} icon={<AiFillInstagram />} />
      <IconLink dest={resource.medium} icon={<AiFillMediumSquare />} />
      <IconLink dest={resource.youtube} icon={<AiFillYoutube />} />
      <IconLink dest={resource.twitter} icon={<AiFillTwitterSquare />} />
      <IconLink dest={resource.reddit} icon={<AiFillRedditSquare />} />
    </div>
  )
}

export default Links
