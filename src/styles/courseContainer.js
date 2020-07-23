import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const CourseContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1400px) {
    grid-template-columns: 2fr 1fr;
  }
`
