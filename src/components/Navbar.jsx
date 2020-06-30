import React from "react"
import { Link } from "gatsby"
import lightLogo from "../images/marijuana-light.svg"
import darkLogo from "../images/marijuana-dark.svg"
import { injectIntl } from "react-intl"
const NavLink = ({ intl, dest, name }) => {
  return (
    <li>
      <Link
        to={`/${intl.locale}/${dest}`}
        className="text-teal-900 hover:text-teal-600 dark:text-gray-100 dark:hover:text-gray-400 mx-2"
      >
        {name}
      </Link>
    </li>
  )
}

const Navbar = ({ intl }) => {
  return (
    <nav className="flex flex-col justify-center p-6 bg-gray-200 dark:bg-teal-900">
      <div className="text-white self-center">
        <a href={`/`}>
          <img
            src={lightLogo}
            alt={`420TW.ORG`}
            className="h-12 lg:h-16 hidden dark:block"
          />
          <img
            src={darkLogo}
            alt={`420TW.ORG`}
            className="h-12 lg:h-16 block dark:hidden"
          />
        </a>
      </div>
      <h1 className="text-teal-900 dark:text-white  text-center uppercase my-2 text-xl lg:text-2xl font-semibold">
        <a href={`/`}>420 台灣</a>
      </h1>
      <ul className="flex justify-center overflow-scroll">
        <NavLink intl={intl} dest={`/`} name="首頁" />
        <NavLink intl={intl} dest={`/community`} name="420 友善社群" />
      </ul>
    </nav>
  )
}

export default injectIntl(Navbar)
