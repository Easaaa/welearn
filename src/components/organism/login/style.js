import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const LoginContainer = styled.section`
  background-color: var(--primary800);
  box-shadow: var(--shadow-xs);
  display: grid;
  grid-template-rows: 3fr 0.01fr 1.5fr;
  grid-gap: var(--space-xl);
  place-content: center;
  padding: var(--space-md);
  margin: var(--space-md);
  border-radius: 20px;
  max-width: 600px;

  @media ${device.tablet} {
    margin: var(--space-xl) auto;
  }

  @media ${device.laptop} {
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 0.5fr 3fr;

    margin: var(--space-xxl) auto;
    max-width: 900px;
    width: 900px;
    height: 450px;
    place-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -225px 0 0 -450px;
  }
`

export const Btn = styled.button`
  background-color: var(--orange);
  border: none;
  width: 200px;
  height: 40px;
  color: var(--primary800);
  text-transform: capitalize;
  border-radius: 10px;
  cursor: pointer;

  &:first-of-type {
    margin-top: var(--space-md);
  }

  &:last-of-type {
    background-color: var(--secondary800);
  }
`

export const WelcomeCol = styled.div`
  text-align: center;
  display: grid;
  place-content: center;
  place-items: center;

  h2 {
    font-weight: 500;
  }
`

export const LoginCol = styled.div`
  display: grid;
  place-content: center;

  h2 {
    color: var(--orange);
    font-weight: 400;
    text-align: center;
    max-width: 300px;
  }
`

export const StyledForm = styled.form`
  text-align: start;
  display: grid;
  place-content: center;
  place-items: center;
  grid-gap: 30px;

  label {
    display: grid;
    grid-gap: var(--space-xxs);

    input {
      width: 250px;
      height: 40px;
      border-radius: 10px;
      border: none;
      padding: 0 var(--space-xs);
      outline: none;
      background-color: var(--primary800);
      box-shadow: var(--shadow-xs);

      transition: box-shadow 80ms ease-in-out;

      &:hover,
      &:active {
        box-shadow: var(--shadow-md);
      }
    }
  }
`

export const Line = styled.div`
  width: 100%;
  background-color: var(--secondary800);
  height: 1px;
  place-self: center;

  @media ${device.laptop} {
    transform: rotate(-90deg);
    width: 500%;
  }
`
