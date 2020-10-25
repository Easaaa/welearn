import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "styles/mediaQuery"

export const NavWrapper = styled.nav`
  display: grid;
  grid-auto-flow: row;
  place-content: center;
  padding: var(--space-md);
  background: var(--primary800);
  box-shadow: var(--shadow-xs);

  @media ${device.tablet} {
    margin: 0 auto;
    grid-auto-flow: column;
    grid-gap: var(--space-xl);
  }
`

export const StyledLink = styled(Link)`
  place-self: center;
`

export const NavItem = styled.div`
  margin: var(--space-xs);
  position: relative;
  height: 45px;
  width: 180px;
  cursor: pointer;
  display: inline-block;
  border-radius: 10px;
  transition: transform 50ms ease-in-out;
  background-color: ${({ active }) =>
    active === true ? "var(--secondary800)" : "var(--primary800)"};
  color: ${({ active }) =>
    active === true ? "var(--primary800)" : "var(--secondary800)"};

  box-shadow: var(--shadow-xs);

  &:hover {
    transform: scale(1.05);
  }

  p {
    position: absolute;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    place-content: center;
    grid-gap: var(--space-xs);
    top: 50%;
    left: 50%;
    margin: -7.5px 0 0 -75px;
    height: 15px;
    width: 150px;
    font-size: var(--font-3);
    font-weight: 600;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media ${device.laptop} {
    height: ${({ active }) => (active === true ? "60px" : "50px")};
    width: ${({ active }) => (active === true ? "220px" : "200px")};

    p {
      font-size: var(--font-4);

      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
`
