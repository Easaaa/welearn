import styled from 'styled-components';
import { device } from 'styles/mediaQuery';

export const SearchBarWrap = styled.div`
  position: relative;

  input {
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 45px;
    border-radius: 10px;
    padding-left: 50px;
    outline: none;
    color: var(--secondary800);
    background: var(--primary800);
    box-shadow: var(--shadow-xs);
    border: none;
    text-align: start;
    font-size: var(--font-4);
    transition: border 50ms ease-in;

    &::placeholder {
      color: var(--secondary800) !important;
      font-size: var(--font-2);
      opacity: 0.8;
    }

    &:-ms-input-placeholder {
      color: var(--secondary800);
    }

    &::-ms-input-placeholder {
      color: var(--secondary800);
    }

    &:hover,
    &:active {
      box-shadow: var(--shadow-md);
    }
  }

  button {
    position: absolute;
    left: 0;
    border-radius: 10px 0 0 10px;
    height: 45px;
    display: inline-flex;
    align-items: center;
    background: var(--primary800);
    border: none;
    width: 45px;
    place-content: center;
    transition: box-shadow 80ms ease-in;

    svg {
      font-size: var(--font-5);
      color: var(--secondary800);
    }
  }

  @media ${device.laptop} {
    margin-left: 20px;

    input {
      height: 50px;
    }
  }
`;
