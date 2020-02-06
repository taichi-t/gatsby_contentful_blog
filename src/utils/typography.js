import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["700"],
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"],
    },
    {
      name: "Kosugi",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: [
    "Kosugi",
    "Montserrat",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Kosugi", "serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
