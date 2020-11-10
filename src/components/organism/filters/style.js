import styled from 'styled-components';
import { device } from 'styles/mediaQuery';
import ArrowDownIcon from '../../../assets/arrow-down.png';

export const FiltersContainer = styled.section`
  width: 100%;
`;

export const GeneralFilters = styled.form`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  grid-gap: var(--space-md);
  place-content: center;

  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;

  background-color: var(--primary800);
  padding: var(--space-md);

  ${({ isToggle }) =>
    !isToggle &&
    `
    display: none;
  `}

  @media ${device.laptop} {
    display: grid;
    position: relative;
    grid-auto-flow: column;
    place-content: start;
    border: none;
    height: 100%;
  }
`;

export const ResetBtn = styled.button`
  background: transparent;
  border: none;
  color: var(--mainWhite);
  cursor: pointer;
  width: 140px;
  height: 50px;
  border-radius: 10px;
  margin-top: 35px;
  text-transform: capitalize;
  transition: box-shadow 50ms ease-in;
  font-weight: 600;
  font-size: var(--font-4);

  &:hover,
  &:active {
    box-shadow: var(--shadow-xs);
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 30px;
  border-radius: 5px;

  text-transform: capitalize;
  cursor: pointer;

  background: var(--secondary800);
  color: var(--primary800);
  border: none;
`;

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
    -webkit-border: 2px solid var(--primary800);
    background-color: var(--primary800);
    -webkit-background-color: var(--primary800);
    color: var(--secondary800);
    -webkit-color: var(--secondary800);
    height: 50px;
    background-image: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    box-shadow: var(--shadow-xs);
    -webkit-box-shadow: var(--shadow-xs);
    font-size: var(--font-2);
    border-radius: 10px;
    padding: 0 1em;
    cursor: pointer;
    outline: none;
    transition: box-shadow 50ms ease-in;
    letter-spacing: 0.1em;

    background-image: url(${ArrowDownIcon});
    background-repeat: no-repeat, repeat;
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right 0.7em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: 0.85em auto, 100%;

    &::-ms-expand {
      display: none;
      -webkit-display: none;
    }

    &:hover,
    &:active {
      box-shadow: var(--shadow-md);
      -webkit-box-shadow: var(--shadow-md);
    }
  }
`;
