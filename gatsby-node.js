const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog-post-contentful.js`)
  const TagsTemplate = path.resolve(`./src/templates/tags.js`)
  console.log(TagsTemplate)
  const result = await graphql(
    `
      {
        posts: allContentfulPost {
          edges {
            node {
              title
              subtitle
              slug
            }
          }
        }
        tags: allContentfulTag {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.posts.edges
  const tags = result.data.tags.edges

  posts.forEach(post => {
    createPage({
      path: `/${post.node.slug}`,
      component: blogTemplate,
      context: {
        slug: post.node.slug,
      },
    })
  })
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.node.slug}`,
      component: TagsTemplate,
      context: {
        slug: tag.node.slug,
      },
    })
  })
}
