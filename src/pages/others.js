import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { IncrementViewCount } from "../utils/common.js"

//elements
import { Post } from "../components/elements/elements"
import { PostImage } from "../components/elements/elements"
import { PostText } from "../components/elements/elements"
import { PostTitle } from "../components/elements/elements"
import { PostDiscription } from "../components/elements/elements"

class OthersArticle extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allContentfulPost.edges

    const handleClick = e => {
      const entryId = e.currentTarget.getAttribute("data-id")
      const prevCount = e.currentTarget.getAttribute("data-count")
      console.log(prevCount)
      IncrementViewCount(entryId, prevCount)
    }

    return (
      <>
        <SEO title="other" />
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Link
              to={`/${node.slug}`}
              key={node.slug}
              data-id={node.contentful_id}
              data-count={node.counter["counter"]}
              onClick={handleClick}
            >
              <Post>
                <PostImage>
                  <Img
                    fluid={node.image.fluid}
                    maxWidth="200"
                    maxHeight="200"
                  />
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

export default OthersArticle

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(filter: { category: { eq: "その他" } }, limit: 10) {
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
          counter {
            counter
          }

          slug
          contentful_id
        }
      }
    }
  }
`
