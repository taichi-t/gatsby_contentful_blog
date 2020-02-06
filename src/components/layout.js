import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"

export class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <h1>
            <Link to={`/`}>{title}</Link>
          </h1>
        </>
      )
    } else {
      header = (
        <>
          <h3 style={{}}>
            <Link style={{}} to={`/`}>
              {title}
            </Link>
          </h3>
        </>
      )
    }
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
  body {
    color:#000000;
    background-color: #fef9e4;
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
