import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const CardWrapper = styled.div`
  width: 95%;
  height: 600px;
  border-radius: 30px;

  position: relative;
  bottom: 0;
  display: grid;
  grid-template-rows: 100%;
  align-items: end;
  padding: 1em;
  margin: 0 auto;

  background-color: #1f2639;
  color: var(--main-white);
  cursor: pointer;
  transition: bottom 60ms ease-in;
  /* background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgb(0, 0, 0)); */

  .videoIcon {
    position: absolute;
    font-size: var(--font-9);
    color: var(--main-white);
    z-index: 10;
    width: 80px;
    height: 80px;
    top: 30%;
    left: 50%;
    margin: -40px 0 0 -40px;
    opacity: 0.8;

    @media ${device.laptop} {
      top: 50%;
    }
  }

  &:hover {
    img {
      opacity: 0.2;
    }
  }

  @media ${device.tabletM} {
    ${({ thirdSize }) =>
      thirdSize &&
      `
      height: 300px;
      width: 90%;

     .videoIcon {
       display: none;
      }

      ${Title} {
        h3 {
          font-size: var(--font-5);
        }
      }

      ${ButtonCta} {
        right: 1em;
        bottom: 1em;
      }
      
    `}
  }
`

export const ImgRow = styled.img`
  position: absolute;
  border-radius: 30px;
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;

  img {
    border-radius: 30px;
    margin: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 50ms ease-in-out;
  }
`

export const ContentRow = styled.div`
  display: grid;
  padding: var(--space-xxs) var(--space-xs);
  grid-template-rows: 4fr 1fr 1fr;
  grid-gap: var(--space-xs);
  position: relative;
  place-content: space-between;

  p {
    font-size: var(--font-1);
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: 0.3em;
    }
  }

  * {
    margin: 0;
  }

  @media ${device.laptop} {
    grid-template-rows: 4fr 1fr 1fr;
  }
`

export const Title = styled.div`
  max-width: 85%;

  h3 {
    font-size: var(--font-5);
    line-height: var(--line-height-lg);

    @media ${device.laptop} {
      font-size: var(--font-7);
    }

    span {
      color: var(--orange);
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 500;
    }
  }
`

export const Description = styled.p`
  max-width: 600px;
`

export const Duration = styled.div`
  p {
    margin: 0;
    font-size: 12px;
  }
`

export const Level = styled.div`
  display: inline-flex;
  align-items: center;

  svg {
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }
`

export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  place-content: center;
  margin: 0 auto 0 0;
  grid-gap: var(--space-md);
`

export const MadeBy = styled.p`
  color: var(--orange);
  font-size: 14px;
  font-weight: 500;
`

export const BookMark = styled.div`
  svg {
    width: 25px;
    height: 25px;
  }
`
export const ButtonCta = styled.button`
  position: absolute;
  width: 130px;
  height: 45px;
  background-color: var(--orange);
  border: none;
  border-radius: 10px;
  bottom: 4em;
  right: 4em;
  color: var(--main-white);
  text-transform: uppercase;
  display: none;
  cursor: pointer;

  @media ${device.laptop} {
    display: block;
  }
`
