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
  headerFontFamily: ["Noto Sans JP", "sans-serif"],
  bodyFontFamily: ["Noto Sans JP", "Source Code Pro", "sans-serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
