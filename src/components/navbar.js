import React, { useState } from "react"
import { Link } from "gatsby"
import lightLogo from "../images/marijuana-light.svg"
import darkLogo from "../images/marijuana-dark.svg"
import { injectIntl, useIntl } from "react-intl"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import SelectLanguage from "./selectLanguage"

const Logo = ({ intl }) => {
  return (
    <Link key={`/${intl.locale}`} to={`/${intl.locale}`}>
      <div className="flex items-center">
        <img
          src={lightLogo}
          alt={`420TW.ORG`}
          className="h-8 w-8 hidden dark:inline-block mr-2"
        />
        <img
          src={darkLogo}
          alt={`420TW.ORG`}
          className="h-8 w-8 inline-block dark:hidden mr-2"
        />
        <span className="font-semibold text-xl tracking-tight">
          {intl.formatMessage({ id: "title" })}
        </span>
      </div>
    </Link>
  )
}

const NavLink = props => {
  return (
    <Link
      className="block mt-4 sm:inline-block sm:mt-0 mr-4 rounded px-2 py-1 mt-1 sm:mt-0 text-teal-900 hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-teal-800"
      {...props}
    >
      {props.children}
    </Link>
  )
}

const Navbar = () => {
  const intl = useIntl()
  const [isOpened, setOpened] = useState(false)
  const MenuButton = isOpened ? AiOutlineClose : AiOutlineMenu
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-200 dark:bg-teal-900 p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Logo intl={intl} />
        </div>
        <div className="block sm:hidden">
          <button
            className="flex items-center px-3 py-2 rounded focus:text-teal-900 dark:focus:text-white focus:outline-none"
            aria-label="Menu Button"
            onClick={() => setOpened(!isOpened)}
          >
            <MenuButton className="text-xl text-teal-900 hover:text-teal-600 dark:text-white dark:hover:text-gray-400" />
          </button>
        </div>
        <div
          className={`${
            isOpened ? "block" : "hidden"
          } w-full block flex-grow sm:flex sm:items-center sm:w-auto `}
        >
          <div className="text-sm sm:flex-grow">
            <NavLink
              to={`/${intl.locale}/community`}
              activeClassName="bg-gray-300 dark:bg-teal-800"
              partiallyActive={true}
            >
              {intl.formatMessage({ id: "community" })}
            </NavLink>
          </div>
          <div>
            <SelectLanguage
              style={`text-sm block mt-4 sm:inline-block sm:mt-0 mr-4 rounded px-2 py-1 mt-1 sm:mt-0 text-teal-900 hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-teal-800`}
            />
          </div>
        </div>
      </nav>
    </>
  )
}

export default injectIntl(Navbar)
