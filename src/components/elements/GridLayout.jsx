import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

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
        <Post key={node.slug}>
          <Link to={`/${node.slug}`}>
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
          </Link>
        </Post>
      )
    })

  return (
    <>
      <SEO title={title} />
      {posts.length === 0 ? `記事がまだありませんm(_ _　)m` : elements}
    </>
  )
}

export default GridLayout
