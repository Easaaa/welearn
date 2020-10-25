import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const Container = styled.section`
  display: grid;
  grid-auto-flow: row;
  place-content: center;
  max-width: 600px;
  position: relative;
  padding: 10em var(--space-xs);

  img {
    position: absolute;
    width: 400px;
    margin: 0 auto 0 -200px;
    left: 50%;
    opacity: 1;
    z-index: -1;
    top: 8em;
  }

  @media ${device.tablet} {
    max-width: 1200px;
  }

  @media ${device.laptop} {
    grid-auto-flow: row;
    place-content: center;
    padding: 15em var(--space-xs) 10em var(--space-xs);
    margin: 0 auto;

    img {
      position: relative;
      width: 400px;
      top: 100px;
      left: 0;
      margin: 0 auto;
    }
  }
`

export const FormWrapper = styled.section`
  width: 100%;
  max-width: 600px;
  padding: var(--space-xl);
  border-radius: 10px;
  display: grid;
  grid-gap: var(--space-lg);
  place-content: center;
  background-color: var(--primary800);
`

export const StyledForm = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-lg);
  place-items: center;

  label {
    display: grid;
    grid-auto-flow: row;
    grid-gap: var(--space-xxs);
    text-transform: uppercase;
  }

  input {
    width: 300px;
    height: 55px;
    background-color: var(--darkCleanBlack);
    border: 4px solid var(--primary800);
    box-shadow: var(--shadow-xs);
    border-radius: 10px;

    padding: 0 var(--space-md);
    outline: none;
    color: #eaeaea;
    transition: background-color 50ms ease-in;

    &:placeholder-shown {
      color: #eaeaea;
    }

    &:hover {
      background-color: transparent;
      border: 1px solid var(--secondary800);
    }
  }

  button {
    width: 150px;
    margin: 0 auto;
    height: 50px;
    background-color: var(--secondary800);
    border-radius: 10px;
    color: var(--primary800);
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    transition: background-color 50ms ease-in;

    &:hover {
      background-color: #ff1719;
    }
  }
`

export const FormTitle = styled.div`
  text-align: center;

  h3,
  p {
    line-height: var(--line-height-lg);
  }

  p {
    color: #eaeaea;
  }
`
