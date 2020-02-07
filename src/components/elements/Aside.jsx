/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Button } from "./elements"
import { InstaButton } from "./elements"
import { Link } from "gatsby"

const Aside = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      site {
        siteMetadata {
          author
          description
          social {
            twitter
          }
        }
      }
    }
  `)

  return (
    <AsideContainer>
      <AvatarContainer>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt="data.site.siteMetadata.author"
          style={{
            borderRadius: 50,
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#1C2D5E",
          }}
          imgStyle={{}}
        />
        <p>{data.site.siteMetadata.author}</p>
      </AvatarContainer>
      <MeDiscription>{data.site.siteMetadata.description}</MeDiscription>
      <ButtonContainer>
        <Link>
          <Button bgc="#00ACEE">ツイッター</Button>
        </Link>
        <Link>
          <InstaButton>
            <p
              style={{
                position: "relative",
              }}
            >
              インスタグラム
            </p>
          </InstaButton>
        </Link>
        <Link>
          <Button bgc="#171515">Git Hub</Button>
        </Link>
      </ButtonContainer>
    </AsideContainer>
  )
}
const AsideContainer = styled.div`
  padding: 16px;
  border: solid 2px #1c2d5e;
  background-color: #fffdf7;
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
`

const AvatarContainer = styled.div`
  padding: 16px 16px 24px 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const MeDiscription = styled.p`
  padding-bottom: 16px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`

export default Aside
