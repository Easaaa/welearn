import styled from "styled-components"

export const Btn = styled.button`
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--secondary800)"};
  color: ${({ color }) => (color ? color : "var(--primary800)")};
  width: ${({ width }) => (width ? width : "200px")};
  height: ${({ height }) => (height ? height : "40px")};
  border: none;
  display: grid;
  place-content: center;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: var(--space-xs);
  font-weight: 400;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 50ms ease-in;
  outline: none;
  text-transform: capitalize;

  &:focus,
  &:active,
  &:hover {
    transform: scale(0.98);
  }
`
export const SpinnerContainer = styled.div`
  z-index: 888;
  display: inline-block;
  border: 3px solid var(--primary800);
  border-left-color: var(--orange);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: donut-spin 1.2s linear infinite;

  @keyframes donut-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
