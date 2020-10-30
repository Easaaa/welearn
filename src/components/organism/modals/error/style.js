import styled from "styled-components"

export const ErrorContainer = styled.section`
  font-family: "Montserrat";
  position: fixed;
  height: 40px;
  bottom: 1em;
  right: 1em;
  padding: 1.5em;
  background-color: #f56565;
  color: #ffffff;
  display: grid;
  border-radius: 10px;
  grid-auto-flow: column;
  place-content: center;
  place-items: center;
  grid-gap: 0.5em;
  border: 1px solid #f56565;
  z-index: 999;
  box-shadow: var(--shadow-md);

  svg {
    color: var(--main-white);
    border-radius: 50%;
    font-size: var(--font-5);
  }
`

export const Title = styled.h5`
  color: var(--main-white) !important;
  font-weight: 400;
`

export const Message = styled.p``
