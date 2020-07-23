import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


:root {
    /* ====== COLORS ====== */
  --cleanBlack: #000413;
  --darkCleanBlack: #000207;
  --lightCleanBlack: #050c1e;

  --main-red: #FC4445;
  --main-blue: #25274D;
  --orange: #F25F4C;
  --main-white: #fff;
  --dirty-white: #EAEAEA;
  --txt-color: #484848;
  --txt-color-light: #757575;
  --border-gray: #e1e1e1;
  --main-link-bg: #d1d4e3;


  /* ====== FONT SIZE ====== */
  --font-10: 7rem;
  --font-9: 5.96rem;
  --font-8: 4.768rem;
  --font-7: 3.815rem;
  --font-6: 3.052rem;
  --font-5: 2.441rem;
  --font-4: 1.953rem;
  --font-3: 1.563rem; 
  --font-2: 1.25rem:
  --font-1: 1rem;
  --font-0: 0.8rem;

  /* ======= SPACE UNIT ======= */
  --space-unit: 1em;
  --space-xxs: calc(0.25 * var(--space-unit));
  --space-xs: calc(0.5 * var(--space-unit));
  --space-sm: calc(0.75 * var(--space-unit));
  --space-md: calc(1.25 * var(--space-unit));
  --space-lg: calc(2 * var(--space-unit));
  --space-xl: calc(3.25 * var(--space-unit));
  --space-xxl: calc(5.25 * var(--space-unit));

 /* ======= SHADOW ======= */
 
  --shadow-lightBlack-inset: inset 3px 3px 10px #2d303b, -3px -3px 10px #464a5d;
  --shadow-lightBlack: 3px 3px 10px #2d303b, -3px -3px 10px #464a5d;

  --shadow-xs-inset: inset 3px 3px 10px #0b0b0d,-3px -3px 10px #1d1e24;
  --shadow-xs:  3px 3px 10px #0b0b0d,-3px -3px 10px #1d1e24;

  --shadow-md:  10px 10px 30px #232531, -10px -10px 30px #3c3d50;
  --shadow-xl:  13px 13px 40px #232531, -13px -13px 40px #3c3d50;
 

   /* ======= LINE HEIGHT ======= */
   --line-height-sm: 1.125;
   --line-height-md: 1.25;
   --line-height-lg: 1.5;
   --line-height-xl: 1.75;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul,li {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--main-white);
  width: 100%;
  cursor: pointer;
}

 html {
   font-size: 62.5%;
 }

  body {
    font-family: 'Montserrat', sans-serif;
    color: var(--main-white);
    background-color: var(--cleanBlack);
    font-size: var(--font-3);
    max-width: 1920px;
    min-height: 100%;
    margin: 0 auto;
  }


 h1 {
  line-height: var(--line-height-sm);
  font-size: var(--font-7);
 }  

 h2 {
  line-height: var(--line-height-sm);
  font-size: var(--font-6);
 }

 h3 {
    line-height: var(--line-height-sm);
    font-size: var(--font-6);
  }

  h4{
    line-height: var(--line-height-md);
    font-size: var(--font-4);
  }
  
  h5 {
    line-height: var(--line-height-md);
    font-size: var(--font-4);
  }

  p {
    line-height: var(--line-height-xl);
  }
`

export const LayoutWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;

  ${({ school }) => (school && `body {background-color: #2E2F3E}`) || null}
`
export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  text-align: center;
`
