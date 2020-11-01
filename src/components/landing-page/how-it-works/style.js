import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const Container = styled.section`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-auto-flow: row;
  padding: 0 var(--space-md) var(--space-xxl) var(--space-md);

/*   @media ${device.tablet} {
    padding-top: 25em;
  } */

  @media ${device.laptop} {
    padding-top: 5em;
    max-width: 1200px;
  }
`

export const SectionTitle = styled.div`
  text-align: center;
  padding: var(--space-md) 0;
  h4 {
    font-family: "Righteous";
    color: var(--main-red);
    text-transform: uppercase;
    font-weight: normal;
  }

  @media ${device.tablet} {
    margin-top: var(--space-xxl);
    h1 {
      font-size: var(--font-10);
    }
  }
`

export const StepsWrapper = styled.div`
  padding: var(--space-md) 0;
  display: grid;
  grid-gap: var(--space-lg);

  @media ${device.laptop} {
    place-content: start;
    padding: var(--space-xxl) 0;
    grid-gap: var(--space-xxl);
  }
`
export const Step = styled.div`
  display: grid;
  grid-auto-flow: row;
  place-content: start;
  grid-gap: var(--space-md);

  &:hover {
    svg {
      box-shadow: var(--shadow-md);
    }
  }

  @media ${device.laptop} {
    grid-template-areas:
      "img txt txt txt"
      "img txt txt txt";
  }
`
export const ColImg = styled.div`
  position: relative;
  svg {
    box-shadow: var(--shadow-xs);
    background-color: var(--primary800);
    border-radius: 5px;
    padding: var(--space-md);
    width: 80px;
    height: 80px;
    transition: box-shadow 100ms ease-in-out;
  }

  @media ${device.laptop} {
    grid-area: img;

    &:after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 10px;
      height: 170px;
      box-shadow: var(--shadow-xs);
      left: 50%;
      margin-left: -5px;
      top: 55%;
      display: ${({ last }) => (last && "none") || null};
    }
  }
`
export const ColTxt = styled.div`
  padding: 0 var(--space-xs);

  p {
    max-width: 600px;
  }

  p:last-of-type {
    color: var(--secondary800);
  }

  @media ${device.laptop} {
    grid-area: txt;
  }
`

export const SubTitle = styled.p`
  color: var(--main-red);
  font-family: "Righteous";
  text-transform: uppercase;
  margin: 0;
`

export const StyledImage = styled.div`
  img {
    display: none;
    position: absolute;
    bottom: 10%;
    right: -200px;
    opacity: 0.1;
    z-index: -1;
    max-width: 600px;

    @media ${device.laptop} {
      max-width: 800px;
      bottom: 5%;
      right: -150px;
    }
  }
`
