import styled from 'styled-components';
import { device } from 'styles/mediaQuery';

export const ComponentContainer = styled.section`
  padding: var(--space-md);
  margin: 0 auto;
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-md);
  width: 100%;

  @media ${device.tablet} {
    padding: var(--space-xl);
  }
`;
export const Header = styled.header`
  button {
    background-color: var(--secondary800);
    color: var(--primary800);
    border: none;
    cursor: pointer;
    outline: none;

    height: 35px;
    width: 100px;
    border-radius: 10px;
    margin: 20px 0;

    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin: 0;
    font-weight: 500;
    color: var(--orange);
  }

  p {
    margin: 0;
    font-size: var(--font-1);
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

    &::after {
      content: '>';
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
  }
`;

export const WelcomeCourse = styled.div`
  max-width: 650px;

  @keyframes swingVertical {
    15% {
      transform: translateY(6px);
    }
    30% {
      transform: translateY(-6px);
    }
    50% {
      transform: translateY(4px);
    }
    65% {
      transform: translateY(-2px);
    }
    80% {
      transform: translateY(2px);
    }
    100% {
      transform: translateY(0);
    }
  }

  * {
    line-height: var(--line-height-lg);
  }

  h3 {
    font-weight: 400;

    span {
      font-weight: bold;
      letter-spacing: 2px;
    }
  }

  h5 {
    font-weight: 400;
    color: var(--secondary800);
  }

  button {
    width: 150px;
    height: 45px;
    background-color: var(--orange);
    border: none;
    border-radius: 10px;
    color: var(--primary800);
    text-transform: capitalize;
    margin: var(--space-md) 0;
    cursor: pointer;

    &:hover {
      animation: swingVertical 1s ease;
      animation-iteration-count: 1;
    }
  }

  @media ${device.tablet} {
    margin: var(--space-md) 0;
    height: 400px;
    display: grid;
    place-content: center;

    h3 {
      margin-bottom: var(--space-md);
    }
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
    background-color: var(--primary800);
    text-transform: capitalize;
    font-weight: 500;

    box-shadow: var(--shadow-xs);
  }
  .role {
    width: 140px;
    display: table;
    font-weight: 500;
    border-radius: 5px;
    text-align: center;
    padding: 0 var(--space-md);
    background-color: var(--primary800);
    text-transform: capitalize;
    box-shadow: var(--shadow-xs);
  }
`;
