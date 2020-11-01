import React from "react"
import { HeaderWrapper, StyledHeader, BtnsWrapper, ImgWrapper } from "./style"
import HeaderImg from "assets/header.png"
import { AiOutlinePlayCircle } from "react-icons/ai"

export const Header = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <h1>
          Create your new personal <span>free academy</span> for your business.
        </h1>

        <p>
          We built a powerful tool for your school, it will be so easy that you
          can't believe it.
        </p>
        <BtnsWrapper>
          <button>
            <span>Start</span> today
          </button>
          <button>
            <AiOutlinePlayCircle /> Watch the video
          </button>
        </BtnsWrapper>
      </StyledHeader>
      <ImgWrapper>
        <img src={HeaderImg} alt="wallet with cash and some coin" />
      </ImgWrapper>
    </HeaderWrapper>
  )
}
