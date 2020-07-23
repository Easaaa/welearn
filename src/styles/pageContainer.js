import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const PageContainer = styled.section`
  position: relative;
  margin-top: var(--space-xxl);
  /* background-color: var(--lightCleanBlack);
  box-shadow: var(--shadow-xs);
  border: 5px solid var(--cleanBlack); */
  display: grid;
  grid-auto-flow: row;

  grid-template-areas:
    "search search search search"
    "search search search search"
    "filter list list list"
    "filter list list list"
    "filter list list list"
    "filter list list list"
    "footer footer footer footer";

  @media ${device.laptop} {
    padding: var(--space-md) var(--space-xl);
    grid-template-columns: 20% 80%;
    grid-gap: var(--space-md);
    place-content: center;
  }
`
