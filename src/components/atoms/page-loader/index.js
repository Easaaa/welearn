import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "components/organism/layout/style"
// import Spinner from "react-spinkit"
/* https://github.com/KyleAMathews/react-spinkit */

const SpinnerWrapper = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  text-align: center;

  .bouncingLoader > div,
  .bouncingLoader:before,
  .bouncingLoader:after {
    display: inline-block;
    width: 13px;
    height: 13px;
    background: var(--secondary800);
    margin-bottom: -5px;
    border-radius: 50%;
    animation: bouncing-loader 0.5s infinite alternate;
  }

  .bouncingLoader > div,
  .bouncingLoader:before,
  .bouncingLoader:after {
    content: "";
  }

  .bouncingLoader > div {
    margin: 0 5px;
  }

  .bouncingLoader > div {
    animation-delay: 0.2s;
  }

  .bouncingLoader:after {
    animation-delay: 0.4s;
  }

  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translate3d(0, -16px, 0);
    }
  }
`

export const PageLoader = () => (
  <>
    <GlobalStyle />
    <SpinnerWrapper>
      <div className="bouncingLoader">
        <div></div>
      </div>
    </SpinnerWrapper>
  </>
)
