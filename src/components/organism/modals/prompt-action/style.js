import styled from "styled-components";

export const PromptContainer = styled.section`
  z-index: 999;
  padding: 1em;
  position: fixed;
  width: 400px;
  height: 300px;
  top: 30%;
  left: 50%;
  margin: -150px 0 0 -200px;
  border-radius: 5px;
  box-shadow: var(--shadow-xl);
  background-color: whitesmoke;

  display: grid;
  place-content: center;
  text-align: center;
  grid-gap: 1em;

  h3 {
    font-size: var(--font-5);
    color: red;
    font-weight: 500;
  }
`;
export const BtnWrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  place-items: center;
  grid-auto-flow: column;
`;
export const Warn = styled.p`
  color: red;
  font-size: var(--font-1);
  margin: 0;
`;
