import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import media from "styled-media-query"
import Hidden from "@material-ui/core/Hidden"
import { breakPoints } from "./elements"

//elemetns

export const RelatedArticles = ({ relatedPosts }) => {
  const elements =
    relatedPosts &&
    relatedPosts.map(post => {
      const { contentful_id, createdAt, image, slug, title } = post
      return (
        <Box key={contentful_id}>
          <Grid container spacing={3}>
            <Hidden xsDown>
              <Grid item sm={3}>
                <Image fluid={image.fluid} width="100%" height="100%" />
              </Grid>
            </Hidden>
            <Grid item sm={9} xs={12}>
              <Link to={`/${slug}`} key={contentful_id}>
                <Description>
                  <Title>{title}</Title>
                  <Date>{createdAt}</Date>
                </Description>
              </Link>
            </Grid>
          </Grid>
        </Box>
      )
    })
  return (
    <>
      <Container>{elements}</Container>
    </>
  )
}

export default RelatedArticles

const Container = styled.div`
  position: relative;
  color: #333;
  width: 100%;
  height: 100%;
  padding: 3.2rem;
  margin-top: calc(2.4rem + 3rem);
  background-color: #fffdf7;
  border: 4px solid #bbc0cf;
  &&::after {
    content: "関連記事";
    font-weight: bold;
    font-size: 1.6rem;
    color: #fff;
    text-align: center;
    line-height: 3rem;
    background-color: #bbc0cf;
    position: absolute;
    width: 10rem;
    height: 3rem;
    top: calc(-3rem - 3px);
    left: -4px;
  }
  ${media.lessThan(breakPoints["small"])`
    padding: 1.6rem;
  `}
`

const Box = styled.div`
  ${media.lessThan(breakPoints["small"])`
  /* margin-bottom:2.4rem; */
  `}
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`
const Date = styled.span`
  color: #000000;
  opacity: 0.5;
  font-size: 1.6rem;
  font-weight: bold;
`
