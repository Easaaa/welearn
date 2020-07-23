import Typography from "typography"
const typography = new Typography({
  baseFontSize: "62.5%",
  headerFontFamily: [
    "Montserrat",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Montserrat", "serif"],
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["200", "400", "600", "700", "900"],
    },
    {
      name: "Righteous",
      styles: ["200", "400", "600", "700", "900"],
    },
  ],
})
export default typography
