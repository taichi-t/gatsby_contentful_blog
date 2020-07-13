import React from "react"
import { Link } from "gatsby"

//elements
import { Post } from "../components/elements/elements"
import { PostText } from "../components/elements/elements"
import { PostTitle } from "../components/elements/elements"
import { PostDiscription } from "../components/elements/elements"

import SEO from "../components/seo"

export const TagsTemplate = ({ pageContext }) => {
  const { posts, slug } = pageContext

  return (
    <>
      <SEO title={slug} />
      {posts ? (
        posts.map(post => {
          const title = post.title

          return (
            <Link
              to={`/${post.slug}`}
              key={post.slug}
              data-id={post.contentful_id}
            >
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
          )
        })
      ) : (
        <p>nothing</p>
      )}
    </>
  )
}

export default TagsTemplate
