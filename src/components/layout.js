import React from "react"

import Grid from "@material-ui/core/Grid"

//elemetns
import { Wrapper } from "./elements/elements"
import Aside from "./elements/Aside"
import Recomendations from "./elements/Recomendations"
import { GlobalStyle } from "./elements/elements"
import Header from "./elements/Header"
import NavBar from "./elements/NavBar"
import Footer from "./elements/Footer"

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
            <Grid item sm={8} xs={12}>
              <main>
                <nav>
                  <NavBar path={this.props.location.pathname} />
                </nav>
                {children}
              </main>
            </Grid>
            <Grid item sm={4} xs={12}>
              <aside>
                <Aside />
                <Recomendations articles={this.props.articles} />
              </aside>
            </Grid>
          </Grid>

          <footer>
            <Footer />
          </footer>
        </Wrapper>
      </>
    )
  }
}

export default Layout
