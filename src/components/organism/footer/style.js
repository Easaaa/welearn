import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const StyledFooter = styled.footer`
  background: var(--secondary800);
  color: var(--primary800);
  padding-bottom: var(--space-xl);

  @media ${device.laptop} {
    padding: var(--space-xl) 0;
  }
`

export const FooterWrapper = styled.section`
  padding: var(--space-lg);
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-lg);
  max-width: 1400px;
  place-content: center;

  @media ${device.laptop} {
    grid-template-columns: 1fr 2fr;
    place-items: center;
  }
`

export const Logo = styled.div`
  position: relative;
  font-style: italic;

  h1 {
    font-size: var(--font-5);
    font-weight: 600;

    &:after {
      font-family: "Righteous";
      content: "beta";
      position: absolute;
      color: var(--main-red);
      font-size: var(--font-3);
      letter-spacing: 0.1em;
      font-weight: 400;
      left: 0;
      bottom: -0.5em;
      text-transform: uppercase;
    }
  }

  p {
    text-align: center;
    padding-top: var(--space-lg);
    position: absolute;
    bottom: -6em;
    font-size: 10px;
    font-weight: 400;
    width: 300px;
    left: 50%;
    margin-left: -150px;
  }

  @media ${device.tablet} {
    margin-bottom: var(--space-xl);
  }
`

export const LinkWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-lg);
  max-width: 1200px;

  @media ${device.tablet} {
    grid-auto-flow: column;
    grid-gap: 10em;
    margin: 0 auto;
  }
`

export const LinkList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-xs);
`

export const Title = styled.li`
  text-transform: uppercase;
  color: var(--main-red);
  font-weight: 600;
`
