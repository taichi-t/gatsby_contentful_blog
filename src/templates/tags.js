import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import media from "styled-media-query"
import styled from "styled-components"

//elements
import { breakPoints } from "../components/elements/elements"

import SEO from "../components/seo"

const TagsTemplate = ({ data }) => {
  const { slug, post } = data.contentfulTag

  return (
    <>
      <SEO
        title={`#${slug}`}
        description={`　#${slug}　に関連する記事が${post.length +
          1}つ見つかりました。`}
      />
      <ul>
        {post ? (
          post.map(post => {
            const title = post.title

            return (
              <Item key={post.slug}>
                <Link to={`/${post.slug}`}>
                  <Post>
                    <PostText>
                      <header>
                        <PostTitle>{title}</PostTitle>
                      </header>
                      <section>
                        <PostDiscription>
                          <p>{post.createdAt}</p>
                          <p>#{post.category}</p>
                        </PostDiscription>
                      </section>
                    </PostText>
                  </Post>
                </Link>
              </Item>
            )
          })
        ) : (
          <li>
            <p>記事がまだありませんm(_ _　)m</p>
          </li>
        )}
      </ul>
    </>
  )
}

export default TagsTemplate

export const posts = graphql`
  query contentfulTagBySlug($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      slug
      name
      post {
        category
        contentful_id
        createdAt(formatString: "YYYY.MM.DD")
        slug
        title
      }
    }
  }
`
const Post = styled.div`
  display: flex;
  padding: 2rem;

  border: 2px solid #1c2d5e;
  background-color: #fffdf7;
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  ${media.lessThan(breakPoints["huge"])`
  -webkit-box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 0.5);
  `}

  ${media.lessThan(breakPoints["xsmall"])`
  display:block;
  padding:2rem;
  `}
`

const Item = styled.li`
  margin-bottom: 3.2rem;
`

const PostText = styled.div`
  ${media.lessThan(breakPoints["xsmall"])`
  margin:0;
  width:100%;
  `}
`

const PostTitle = styled.h3`
  font-size: 2.5rem;
  padding-bottom: 1rem;
  ${media.lessThan(breakPoints["large"])`
  font-size:2.8rem;
  `}
  ${media.lessThan(breakPoints["medium"])`
  font-size:2.2rem;
  `}
`

const PostDiscription = styled.div`
  font-size: 1.6rem;
  bottom: 3.2rem;
  ${media.lessThan(breakPoints["medium"])`
  bottom:2rem;
  font-size: 1.2rem;
  `}
  ${media.lessThan(breakPoints["xsmall"])`
  width:100%;
  position:initial
  `}
`
