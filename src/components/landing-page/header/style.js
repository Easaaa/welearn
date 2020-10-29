import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const HeaderWrapper = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  max-width: 600px;
  height: 90vh;
  margin: 0 auto;
  padding: 0 var(--space-xs) var(--space-xl) 0;

  @media ${device.tablet} {
    height: 70vh;
  }

  @media (min-height: 1900px) {
    height: 850px;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    max-width: 1200px;
    padding: 0;
  }
`
export const StyledHeader = styled.header`
  display: grid;
  grid-gap: var(--space-lg);

  h1 {
    text-align: center;
    line-height: var(--line-height-md);

    @media ${device.tablet} {
      font-size: var(--font-8);
      line-height: var(--line-height-xl);
      padding: var(--space-md) 0 0 0;
    }

    span {
      font-family: "Righteous";
      text-transform: uppercase;
      color: var(--main-red);
    }
  }

  p {
    color: var(--secondary800);
    text-align: center;
    padding: 0 var(--space-md);
    line-height: var(--line-height-lg);

    @media ${device.tablet} {
      font-size: var(--font-4);
    }
  }
`
export const BtnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
  place-items: center;
  grid-gap: var(--space-lg);
  margin: 2em auto;

  button {
    width: 120px;
    height: 60px;
    background-color: var(--primary800);
    border: none;
    box-shadow: var(--shadow-xs);
    color: var(--secondary800);
    border-radius: 5px;
    padding: 0;
    cursor: pointer;
    -webkit-transition: box-shadow 50ms ease-in;
    transition: box-shadow 50ms ease-in;

    span {
      font-family: "Righteous";
      color: var(--main-red);
    }

    &:hover {
      box-shadow: var(--shadow-md);
    }

    @media ${device.tablet} {
      width: 200px;
      font-size: var(--font-4);
    }
  }

  button:last-of-type {
    background-color: transparent;
    box-shadow: none;
    text-transform: underline;
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    place-content: center;
    /*  font-size: var(--font-5); */

    &:hover {
      text-decoration: underline;
    }

    svg {
      font-size: var(--font-6);
    }
  }
`
export const ImgWrapper = styled.div`
  img {
    display: none;
    width: 375px;
    position: absolute;
    left: 50%;
    margin-left: -187.5px;
    opacity: 0.4;
    z-index: -3;
    bottom: 0;

    @media ${device.tablet} {
      display: initial;
      width: 400px;
      margin-left: -200px;
      z-index: -3;
      bottom: 0;
    }

    @media ${device.laptop} {
      position: initial;
      opacity: 1;
      width: 500px;
      margin: 0;
    }
  }
`
