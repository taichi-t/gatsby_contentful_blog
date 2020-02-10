import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

class VancouverArticles extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle} articles={posts}>
        <SEO title="vancouver" />
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Post key={node.slug}>
              <PostImage>
                <Img fluid={node.image.fluid} />
              </PostImage>
              <PostText>
                <header>
                  <h3>
                    <Link to={`/${node.slug}`}>{title}</Link>
                  </h3>
                </header>
                <section>
                  <p>{node.subtitle}</p>
                </section>
              </PostText>
            </Post>
          )
        })}
      </Layout>
    )
  }
}

export default VancouverArticles

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(filter: { category: { eq: "vancouver" } }, limit: 10) {
      edges {
        node {
          title
          subtitle
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          category
          author
          slug
        }
      }
    }
  }
`

const Post = styled.div`
  display: flex;
`
const PostImage = styled.div`
  flex: 25%;
`

const PostText = styled.div`
  flex: 75%;
`
