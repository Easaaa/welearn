import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "styles/mediaQuery"

export const VideosContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(24, [col-start] 1fr);
  padding: var(--space-md);

  button {
    outline: none;
  }

  @media ${device.tablet} {
    padding: var(--space-xl);
  }
`

export const TitleCategory = styled.div`
  max-width: 270px;
  margin: 2em auto;
  position: relative;

  h5 {
    font-weight: 500;
    color: var(--orange);
    font-size: var(--font-7);
    text-transform: capitalize;
  }

  p {
    position: absolute;
    opacity: 0.7;
  }
`
