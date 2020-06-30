import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            languages {
              defaultLangKey
              langs
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
