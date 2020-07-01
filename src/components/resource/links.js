import React from "react"
import {
  AiFillFacebook,
  AiFillHome,
  AiFillInstagram,
  AiFillMediumSquare,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillRedditSquare,
  AiOutlineComment,
} from "react-icons/ai"

const IconLink = ({ dest, icon, title }) => {
  return (
    <div className="flex items-baseline">
      {dest && (
        <a
          href={dest}
          target="_blank"
          className="text-xl pr-2 text-gray-800 dark:text-gray-100"
          rel="noreferrer"
          aria-label={title}
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
      <IconLink
        dest={resource.website}
        title={`website`}
        icon={<AiFillHome />}
      />
      <IconLink
        dest={resource.facebook}
        title={`facebook`}
        icon={<AiFillFacebook />}
      />
      <IconLink
        dest={resource.instagram}
        title={`instagram`}
        icon={<AiFillInstagram />}
      />
      <IconLink
        dest={resource.medium}
        title={`medium`}
        icon={<AiFillMediumSquare />}
      />
      <IconLink
        dest={resource.youtube}
        title={`youtube`}
        icon={<AiFillYoutube />}
      />
      <IconLink
        dest={resource.twitter}
        title={`twitter`}
        icon={<AiFillTwitterSquare />}
      />
      <IconLink
        dest={resource.reddit}
        title={`reddit`}
        icon={<AiFillRedditSquare />}
      />
      <IconLink
        dest={resource.group}
        title={`reddit`}
        icon={<AiOutlineComment />}
      />
    </div>
  )
}

export default Links
