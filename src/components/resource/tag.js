import React from "react"

// attorney
// artist
// doctor
// entrepreneur
// farmer
// forum
// media
// meme
// pharmacist
// politician
// store

const Tag = ({ tag }) => {
  const badgeColor = tag => {
    switch (tag) {
      case "attorney":
        return "badge-red"
      case "artist":
        return "badge-orange"
      case "doctor":
        return "badge-yellow"
      case "entrepreneur":
        return "badge-green"
      case "farmer":
        return "badge-orange"
      case "forum":
        return "badge-teal"
      case "media":
        return "badge-blue"
      case "meme":
        return "badge-indigo"
      case "pharmacist":
        return "badge-yellow"
      case "politician":
        return "badge-purple"
      case "store":
        return "badge-gray"
      default:
        return "badge-gray"
    }
  }
  return (
    <span className={`badge ${badgeColor(tag)} dark:${badgeColor(tag)} mx-1`}>
      {tag}
    </span>
  )
}
export default Tag
