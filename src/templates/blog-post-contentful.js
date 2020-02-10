import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostContentfulTemplate extends React.Component {
  render() {
    const articles = this.props.data.allContentfulPost.edges
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title

    // const { previous, next } = this.props.pageContext //　次に読む記事のprops

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        articles={articles}
      >
        <SEO title={post.title} description={post.subtitle} />
        <Img fluid={post.image.fluid} />
        <article>
          <header>
            <h1 style={{}}>{post.title}</h1>
          </header>
          <section
            dangerouslySetInnerHTML={{
              __html: post.content.childContentfulRichText.html,
            }}
          />
          <hr style={{}} />
          <footer></footer>
        </article>
        {/* <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
      </Layout>
    )
  }
}

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
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          author
          slug
        }
      }
    }
  }
`
