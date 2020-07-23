import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const ComponentContainer = styled.section`
  padding: var(--space-md);
  margin: 0 auto;
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-md);
  width: 100%;

  @media ${device.tablet} {
    padding: var(--space-xl);
  }
`
export const Header = styled.header`
  button {
    background-color: transparent;
    color: var(--main-white);
    border: none;
    padding: var(--space-md) 0;
    color: var(--dirty-white);
    cursor: pointer;
    outline: none;

    display: inline-flex;
    align-items: center;
  }

  h1 {
    margin: 0;
    font-weight: 500;
    color: var(--orange);
  }

  p {
    margin: 0;
    font-size: var(--font-1);
  }
`
export const VideoContainer = styled.div`
  img {
    width: 100%;
  }
`

export const WelcomeCourse = styled.div`
  max-width: 650px;

  @keyframes swingVertical {
    15% {
      transform: translateY(6px);
    }
    30% {
      transform: translateY(-6px);
    }
    50% {
      transform: translateY(4px);
    }
    65% {
      transform: translateY(-2px);
    }
    80% {
      transform: translateY(2px);
    }
    100% {
      transform: translateY(0);
    }
  }

  * {
    line-height: var(--line-height-lg);
  }

  h3 {
    font-weight: 400;

    span {
      font-weight: bold;
      letter-spacing: 2px;
    }
  }

  h5 {
    font-weight: 400;
    color: var(--dirty-white);
  }

  button {
    width: 150px;
    height: 45px;
    background-color: var(--orange);
    border: none;
    border-radius: 10px;
    color: var(--main-white);
    text-transform: uppercase;
    margin: var(--space-md) 0;
    cursor: pointer;

    &:hover {
      animation: swingVertical 1s ease;
      animation-iteration-count: 1;
    }
  }

  @media ${device.tablet} {
    margin: var(--space-md) 0;
    height: 400px;
    display: grid;
    place-content: center;

    h3 {
      margin-bottom: var(--space-md);
    }
  }
`

export const VideoInfos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: start;
  margin: 0 auto 0 0;
  grid-gap: var(--space-md);

  .type {
    text-transform: capitalize;
    border-radius: 5px;
    text-align: center;
    padding: 0 var(--space-md);
    background-color: var(--lightCleanBlack);
    text-transform: uppercase;
    font-weight: 500;
  }
  .role {
    width: 140px;
    display: table;
    font-weight: 500;
    border-radius: 5px;
    text-align: center;
    padding: 0 var(--space-md);
    background-color: var(--lightCleanBlack);
    text-transform: uppercase;
  }
`
