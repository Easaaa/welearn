import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const ComponentContainer = styled.section`
  padding: var(--space-md);
  margin: 0 auto;
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-md);
  max-width: 1480px;

  @media ${device.tablet} {
    padding: var(--space-xl);
  }
`
export const Header = styled.header`
  button {
    background-color: transparent;
    color: var(--secondary800);
    border: none;
    padding: var(--space-md) 0;
    cursor: pointer;
    outline: none;

    box-shadow: var(--shadow-xs);

    height: 35px;
    width: 100px;
    border-radius: 10px;
    margin: 20px 0;

    display: inline-flex;
    align-items: center;
    justify-content: center;
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
    max-width: 800px;
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
    box-shadow: var(--shadow-xs);
    background-color: var(--primary800);
    font-weight: 500;
  }
  .role {
    width: 140px;
    display: table;
    font-weight: 500;
    border-radius: 5px;
    text-align: center;
    padding: 0 var(--space-md);
    box-shadow: var(--shadow-xs);
    background-color: var(--primary800);
  }
`
