import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//elements
import { GridLayout } from "../components/elements/GridLayout"

export const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: { order: DESC, fields: createdAt }) {
        edges {
          node {
            title
            category
            createdAt(formatString: "YYYY.MM.DD")
            image {
              fluid(maxWidth: 220, maxHeight: 220, quality: 50) {
                ...GatsbyContentfulFluid
              }
            }
            slug

            contentful_id
          }
        }
      }
    }
  `)
  return <GridLayout data={data} title="New Posts" />
}

export default Index
