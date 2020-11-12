import styled from 'styled-components';
import { device } from 'styles/mediaQuery';
import Popup from 'reactjs-popup';
import { Link } from 'gatsby';

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
`;

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
`;

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
`;

export const NavLinksWrapMobile = styled(NavLinksWrap)`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  place-content: start;

  position: absolute;
  z-index: 555;
  height: 35vh;
  min-height: 245px;
  width: 100vw;
  left: 50%;
  top: 99px;
  margin: 0 0 0 -50vw;
  padding: var(--space-md);

  background: var(--primary800);
  border-top: 1px solid var(--border-gray);
  border-bottom: 1px solid var(--border-gray);
`;

export const StyledLink = styled(Link)`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  text-transform: capitalize;
  padding: ${({ logo }) => (logo && '0') || '5px'};
  border-radius: 5px;

  transition: background 50ms ease-in-out;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover,
  &:active {
    background: ${({ logo }) => (logo && 'transparent') || '#eaeaea'};

    svg {
      transform: translateX(15px);
    }
  }
`;

export const StyledLinkGoTo = styled(StyledLink)`
  background: var(--secondary800);
  color: var(--primary800);
  padding: 5px 10px;

  &:hover,
  &:active {
    background: var(--secondary900);
  }
`;

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
`;
export const ProfilePreview = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  place-content: center;
  grid-gap: var(--space-md);
  cursor: pointer;
`;

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
`;
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
`;
export const LiStyledLogin = styled.li`
  width: 100%;
  height: 30px;
  border-radius: 5px;

  background-color: var(--red);
  color: var(--primary800);

  ${StyledLink} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    /*   &:hover,
  &:active {
    color: var(--white);
  } */
  }
`;
export const MobileButton = styled.button`
  background: none;
  border: none;
  outline: none;

  width: 50px;
  height: 50px;

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  place-self: end;

  svg {
    font-size: 45px;
    color: var(--secondary800);
  }

  @media ${device.laptop} {
    display: none;
  }
`;
export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    background-color: #373b5363;
  }
  // use your custom style for ".popup-content"
  &-content {
  }
`;
export const CtaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--space-xs);
  place-content: center;
  place-self: end;
  width: 100%;

  .secondary {
    border: none;
    background-color: transparent;
    color: var(--primary800);

    &:hover,
    &:active {
      background: #eaeaea;
    }
  }

  .primary_desktop {
    background-color: var(--secondary800);
    color: var(--primary800);

    ${StyledLink} {
      color: var(--primary800);
    }

    &:hover,
    &:active {
      background-color: var(--secondary900);
    }

    /* {StyledLink} {
      &:hover,
      &:active {
        background-color: var(--red);
      }
    } */
  }
`;
export const SimpleLi = styled(LiStyledLogin)`
  background-color: transparent;
  color: var(--secondary800);

  padding: 0 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active {
    background: #eaeaea;
  }
`;
