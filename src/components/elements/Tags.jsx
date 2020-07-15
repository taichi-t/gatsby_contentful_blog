import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"
import { breakPoints } from "./elements"

const Tags = () => {
  const { allContentfulTag } = useStaticQuery(graphql`
    {
      allContentfulTag {
        edges {
          node {
            contentful_id
            name
            slug
            post {
              slug
            }
          }
        }
      }
    }
  `)

  const tags = allContentfulTag.edges

  return (
    <TagsList>
      <Title>#タグ</Title>
      <TagsContainer>
        {tags &&
          tags.map(({ node }) => {
            const title = node.title || node.slug
            return (
              <Tag key={node.contentful_id}>
                <Link to={`/tags/${node.slug}`}>
                  #{title}
                  {node.post ? ` (${node.post.length})` : ""}
                </Link>
              </Tag>
            )
          })}
      </TagsContainer>
    </TagsList>
  )
}

const Title = styled.h2`
  font-size: 2.5rem;
  border-bottom: 1px solid #bbc0cf;
  padding: 2.4rem 0;
  text-align: center;
  color: #000000;
  background-color: #fef6d9;
`

const TagsList = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 6rem;
  height: 100%;
  border: solid 2px #1c2d5e;
  background-color: #fffdf7;
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  ${media.lessThan(breakPoints["huge"])`
  width:48%;
  margin-top:0;
  -webkit-box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 0.5);
  `}
  ${media.lessThan(breakPoints["small"])`
  width:100%;
  margin-top: 2.4rem;
  `}
`

const TagsContainer = styled.ul`
  color: #000;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  padding: 1.6rem;
`

const Tag = styled.li`
  color: #1c2d5e;
  text-decoration: underline;
`

export default Tags
