import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"

// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   }
// }

// delete Wordpress2016.googleFonts

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

  // See below for the full list of options.
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
