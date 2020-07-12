import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 360, // for sp
      sm: 768, // for tb
      md: 1080, // for ps
      lg: 1440,
      xl: 1800,
    },
  },
})

export default theme
