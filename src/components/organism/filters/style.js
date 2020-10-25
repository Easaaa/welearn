import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const FiltersContainer = styled.section`
  width: 100%;
  position: relative;
`

export const GeneralFilters = styled.form`
  display: grid;
  grid-auto-columns: row;
  grid-gap: var(--space-md);
  position: absolute;
  top: 100px;
  background-color: var(--primary800);
  padding: var(--space-md);
  border: 1px solid var(--secondary800);
  border-radius: 10px;
  z-index: 99;

  button {
    background: transparent;
    border: none;
    color: var(--mainWhite);
    border: 1px solid var(--secondary800);
    box-shadow: var(--shadow-xs);
    cursor: pointer;
    width: 220px;
    height: 45px;
    border-radius: 10px;
    margin-top: var(--space-md);
    text-transform: capitalize;
    transition: box-shadow 50ms ease-in;
    font-weight: 600;
  }
`

export const Filter = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-xs);

  label {
    text-transform: capitalize;
    font-weight: 500;
    font-size: var(--font-4);
  }

  select {
    width: 220px;
    border: 2px solid var(--primary800);
    background-color: var(--primary800);
    color: var(--secondary800);
    height: 50px;
    background-image: none;
    font-size: var(--font-2);
    border-radius: 10px;
    padding: 0 1em;
    cursor: pointer;
    outline: none;
    transition: background-color 50ms ease-in;
    letter-spacing: 0.1em;

    &::-ms-expand {
      display: none;
    }

    &:hover {
      box-shadow: var(--shadow-xs);
    }
  }
`
