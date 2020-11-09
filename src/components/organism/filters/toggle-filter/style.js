import styled from 'styled-components';
import { device } from 'styles/mediaQuery';

export const ToggleContainer = styled.button`
  background-color: var(--primary800);
  border: none;
  font-size: var(--font-4);
  width: 150px;
  height: 45px;
  border-radius: 10px;
  color: var(--secondary800);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;

  box-shadow: var(--shadow-xs);

  transition: box-shadow 50ms ease-in;

  ${({ active }) =>
    active &&
    ` 
    box-shadow: var(--shadow-md);
  `}

  svg {
    margin-right: var(--space-xs);
  }
  &:hover,
  &:active {
    box-shadow: var(--shadow-md);
  }

  @media ${device.laptop} {
    display: none;
  }
`;
