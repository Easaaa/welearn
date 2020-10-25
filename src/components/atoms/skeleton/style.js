import styled from "styled-components"

export const CardContainer = styled.section`
  grid-column: span 8;
  width: 95%;
  height: 400px;
  position: relative;
  font-size: var(--font-4);
  border-radius: 10px;
  background-color: var(--primary800);

  h1 {
    position: absolute;
  }
`
export const SkeletonContainerNavProfile = styled.section`
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 2fr;
  place-content: center;
  place-items: center;
  grid-gap: 1em;

  div:last-of-type {
    display: grid;
  }
`
