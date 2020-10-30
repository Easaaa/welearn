import styled from "styled-components"

export const SuccessContainer = styled.div`
  position: fixed;
  height: 50px;
  bottom: 1em;
  right: 1em;
  padding: 1.5em;
  background-color: var(--main-blue);
  color: var(--light-green);
  display: grid;
  grid-auto-flow: column;
  border-radius: 10px;
  place-content: center;
  place-items: center;
  grid-gap: 0.5em;
  box-shadow: var(--shadow-md);
  z-index: 999;

  svg {
    color: #373b53;
    background: #2cbda0;
    border-radius: 50%;
    font-size: var(--font-4);
  }
`

export const Title = styled.h5`
  color: var(--main-white) !important;
  font-size: var(--font-3);
  font-weight: 400;
  margin-bottom: 0 !important;
`

export const Message = styled.p``
