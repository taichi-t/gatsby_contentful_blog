import Typography from "typography"

const typography = new Typography({
  baseFontSize: "1.6rem",
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: "Source Code Pro",
      styles: ["400"],
    },
    {
      name: "Noto Sans JP",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: [
    "Noto Sans JP",
    "Montserrat",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Noto Sans JP", "Source Code Pro", "serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
