const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query PagesQuery {
      resources: allContentfulResources {
        nodes {
          slug
          node_locale
        }
      }
      posts: allContentfulPosts {
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
  const CommunityPageTemplate = path.resolve(
    "./src/templates/community-page-template.js"
  )
  const resources = result.data.resources.nodes
  resources.forEach(resource => {
    createPage({
      path: `${resource.node_locale}/community/${resource.slug}`,
      component: CommunityPageTemplate,
      context: {
        slug: resource.slug,
        locale: resource.node_locale,
      },
    })
  })

  const PostPageTemplate = path.resolve("./src/templates/post-page-template.js")
  const posts = result.data.posts.nodes
  posts.forEach(post => {
    createPage({
      path: `${post.node_locale}/posts/${post.slug}`,
      component: PostPageTemplate,
      context: {
        slug: post.slug,
        locale: post.node_locale,
      },
    })
  })
}
