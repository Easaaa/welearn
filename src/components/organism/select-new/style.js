import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const HomeContainer = styled.section`
  display: grid;
  grid-auto-flow: row;
  padding: var(--space-md);
  align-items: center;
  max-width: 600px;
  margin: 0 auto;

  @media ${device.laptop} {
    grid-auto-flow: column;
    max-width: 1200px;
    place-content: space-evenly;
    margin: var(--space-xxl) auto;
  }
`

export const Header = styled.header`
  text-align: start;

  h1 {
    font-weight: 400;
    margin: 0;

    span {
      color: var(--orange);
      font-weight: 600;
    }
  }

  h2 {
    font-weight: 400;
  }

  p {
    font-size: var(--font-4);
    color: var(--white);
  }

  div {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    grid-gap: 20px;
    margin-top: 30px;
  }
`

export const Img = styled.img`
  @media ${device.tablet} {
    width: 600px;
  }
`

export const MissingField = styled.div`
  padding: var(--space-xs);

  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-xs);

  svg {
    font-size: var(--font-4);
  }

  h5 {
    font-weight: 400;
    font-size: var(--font-4);
    line-height: 2em;

    span {
      font-size: var(--font-8);
      opacity: 0.2;
    }
  }

  button {
    width: 180px;
    height: 35px;
    border-radius: 5px;
  }
`
