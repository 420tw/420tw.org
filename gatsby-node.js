const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query ResourcesQuery {
      resources: allContentfulResources {
        nodes {
          slug
          node_locale
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const CommunityPageTemplate = path.resolve("./src/templates/community.js")
  const resources = result.data.resources.nodes
  resources.forEach(resource => {
    createPage({
      path: `${resource.node_locale}/community/${resource.slug}`,
      component: CommunityPageTemplate,
      context: {
        slug: resource.slug,
      },
    })
  })
}
