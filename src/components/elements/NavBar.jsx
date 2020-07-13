import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Button } from "./elements"
import media from "styled-media-query"
import { breakPoints } from "./elements"

//elemetns

export class NavBar extends Component {
  render() {
    const { path } = this.props
    return (
      <NavContainer>
        <Link to="/">
          <Button
            activeBgc="#000000"
            activeColor="#ffffff"
            transform="false"
            border="false"
            isActive={path === "/"}
            fontSize={2}
            marginRight={2}
            mediaQueryXs={true}
          >
            新着
          </Button>
        </Link>
        <Link to="/tech">
          <Button
            activeBgc="#000000"
            activeColor="#ffffff"
            transform="false"
            border="false"
            isActive={path === "/tech"}
            fontSize={2}
            marginRight={2}
            mediaQueryXs={true}
          >
            テック
          </Button>
        </Link>

        <Link to="/vancouver">
          <Button
            activeBgc="#000000"
            activeColor="#ffffff"
            transform="false"
            border="false"
            isActive={path === "/vancouver"}
            fontSize={2}
            marginRight={2}
            mediaQueryXs={true}
          >
            バンクーバー
          </Button>
        </Link>
        <Link to="/others">
          <Button
            activeBgc="#000000"
            activeColor="#ffffff"
            transform="false"
            border="false"
            isActive={path === "/others"}
            fontSize={2}
            mediaQueryXs={true}
          >
            その他
          </Button>
        </Link>
      </NavContainer>
    )
  }
}
const NavContainer = styled.ul`
  display: flex;
  font-weight: 700;
  padding-bottom: 3.2rem;
  width: 100%;
  color: #000;
  white-space: nowrap;
  ${media.lessThan(breakPoints["xsmall"])`
  justify-content:space-between;
  padding:2.4rem 0;
  `}
`

export default NavBar
