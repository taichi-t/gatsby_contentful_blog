import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Button } from "./elements"
import media from "styled-media-query"
import { breakPoints } from "./elements"

//elemetns

export class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActiveNewArticles: false,
      isActiveVanArticles: false,
      isActiveOthersArticles: false,
      isActiveTchArticles: false,
    }
  }
  componentDidMount() {
    const { path } = this.props
    if (path === "/") this.setState({ isActiveNewArticles: true })
    if (path === "/category/vancouver")
      this.setState({ isActiveVanArticles: true })
    if (path === "/category/others")
      this.setState({ isActiveOthersArticles: true })
    if (path === "/category/tech") this.setState({ isActiveTechArticles: true })
    if (path === "/category/new") this.setState({ isActiveNewArticles: true })
  }

  render() {
    return (
      <NavContainer>
        <Link to="/">
          <Button
            activeBgc="#000000"
            activeColor="#ffffff"
            transform="false"
            border="false"
            isActive={this.state.isActiveNewArticles}
            fontSize={2}
            marginRight={2}
            mediaQueryXs={true}
          >
            新着
          </Button>
        </Link>
        <Link to="/category/tech">
          <Button
            activeBgc="#000000"
            activeColor="#ffffff"
            transform="false"
            border="false"
            isActive={this.state.isActiveTechArticles}
            fontSize={2}
            marginRight={2}
            mediaQueryXs={true}
          >
            テック系
          </Button>
        </Link>

        <Link to="/category/vancouver">
          <Button
            activeBgc="#000000"
            activeColor="#ffffff"
            transform="false"
            border="false"
            isActive={this.state.isActiveVanArticles}
            fontSize={2}
            marginRight={2}
            mediaQueryXs={true}
          >
            バンクーバー
          </Button>
        </Link>
        <Link to="/category/others">
          <Button
            activeBgc="#000000"
            activeColor="#ffffff"
            transform="false"
            border="false"
            isActive={this.state.isActiveOthersArticles}
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
  ${media.lessThan(breakPoints["xsmall"])`
  justify-content:space-between;
  `}
`

export default NavBar
