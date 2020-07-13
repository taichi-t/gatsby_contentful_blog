import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

//elements
import { Post } from "../components/elements/elements"
import { PostImage } from "../components/elements/elements"
import { PostText } from "../components/elements/elements"
import { PostTitle } from "../components/elements/elements"
import { PostDiscription } from "../components/elements/elements"

import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allContentfulPost.edges

    return (
      <>
        <SEO title="New posts" />

        {posts.map(({ node }) => {
          const title = node.title || node.slug

          return (
            <Link
              to={`/${node.slug}`}
              key={node.slug}
              data-id={node.contentful_id}
            >
              <Post>
                <PostImage>
                  <Img fluid={node.image.fluid} width="100%" height="100%" />
                </PostImage>
                <PostText>
                  <header>
                    <PostTitle>{title}</PostTitle>
                  </header>
                  <section>
                    <PostDiscription>
                      <p>{node.createdAt}</p>
                      <p>#{node.category}</p>
                    </PostDiscription>
                  </section>
                </PostText>
              </Post>
            </Link>
          )
        })}
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allContentfulPost(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          title
          category
          createdAt(formatString: "YYYY.MM.DD")
          image {
            fluid(maxWidth: 220, maxHeight: 220, quality: 50) {
              ...GatsbyContentfulFluid
            }
          }
          slug

          contentful_id
        }
      }
    }
  }
`
