import React from "react"
import { GlobalStyle } from "./src/components/elements/elements"
import theme from "./src/components/elements/theme"
import { ThemeProvider } from "@material-ui/core/styles"
import { Layout } from "./src/components/layout"

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout {...props}>{element}</Layout>
  </ThemeProvider>
)

export default wrapPageElement
