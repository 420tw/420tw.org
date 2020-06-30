import React from "react"
import Navbar from "../components/Navbar"
import Copyright from "../components/Copyright"
import { IntlProvider } from "react-intl"
import { getCurrentLangKey } from "ptz-i18n"
import { graphql, useStaticQuery } from "gatsby"

export default ({ children, location }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            languages {
              defaultLangKey
              langs
            }
          }
        }
      }
    `
  )
  const url = location.pathname
  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  return (
    <IntlProvider locale={langKey} key={langKey}>
      <Navbar />
      {JSON.stringify(location.pathname)}
      {JSON.stringify(data)}
      {children}
      <Copyright />
    </IntlProvider>
  )
}

// export const query = graphql`
//   query Layout {
//     site {
//       siteMetadata {
//         languages {
//           defaultLangKey
//           langs
//         }
//       }
//     }
//   }
// `
