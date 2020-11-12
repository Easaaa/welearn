import styled from 'styled-components';
import { device } from 'styles/mediaQuery';

export const DropDownMenu = styled.div`
  position: absolute;
  top: 75px;
  right: 0;
  box-shadow: var(--shadow-md);
  width: 200px;
  display: grid;
  place-content: center;
  border-radius: 10px;
  padding: var(--space-md);
  z-index: 888;
  background-color: var(--primary800);

  ${({ isMobile }) =>
    isMobile &&
    `
   position: relative;
   top: 0;
   box-shadow: none;
   padding: 0 5px;
   width: 100%;
  `}

  h5 {
    position: relative;
    font-weight: 600;
    text-transform: uppercase;
    font-size: var(--font-3);

    /* &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      margin-left: -75px;
      width: 150px;
      height: 1px;
      background: var(--secondary800);
    } */
  }

  ul {
    list-style-type: none;

    li {
      font-weight: 400;
      margin: var(--space-xs) 0;

      p {
        line-height: var(--line-height-xl);
        font-size: 12px;
        color: #999999;
        margin: 0;
      }

      a {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        justify-content: start;
        grid-gap: 5px;
      }
    }
  }
`;
