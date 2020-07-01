import React from "react"
import { Link } from "gatsby"
import lightLogo from "../images/marijuana-light.svg"
import darkLogo from "../images/marijuana-dark.svg"
import { injectIntl, useIntl } from "react-intl"
import SelectLanguage from "./selectLanguage"

const NavLink = ({ dest, name }) => {
  const intl = useIntl()
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

const Navbar = ({ langs }) => {
  const intl = useIntl()
  return (
    <>
      <nav className="flex flex-col justify-center p-6 bg-gray-200 dark:bg-teal-900">
        <div className="text-white self-center">
          <Link key={`/${intl.locale}`} to={`/${intl.locale}`}>
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
          </Link>
        </div>
        <h1 className="text-teal-900 dark:text-white  text-center uppercase my-2 text-xl lg:text-2xl font-semibold">
          <Link to={`/${intl.locale}`}>
            {intl.formatMessage({ id: "title" })}
          </Link>
        </h1>
        <ul className="flex justify-center overflow-scroll">
          <NavLink
            intl={intl}
            dest={``}
            name={intl.formatMessage({ id: "home" })}
          />
          <NavLink
            intl={intl}
            dest={`community`}
            name={intl.formatMessage({ id: "community" })}
          />
        </ul>
        <div className="flex justify-center items-center">
          <SelectLanguage />
        </div>
      </nav>
    </>
  )
}

export default injectIntl(Navbar)
