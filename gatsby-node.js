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
              post {
                slug
                title
                createdAt(formatString: "YYYY.MM.DD")
                contentful_id
                category
              }
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

  console.log(tags)

  posts.forEach((post, index) => {
    // const previous = index === posts.length - 1 ? null : posts[index + 1].node
    // const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `/${post.node.slug}`,
      component: blogTemplate,
      context: {
        slug: post.node.slug,
      },
    })
  })
  tags.forEach((tag, index) => {
    // const previous = index === posts.length - 1 ? null : posts[index + 1].node
    // const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `/tags/${tag.node.slug}`,
      component: TagsTemplate,
      context: {
        slug: tag.node.slug,
        posts: tag.node.post,
      },
    })
  })
}
