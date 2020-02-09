import React from "react"

import Grid from "@material-ui/core/Grid"

//elemetns
import { Wrapper } from "./elements/elements"
import Aside from "./elements/Aside"
import Recomendations from "./elements/Recomendations"
import { GlobalStyle } from "./elements/elements"
import Header from "./elements/Header"
import NavBar from "./elements/NavBar"

export class Layout extends React.Component {
  render() {
    const { children } = this.props

    // const rootPath = `${__PATH_PREFIX__}/`

    return (
      <>
        <GlobalStyle />
        <header>
          <Header />
        </header>
        <Wrapper top={60}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <main>
                <nav>
                  <NavBar />
                </nav>
                {children}
              </main>
            </Grid>
            <Grid item xs={4}>
              <aside>
                <Aside />
                <Recomendations articles={this.props.articles} />
              </aside>
            </Grid>
          </Grid>

          <footer></footer>
        </Wrapper>
      </>
    )
  }
}

export default Layout
