import styled from "styled-components"
import { device } from "styles/mediaQuery"
import Popup from "reactjs-popup"
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
            content: "by WeLearn";
            position: absolute;
            color: var(--main-red);
            font-size: var(--font-3);
            font-weight: 600;
            left: 0;
            bottom: -1.2em;
        }
      }`}
`
export const NavLinksWrap = styled.ul`
  display: none;
  grid-auto-flow: column;
  place-content: end;
  grid-gap: var(--space-md);
  list-style-type: none;
  font-weight: 600;
  align-items: center;

  @media ${device.tablet} {
    grid-gap: 20px;
  }

  @media ${device.laptop} {
    display: grid;
    position: relative;
  }
`

export const NavLinksWrapMobile = styled(NavLinksWrap)`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  place-content: center;
  position: absolute;
  height: 250px;
  width: 300px;
  left: 50%;
  top: 50%;
  margin: -125px 0 0 -150px;
  background: var(--primary800);
  border-radius: 10px;
`

export const StyledLink = styled(Link)`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  text-transform: capitalize;
  padding: ${({ logo }) => (logo && "0") || "5px"};
  border-radius: 5px;

  transition: background 50ms ease-in-out;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover,
  &:active {
    background: ${({ logo }) => (logo && "transparent") || "#eaeaea"};

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
  cursor: pointer;
`

export const ProfileImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  padding: 5px;
  border-radius: 5px;

  transition: background 50ms ease-in-out;

  &:hover,
  &:active {
    background: #eaeaea;
  }

  svg {
    font-size: 24px;
  }
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
  width: 100px;
  height: 40px;
  border: 2px solid var(--secondary800);
  border-radius: 5px;

  &:hover,
  &:active {
    background-color: var(--secondary800);
    ${StyledLink} {
      background-color: var(--secondary800);
    }
  }

  ${StyledLink} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &:hover,
    &:active {
      color: var(--main-white);
    }
  }
`
export const MobileButton = styled.button`
  background: none;
  border: none;
  outline: none;

  width: 50px;
  height: 50px;

  border: 2px solid var(--secondary800);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 30px;
    color: var(--secondary800);
  }

  @media ${device.laptop} {
    display: none;
  }
`
export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    background-color: #373b5363;
  }
  // use your custom style for ".popup-content"
  &-content {
  }
`
export const AddNewBtn = styled.li`
  position: relative;
  border-radius: 5px;
  padding: 5px;

  /*  span {
    display: none;
    position: absolute;
    top: 60px;
    width: 160px;
    height: 45px;
    margin-left: -80x;
    left: 50%;
    background: var(--secondary800);
    color: var(--main-white);
    border-radius: 5px;
    z-index: 999;
    align-items: center;
    justify-content: center;
  } */

  ${StyledLink} {
    &:hover,
    &:active {
      background: var(--secondary800);
    }

    svg {
      font-size: 24px;
      color: var(--secondary800);
    }
  }

  &:hover,
  &:active {
    background: var(--secondary800);

    span {
      display: flex;
    }

    ${StyledLink} {
      color: var(--main-white);

      svg {
        color: var(--main-white);
        transform: rotate(360deg);
      }
    }
  }
`
