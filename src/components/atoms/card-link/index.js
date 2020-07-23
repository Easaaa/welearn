import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "styles/mediaQuery"

export const CardLink = styled(Link)`
  grid-column: span 24;
  width: 100%;
  margin-bottom: var(--space-xl);

  @media ${device.tabletM} {
    grid-column: ${({ spanCard, thirdSize }) => !thirdSize && spanCard};
  }

  @media ${device.laptop} {
    grid-column: ${({ spanCard }) => spanCard};
  }
`
