import React, { Component } from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import { Button } from "./elements"

//elemetns

export class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleClickProfile = this.handleClickProfile.bind(this)
  }
  handleClickProfile = e => {}
  render() {
    return (
      <NavContainer>
        <Button
          activeBgc="#000000"
          activeColor="#ffffff"
          style={{ marginRight: 20, fontSize: 20 }}
          transform="false"
          border="false"
        >
          新着
        </Button>
        <Button
          activeBgc="#000000"
          activeColor="#ffffff"
          style={{ marginRight: 20, fontSize: 20 }}
          transform="false"
          border="false"
        >
          テック系
        </Button>
        <Button
          activeBgc="#000000"
          activeColor="#ffffff"
          style={{ marginRight: 20, fontSize: 20 }}
          transform="false"
          border="false"
        >
          音楽
        </Button>
        <Button
          activeBgc="#000000"
          activeColor="#ffffff"
          style={{ fontSize: 20 }}
          transform="false"
          border="false"
        >
          バンクーバー
        </Button>
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
