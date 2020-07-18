import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import media from "styled-media-query"
import { breakPoints } from "./elements"

const Recomendations = () => {
  const { allContentfulPost } = useStaticQuery(graphql`
    query ContentfulBlogPostByCategory {
      allContentfulPost(
        limit: 5
        sort: { order: DESC, fields: createdAt }
        filter: { popular: { eq: true } }
      ) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  return (
    <RecomendationsContainer>
      <Title>人気の記事</Title>
      {allContentfulPost &&
        allContentfulPost.edges.map(({ node }, index) => {
          const title = node.title || node.slug
          return (
            <Link to={`/${node.slug}`} key={index} data-id={node.contentful_id}>
              <RecomendationsList key={index}>{title}</RecomendationsList>
            </Link>
          )
        })}
    </RecomendationsContainer>
  )
}
const RecomendationsContainer = styled.ul`
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
const RecomendationsList = styled.li`
  padding: 2.4rem 1.6rem;
  border-bottom: 1px solid #bbc0cf;
`

const Title = styled.h2`
  font-size: 2.5rem;
  border-bottom: 1px solid #bbc0cf;
  padding: 2.4rem 0;
  text-align: center;
  color: #000000;
  background-color: #fef6d9;
`
export default Recomendations
