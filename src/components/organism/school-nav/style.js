import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from 'styles/mediaQuery';

export const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
  place-items: center;

  background: var(--primary800);
  border-top: 1px solid var(--dirty-white);

  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  z-index: 555;

  border-radius: 10px;

  @media ${device.tablet} {
    margin: 0 auto;
    grid-gap: var(--space-xl);
    box-shadow: var(--shadow-xs);
    border-top: none;
    padding: var(--space-md);
    position: relative;
    z-index: 1;

    grid-auto-flow: column;
    grid-template-columns: inherit;
    place-content: center;
    width: 100%;
    z-index: 555;
  }
`;

export const StyledLink = styled(Link)`
  place-self: center;

  @media ${device.tablet} {
    height: 45px;
    width: 180px;
  }

  @media ${device.laptop} {
    height: 60px;
    width: 200px;
  }
`;

export const NavItem = styled.div`
  display: ${({ actionBtn }) => actionBtn && 'none'};
  position: relative;
  height: 100px;
  width: 100%;

  cursor: pointer;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 50ms ease-in-out;
  background-color: ${({ active }) =>
    active === true ? 'var(--secondary800)' : 'var(--primary800)'};
  color: ${({ active }) =>
    active === true ? 'var(--primary800)' : 'var(--secondary800)'};

  p {
    position: absolute;
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    place-content: center;
    justify-items: center;

    text-transform: lowercase;

    margin: 0;
    font-size: var(--font-2);
    font-weight: 600;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media ${device.tablet} {
    display: inline-block;
    height: 45px;
    width: 180px;
    box-shadow: var(--shadow-xs);
    border-radius: 10px;

    &:hover {
      transform: scale(1.05);
      box-shadow: var(--shadow-md);
    }

    p {
      position: relative;
      grid-auto-flow: column;
      grid-gap: var(--space-xs);
      text-transform: capitalize;
      margin-bottom: 0;
      height: 100%;
    }
  }

  @media ${device.laptop} {
    height: 50px;
    width: ${({ active, actionBtn }) =>
      (active === true && !actionBtn && '220px') ||
      (actionBtn && '280px') ||
      (actionBtn && active && '300px') ||
      '200px'};

    p {
      font-size: var(--font-4);

      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
`;
