/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div style={{}}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{}}
        imgStyle={{}}
      />
      <p>
        現在バンクーバーにすみながら、ウェブを学び中。
        <a href={`https://twitter.com/${social.twitter}`}>
          ツイッターはこちらから
        </a>
      </p>
    </div>
  )
}

export default Bio
