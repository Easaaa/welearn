import styled from "styled-components"

export const SearchBarWrap = styled.div`
  position: relative;

  input {
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 45px;
    border-radius: 10px;
    padding: 0 0 0 70px;
    outline: none;
    color: var(--main-white);
    background: var(--lightCleanBlack);
    border: none;
    text-align: start;
    font-size: var(--font-4);
    transition: border 50ms ease-in;

    &::placeholder {
      color: var(--main-white) !important;
      font-size: var(--font-4);
      opacity: 0.8;
    }

    &:-ms-input-placeholder {
      color: var(--main-white);
    }

    &::-ms-input-placeholder {
      color: var(--main-white);
    }
  }

  button {
    position: absolute;
    left: 0;
    border-radius: 10px 0 0 10px;
    height: 45px;
    display: inline-flex;
    align-items: center;
    background-color: var(--lightCleanBlack);
    border: none;
    width: 45px;
    place-content: center;
    transition: border 40ms ease-in;

    svg {
      font-size: var(--font-5);
      color: var(--main-white);
    }
  }

  &:hover,
  &:active {
    input {
      border: 1px solid var(--main-white);
    }

    button {
      border: 1px solid var(--main-white);
    }
  }
`
