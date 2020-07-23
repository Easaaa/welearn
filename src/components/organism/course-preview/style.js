import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const CoursePreviewContainer = styled.section`
  padding: var(--space-xl) var(--space-md);
  margin-top: var(--space-xxl);
  /* box-shadow: var(--shadow-xs); */
  background-color: var(--lightCleanBlack);
  border-radius: 10px;
  max-height: 1000px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0 1em;

  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--darkCleanBlack);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* box-shadow: var(--shadow-xs); */
    background: var(--cleanBlack);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  }

  @media ${device.tablet} {
    width: 100%;
    max-width: 700px;
    padding: var(--space-xl) var(--space-md);
    margin: var(--space-xl) auto;
  }

  @media ${device.laptop} {
    max-width: 600px;
    padding: var(--space-xl) var(--space-xl);
    margin: var(--space-xl) auto;
  }
`

export const CourseStats = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  place-content: space-between;
  margin-bottom: var(--space-xl);

  h1 {
    font-size: var(--font-5);
    font-weight: 500;

    span {
      font-size: 14px;
      font-weight: 400;
    }
  }
`
export const Lesson = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 2fr 4fr;
  align-items: center;
  padding: var(--space-xs) 0;
  margin: var(--space-md) 0;
  grid-gap: var(--space-md);
  cursor: pointer;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 12px;

  border: ${({ active }) =>
    active === true ? "6px solid var(--cleanBlack)" : "6px solid transparent"};

  /* box-shadow: ${({ active }) =>
    active === true ? "var(--shadow-xs)" : null}; */
  background: ${({ active }) =>
    active === true ? "var(--darkCleanBlack)" : null};

  &:hover {
    /* box-shadow: var(--shadow-xs); */
    background: var(--darkCleanBlack);
  }

  @media ${device.tablet} {
    grid-template-columns: 0.5fr 1fr 4fr;
  }
`

export const Nav = styled.div`
  position: relative;
  display: grid;
  place-content: center;

  svg {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    /* box-shadow: var(--shadow-xs); */
    background-color: var(--orange);
  }

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* box-shadow: var(--shadow-xs); */
    padding: var(--space-xs);
    background-color: ${({ active }) =>
      (active && "#42495c") || "var(--darkCleanBlack)"};
    border: 5px solid var(--cleanBlack);
    display: grid;
    place-content: center;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 10px;
    height: 100px;
    /* box-shadow: var(--shadow-xs); */
    left: 50%;
    margin-left: -5px;
    top: 55%;
    display: ${({ last }) => (last === true && "none") || null};
  }
`

export const Number = styled.div`
  font-size: var(--font-6);
  opacity: 0.1;
  font-weight: 700;
`

export const Infos = styled.div`
  h5 {
    margin: 0;
    font-weight: 400;
  }

  p {
    margin: 0;
  }
`
