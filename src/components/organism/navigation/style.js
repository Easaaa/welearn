import styled from "styled-components"
import { device } from "styles/mediaQuery"
import { Link } from "gatsby"

export const NavWrapper = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 0.2fr;
  place-content: center;
  align-items: start;
  padding: var(--space-md);
  background: var(--primary800);

  @media ${device.tablet} {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    padding: var(--space-md);
  }
`
export const Logo = styled.div`
  position: relative;

  h1 {
    font-size: var(--font-6);
    font-weight: 600;
    position: relative;
  }

  ${({ schoolName }) =>
    schoolName
      ? ` 
  h1 {
    &:after {
      letter-spacing: 0;
      content: "Decentralized";
      position: absolute;
      color: var(--main-red);
      font-size: var(--font-3);
      font-weight: 600;
      left: 0;
      bottom: -1em;
      font-style: italic;
    }}`
      : `
      h1 {
        font-style: italic;
        &:after {
            letter-spacing: 0;
            content: "beta";
            position: absolute;
            color: var(--main-red);
            font-size: var(--font-3);
            font-weight: 600;
            left: 0;
            bottom: -1.2em;
            text-transform: uppercase;
        }
      }`}
`
export const NavLinksWrap = styled.ul`
  /* font-family: "Righteous"; */
  display: grid;
  grid-auto-flow: column;
  place-content: end;
  grid-gap: var(--space-md);
  list-style-type: none;
  font-weight: 600;
  align-items: center;

  @media ${device.tablet} {
    grid-gap: var(--space-xl);
  }
`
export const StyledLink = styled(Link)`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  transition: bottom 50ms ease-in-out;
  text-transform: capitalize;
  padding: ${({ logo }) => (logo && "0") || "var(--space-xxs);"};
  bottom: 0;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    bottom: ${({ logo }) => (logo && "0") || "0.5rem"};

    svg {
      transform: translateX(15px);
    }
  }
`

export const ProfileMenu = styled.li`
  position: relative;
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  place-content: center;
  grid-gap: var(--space-md);
  padding: var(--space-xxs);
  border-radius: 10px;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`

export const ProfilePreview = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  place-content: center;
  grid-gap: var(--space-md);
  padding: var(--space-xxs);
  cursor: pointer;
`

export const ProfileImg = styled.div`
  max-width: 40px;
`
export const ProfileName = styled.div`
  display: grid;
  grid-auto-flow: row;
  place-content: center;

  h5 {
    margin: 0;
    font-weight: 500;
    font-size: var(--font-3);

    display: grid;
    grid-auto-flow: column;
    align-items: center;
  }

  p {
    font-weight: 200;
  }
`
export const LiStyledLogin = styled.li`
  width: 120px;
  height: 45px;
  border: 2px solid var(--secondary800);
  border-radius: 5px;

  &:hover {
    background-color: var(--secondary800);
  }

  ${StyledLink} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &:hover {
      bottom: 0;
      color: var(--main-white);
    }
  }
`
