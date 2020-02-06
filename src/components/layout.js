import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { Header } from "./elements"
import { Wrapper } from "./elements"
import { LogoContainer } from "./elements"
import Logo from "../../content/assets/logo.svg"

export class Layout extends React.Component {
  render() {
    const { children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    let header

    header = (
      <Header>
        <Wrapper>
          <Link to={`/`}>
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </Link>
        </Wrapper>
      </Header>
    )

    return (
      <>
        <GlobalStyle />
        <div style={{}}>
          <header>{header}</header>
          <main>{children}</main>
          <footer></footer>
        </div>
      </>
    )
  }
}

const GlobalStyle = createGlobalStyle`
html{
  background-color: #fef9e4;
}

body {
    color:#000000;
  }
  a{
    color:inherit;
    text-decoration:none
  }
  h3{
    margin: 0;
  }
  h1{
    margin: 0;
  }
  p{
    margin: 0;
  }


`

export default Layout
