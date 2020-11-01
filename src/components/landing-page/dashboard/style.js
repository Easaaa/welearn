import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const Container = styled.section`
  position: relative;
  margin: 0 auto;
  display: grid;
  max-width: 800px;
  padding: var(--space-xxl) var(--space-md);
  grid-template-rows: ${({ noVideo }) =>
    (noVideo && "1fr 0.1fr .8fr 2fr") || "1fr 0.1fr 3fr 1.3fr"};

  @media ${device.tablet} {
    grid-template-rows: ${({ noVideo }) =>
      (noVideo && "1.5fr 0.1fr 2fr") || "1fr 0.1fr 1.8fr 1.3fr"};
  }

  @media ${device.laptop} {
    padding-top: 5em;
    max-width: 1200px;
    grid-template-rows: ${({ noVideo }) =>
      (noVideo && "1.5fr 0.3fr 2fr") || "1.5fr 0.3fr 1.2fr 3.5fr"};
  }
`
export const SectionTitle = styled.div`
  text-align: ${({ alignR }) => (alignR && "end") || "start"};
  padding: var(--space-md) 0;
  max-width: 750px;
  position: relative;
  margin: ${({ alignR }) => (alignR && "0 auto") || null};

  h4 {
    font-family: "Righteous";
    color: var(--main-red);
    text-transform: uppercase;
    font-weight: normal;
  }

  @media ${device.tablet} {
    ${({ alignR }) =>
      (alignR && `padding-right: var(--space-xxl)`) ||
      ` padding-left: var(--space-xxl)`};

    h1 {
      font-size: var(--font-10);
    }
  }

  @media ${device.laptop} {
    h4 {
      font-size: var(--font-2);
      position: absolute;
      top: -10px;
    }

    .alignR {
      right: 200px;
    }
  }
`

export const Description = styled.div`
  max-width: 950px;
  margin: 0 auto;
  text-align: ${({ alignR }) => (alignR && "end") || "start"};

  @media ${device.tablet} {
    padding: var(--space-md) 0;
    font-size: var(--font-4);
  }
`

export const Border = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  height: 1px;
  background-color: var(--primary800);
  opacity: 0.4;
`

export const FunctionalityWrapper = styled.section`
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-md);
  padding: var(--space-md) 0 var(--space-xxl) 0;

  @media ${device.laptop} {
    grid-auto-flow: column;
  }
`

export const Card = styled.div`
  padding: var(--space-md);
  border-radius: 15px;
  max-height: 200px;
  max-width: 500px;
  margin: 0 auto;

  &:first-of-type {
    box-shadow: var(--shadow-xs);
  }

  p {
    color: var(--secondary800);
  }

  &:hover {
    box-shadow: var(--shadow-md);
  }
`

export const MediaWrapper = styled.div`
  position: relative;
  padding-top: ${({ noVideo }) =>
    (noVideo && "0") || "591.44px / 1127.34px * 100%"};

  @media ${device.tablet} {
    ${({ noVideo }) =>
      (noVideo &&
        `img { 
        width: 400px; 
      }   
    position: absolute;
    z-index: -1;
    opacity: 0.3;
    right: 0;
    `) ||
      null}
  }

  @media ${device.tablet} {
    ${({ noVideo }) =>
      (noVideo &&
        `
         top: 150px;
         opacity: 1;
       `) ||
      null}
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`
