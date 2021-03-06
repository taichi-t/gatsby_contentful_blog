import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import media from "styled-media-query"
import { breakPoints } from "./elements/elements"

//elemetns
import { Wrapper } from "./elements/elements"
import Aside from "./elements/Aside"
import Recomendations from "./elements/Recomendations"
import Header from "./elements/Header"
import NavBar from "./elements/NavBar"
import Footer from "./elements/Footer"
import Tags from "./elements/Tags"

export class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <header>
          <Header />
        </header>
        <Wrapper top={6} mediaQueryXs={true}>
          <Grid container spacing={4}>
            <Grid item md={8} xs={12}>
              <main>
                <nav>
                  <NavBar path={this.props.location.pathname} />
                </nav>
                {children}
              </main>
            </Grid>

            <Grid item md={4}>
              <aside>
                <AsideContainer>
                  <Aside />

                  <Recomendations articles={this.props.articles} />

                  <Tags />
                </AsideContainer>
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

const AsideContainer = styled.div`
  ${media.lessThan(breakPoints["huge"])`
  display: flex;
  justify-content:space-between;
  flex-wrap:wrap;
  `}
  ${media.lessThan(breakPoints["small"])`
  display: block;
  `}
`

export default Layout
