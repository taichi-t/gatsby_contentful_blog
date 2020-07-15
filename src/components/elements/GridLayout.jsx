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

  return (
    <>
      <SEO title={title} />
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
        )
      })}
    </>
  )
}

export default GridLayout
