import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"
import { breakPoints } from "./elements"

//elemetns
import { Wrapper } from "./elements"
import Logo from "../../../content/assets/logo.svg"

export const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Link to={`/`}>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Link>
      </Wrapper>
    </HeaderContainer>
  )
}

const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 15rem;
  ${media.lessThan(breakPoints["xsmall"])`
  width:10rem
  `}
`

const HeaderContainer = styled.div`
  position: relative;
  height: 10rem;
  background-color: #fffdf7;
  -webkit-box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
  ${media.lessThan(breakPoints["xsmall"])`
  height:7rem
  `}
`

export default Header
