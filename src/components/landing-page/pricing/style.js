import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const Container = styled.section`
  position: relative;
  margin: 0 auto;
  display: grid;
  max-width: 800px;
  padding: var(--space-md);

  @media ${device.laptop} {
    max-width: 1200px;
  }
`

export const PriceHeader = styled.div`
  padding: var(--space-md) 0;
  max-width: 750px;
  position: relative;

  h1 {
    font-size: var(--font-8);
    padding: var(--space-md) var(--space-xxs);
  }

  img {
    position: absolute;
    z-index: -1;
    bottom: 30px;
    width: 200px;
    right: 0;
    opacity: 0.3;

    @media ${device.tablet} {
      bottom: -100px;
      width: 300px;
      opacity: 1;
    }
    @media ${device.laptop} {
      right: -400px;
      width: 400px;
      bottom: --150px;
    }
  }
`

export const ToggleSub = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-content: start;
  align-items: center;
  grid-gap: var(--space-md);
  padding: 0 var(--space-md);

  h5 {
    font-size: var(--font-3);
    font-weight: normal;
    position: relative;
    margin: 0;
    transition: font-weight 100ms ease-in;

    &:last-of-type:after {
      content: "Save 20%";
      position: absolute;
      width: 80px;
      height: 20px;
      background-color: var(--dirty-white);
      color: var(--main-blue);
      bottom: 2em;
      right: 0;
      font-weight: normal;
      text-align: center;
      font-size: var(--font-1);
    }
  }

  .selected {
    font-weight: 700;
  }
`

export const PriceTable = styled.div`
  box-shadow: var(--shadow-xs);
  width: 100%;
  padding: var(--space-xs);
  border-radius: 5px;
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-md);
  background-color: var(--cleanBlack);
  max-width: 500px;
  margin: var(--space-xl) auto;

  @media ${device.tablet} {
    grid-auto-flow: column;
    max-width: 800px;
    height: 400px;
    place-content: center;
    grid-gap: var(--space-xxl);
  }

  @media ${device.laptop} {
    max-width: 1000px;
  }
`

export const PriceCard = styled.div`
  box-shadow: var(--shadow-xs);
  padding: var(--space-xs);
  display: grid;
  grid-auto-flow: row;
  place-content: center;
  height: 250px;
  width: 80%;
  max-width: 300px;
  border-radius: 5px;
  margin: var(--space-xs) auto;

  @media ${device.tablet} {
    width: 280px;
  }
`

export const SubName = styled.div`
  h3,
  p {
    margin: 0;
  }
`

export const Price = styled.div`
  padding: var(--space-md) 0;
  p,
  h5 {
    margin: 0;
  }

  h5 {
    font-size: var(--font-5);
  }
`

export const SelectBtn = styled.button`
  background-color: ${({ highlight }) =>
    (highlight && "var(--main-red)") || "var(--lightCleanBlack)"};
  border: none;
  color: var(--main-white);
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 80ms ease-in;

  &:hover {
    transform: scale(1.05);
  }
`

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #4e5265;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 200ms;
  }

  input:checked + .slider {
    background-color: var(--main-red);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--main-red);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`
