/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const Recomendations = articles => {
  const posts = articles.articles

  return (
    <RecomendationsContainer>
      <Title>
        <h2>オススメ</h2>
      </Title>
      {posts &&
        posts.map(({ node }, index) => {
          const title = node.title || node.slug
          return (
            <RecomendationsList key={index}>
              <Link to={node.slug} key={index}>
                {title}
              </Link>
            </RecomendationsList>
          )
        })}
    </RecomendationsContainer>
  )
}
const RecomendationsContainer = styled.ul`
  margin-top: 60px;
  border: solid 2px #1c2d5e;
  background-color: #fffdf7;
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
`
const RecomendationsList = styled.li`
  padding: 24px 16px;
  border-bottom: 1px solid #bbc0cf;
`

const Title = styled.div`
  border-bottom: 1px solid #bbc0cf;
  padding: 24px 0;
  text-align: center;
  color: #000000;
  background-color: #fef6d9;
  font-size: 25px;
`
export default Recomendations
