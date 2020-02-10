import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Button } from "./elements"

//elemetns

export class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActiveNewArticles: false,
      isActiveVanArticles: false,
      isActiveMusicArticles: false,
      isActiveTchArticles: false,
    }
  }
  componentDidMount() {
    const { path } = this.props
    if (path === "/") this.setState({ isActiveNewArticles: true })
    if (path === "/category/vancouver")
      this.setState({ isActiveVanArticles: true })
    if (path === "/category/music")
      this.setState({ isActiveMusicArticles: true })
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
            style={{ marginRight: 20, fontSize: 20 }}
            transform="false"
            border="false"
            isActive={this.state.isActiveNewArticles}
          >
            新着
          </Button>
        </Link>
        <Link to="/category/tech">
          <Button
            activeBgc="#000000"
            activeColor="#ffffff"
            style={{ marginRight: 20, fontSize: 20 }}
            transform="false"
            border="false"
            isActive={this.state.isActiveTechArticles}
          >
            テック系
          </Button>
        </Link>
        <Link to="/category/music">
          <Button
            activeBgc="#000000"
            activeColor="#ffffff"
            style={{ marginRight: 20, fontSize: 20 }}
            transform="false"
            border="false"
            isActive={this.state.isActiveMusicArticles}
          >
            音楽
          </Button>
        </Link>
        <Link to="/category/vancouver">
          <Button
            activeBgc="#000000"
            activeColor="#ffffff"
            style={{ fontSize: 20 }}
            transform="false"
            border="false"
            isActive={this.state.isActiveVanArticles}
          >
            バンクーバー
          </Button>
        </Link>
      </NavContainer>
    )
  }
}
const NavContainer = styled.ul`
  display: flex;
  padding-bottom: 52px;
  width: 100%;
  color: #000;
`

export default NavBar
