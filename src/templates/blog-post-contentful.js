import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import postContentStyle from "./post-style/postContentStyle"
import syntaxHighlightingStyle from "./post-style/syntaxHighlightingStyle"
import { Button } from "../components/elements/elements"
import media from "styled-media-query"
import { breakPoints } from "../components/elements/elements"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostContentfulTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      copied: false,
    }
  }
  render() {
    const articles = this.props.data.allContentfulPost.edges
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const link = this.props.location.href

    const handleClick = e => {
      e.target.disabled = true
      this.setState({ copied: true })
      let elem = document.createElement("textarea")
      elem.id = "textarea"
      elem.innerText = link
      elem.readOnly = "readOnly"
      elem.style = "right:100vh"
      document.body.append(elem)
      elem.select()
      const range = document.createRange()
      range.selectNodeContents(elem)
      const sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
      elem.setSelectionRange(0, 999999)
      document.execCommand("copy")
      elem.remove()
      setTimeout(() => {
        this.setState({ copied: false })
      }, 1500)
      e.target.disabled = false
    }

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        articles={articles}
      >
        <SEO title={post.title} description={post.subtitle} />
        <ArticleContaienr>
          <article>
            <header>
              <HeaderContainer>
                <PostTitle>{post.title}</PostTitle>
                <PostDiscription>{post.createdAt}</PostDiscription>
                <PostDiscription>#{post.category}</PostDiscription>
              </HeaderContainer>
            </header>

            <section>
              <PostContent
                dangerouslySetInnerHTML={{
                  __html: post.longText.childMarkdownRemark.html,
                }}
              ></PostContent>
            </section>
            <footer>
              <FooterContainer>
                <Button
                  color={"#ffffff"}
                  bgc={"#808080"}
                  shadow={"true"}
                  transform={"true"}
                  border={"true"}
                  style={{ marginRight: "2.4rem", cursor: "pointer" }}
                  onClick={handleClick}
                  copied={this.state.copied}
                  id="link"
                  fontSize={1.6}
                >
                  リンク
                </Button>

                <a
                  href={`http://twitter.com/share?url=${link}&text=${post.title}`}
                  data-lang="ja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    color={"#ffffff"}
                    bgc={"#00ACEE"}
                    shadow={"true"}
                    transform={"true"}
                    border={"true"}
                    id="share"
                    fontSize={1.6}
                  >
                    ツイッターで共有
                  </Button>
                </a>
              </FooterContainer>
              <hr />
            </footer>
          </article>
        </ArticleContaienr>
      </Layout>
    )
  }
}

const HeaderContainer = styled.div`
  margin: 2.4rem 0 6.4rem 0;
`

const ArticleContaienr = styled.div`
  color: #333;
  width: 100%;
  height: 100%;
  padding: 3.2rem;
  background-color: #fffdf7;
  border: 1px solid #bbc0cf;
  -webkit-box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25);
  ${media.lessThan(breakPoints["xsmall"])`
    font-size:3rem;
  `}
`

const PostContent = styled.div`
  ${postContentStyle}
  ${syntaxHighlightingStyle}
  margin-bottom: 6.4rem;
`

const PostTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: bold;
  margin-bottom: 2.4rem;
  ${media.lessThan(breakPoints["xsmall"])`
    font-size:3.2rem;
  `}
`

const PostDiscription = styled.h2`
  font-size: 1.6rem;
  color: #000000;
  opacity: 0.5;
  padding-bottom: 0.8rem;
  &:last-of-type {
    padding-bottom: 0;
  }
`

const FooterContainer = styled.div`
  display: flex;
  padding-bottom: 2.4rem;
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
      slug
      longText {
        childMarkdownRemark {
          html
        }
      }
      createdAt(formatString: "YYYY.MM.DD")
      category
    }
    allContentfulPost {
      edges {
        node {
          title
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
