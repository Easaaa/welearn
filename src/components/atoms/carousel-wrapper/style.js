import styled from "styled-components"

export const DirButton = styled.button`
  background-color: var(--primary800);
  border: none;
  cursor: pointer;
  outline: none;

  svg {
    color: var(--secondary800);
    width: 50px;
    height: 50px;
    padding: var(--space-xs);
    border-radius: 50%;
    transition: box-shadow 50ms ease-in-out;

    &:hover {
      box-shadow: var(--shadow-lightBlack);
    }
  }
`
export const CarouselPaginationWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: var(--space-xs);
  position: relative;
  bottom: -1.5em;
`
export const Circle = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--primary800);
  border-radius: 50%;
  box-shadow: ${({ isActivePage }) =>
    isActivePage === true
      ? "var(--shadow-lightBlack)"
      : "var(--shadow-lightBlack-inset)"};
  transform: ${({ isActivePage }) =>
    isActivePage === true ? "scale(1.5)" : null};
  transition: transform 50ms ease-in;
`
