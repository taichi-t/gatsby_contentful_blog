import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

//elements
import { Post } from "./elements"
import { PostImage } from "./elements"
import { PostText } from "./elements"
import { PostTitle } from "./elements"
import { PostDiscription } from "./elements"

import SEO from "../seo"

export const GridLayout = ({ data, title }) => {
  const posts = data.allContentfulPost.edges
  const elements =
    posts &&
    posts.map(({ node }) => {
      const title = node.title || node.slug

      return (
        <Item key={node.slug}>
          <Link to={`/${node.slug}`}>
            <Post>
              <PostImage>
                <Img
                  fluid={node.image.fluid}
                  width="100%"
                  height="100%"
                  fadeIn={false}
                  backgroundColor="#dadada"
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
        </Item>
      )
    })

  return (
    <>
      <SEO title={title} />
      <ul>{posts.length === 0 ? `記事がまだありませんm(_ _　)m` : elements}</ul>
    </>
  )
}

export default GridLayout

const Item = styled.li`
  list-style: none;
  margin-bottom: 3.2rem;
`
