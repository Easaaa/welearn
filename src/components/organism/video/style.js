import styled from 'styled-components';
import { device } from 'styles/mediaQuery';

export const ComponentContainer = styled.section`
  padding: var(--space-md);
  margin: 0 auto;
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-md);
  max-width: 1024px;

  @media ${device.tablet} {
    padding: var(--space-xl);
  }
`;
export const Header = styled.header`
  button {
    background-color: var(--secondary800);
    color: var(--primary800);
    border: none;
    padding: var(--space-md) 0;
    cursor: pointer;
    outline: none;

    box-shadow: var(--shadow-xs);

    height: 30px;
    width: 80px;
    border-radius: 10px;
    margin: 20px 0;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:active {
      box-shadow: var(--shadow-md);
    }
  }

  h1 {
    margin: 0;
    font-weight: 500;
    color: var(--secondary800);
  }

  p {
    margin: 0;
    font-size: var(--font-1);
    color: var(--orange);
    font-weight: 500;
  }

  @media ${device.tablet} {
    button {
      display: none;
    }
  }
`;

export const Breadcrumb = styled.div`
  display: none;
  grid-auto-flow: column;
  place-content: start;
  align-items: center;
  justify-items: start;
  grid-gap: 20px;
  width: 100%;

  a {
    color: var(--txt-color-light);
    position: relative;
    font-size: 12px;

    &::after {
      content: '/';
      position: absolute;
      padding-left: 5px;
      top: 1px;
    }
  }

  @media ${device.tablet} {
    display: grid;
  }
`;

export const VideoContainer = styled.div`
  img {
    width: 100%;
    max-width: 800px;
  }
`;

export const VideoInfos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: start;
  margin: 0 auto 0 0;
  grid-gap: var(--space-md);

  .type {
    text-transform: capitalize;
    border-radius: 5px;
    text-align: center;
    padding: 0 var(--space-md);
    box-shadow: var(--shadow-xs);
    background-color: var(--primary800);
    font-weight: 500;
  }
  .role {
    width: 140px;
    display: table;
    font-weight: 500;
    border-radius: 5px;
    text-align: center;
    text-transform: capitalize;
    padding: 0 var(--space-md);
    box-shadow: var(--shadow-xs);
    background-color: var(--primary800);
  }
`;
