import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import postContentStyle from "./post-style/postContentStyle"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostContentfulTemplate extends React.Component {
  render() {
    const articles = this.props.data.allContentfulPost.edges
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        articles={articles}
      >
        <SEO title={post.title} description={post.subtitle} />

        <article>
          <ArticleContaienr>
            <header>
              <PostTitle>{post.title}</PostTitle>
              <PostDiscription>{post.date}</PostDiscription>
              <PostDiscription>#{post.category}</PostDiscription>
            </header>

            <section>
              <PostContent
                dangerouslySetInnerHTML={{
                  __html: post.longText.childMarkdownRemark.html,
                }}
              ></PostContent>
            </section>

            <hr />
          </ArticleContaienr>
        </article>
      </Layout>
    )
  }
}

const PostContent = styled.div`
  ${postContentStyle}
`

const ArticleContaienr = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  background-color: #fffdf7;
  border: 1px solid #bbc0cf;
  -webkit-box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25);
`

const PostTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 24px;
`

const PostDiscription = styled.h2`
  font-size: 16px;
  color: #000000;
  opacity: 0.5;
  padding-bottom: 16px;
  &:last-of-type {
    padding-bottom: 0;
  }
`

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title

        author
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      subtitle
      author
      longText {
        childMarkdownRemark {
          html
        }
      }
      date(formatString: "YYYY.MM.DD")
      category
    }
    allContentfulPost {
      edges {
        node {
          title
          author
          slug
          counter {
            counter
          }
          contentful_id
        }
      }
    }
  }
`
