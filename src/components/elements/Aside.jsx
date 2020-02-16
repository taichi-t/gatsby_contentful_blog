import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Button } from "./elements"
import { InstaButton } from "./elements"

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
            instagram
            github
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
        <a
          href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            bgc="#00ACEE"
            color="#ffffff"
            shadow="true"
            border="true"
            activeBgc="#00ACEE"
            activeColor="#ffffff"
            transform="true"
          >
            ツイッター
          </Button>
        </a>
        <a
          href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstaButton>
            <p
              style={{
                position: "relative",
              }}
            >
              インスタグラム
            </p>
          </InstaButton>
        </a>
        <a
          href={`https://github.com/${data.site.siteMetadata.social.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            bgc="#171515"
            color="#ffffff"
            shadow="true"
            border="true"
            activeBgc="#171515"
            activeColor="#ffffff"
            transform="true"
          >
            Git Hub
          </Button>
        </a>
      </ButtonContainer>
    </AsideContainer>
  )
}
const AsideContainer = styled.div`
  font-size: 1.6rem;
  padding: 1.6rem;
  border: solid 2px #1c2d5e;
  background-color: #fffdf7;
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.5);
`

const AvatarContainer = styled.div`
  padding: 1.6rem 1.6rem 2.4rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const MeDiscription = styled.p`
  padding-bottom: 1.6rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 0;
`

export default Aside
