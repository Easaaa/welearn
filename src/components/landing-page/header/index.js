import React from "react"
import { HeaderWrapper, StyledHeader, BtnsWrapper, ImgWrapper } from "./style"
import HeaderImg from "assets/header.png"
import { AiOutlinePlayCircle } from "react-icons/ai"

export const Header = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <h1>
          Crea la tua <span>accademia</span> personale per il tuo{" "}
          <span>business</span>.
        </h1>

        <p>
          Mal di testa per cercare di seguire ogni aspetto dell'attività? Digli
          addio grazie alla nostra piattaforma, la gestione e l'apprendimento
          non è mai stato cosi facile.
          {/* We built a powerful tool for your school, it will be so easy that you
          can't believe it. */}
        </p>
        <BtnsWrapper>
          <button>
            <span>Inizia</span> oggi
          </button>
          <button>
            <AiOutlinePlayCircle /> Guarda il Video
          </button>
        </BtnsWrapper>
      </StyledHeader>
      <ImgWrapper>
        <img src={HeaderImg} alt="wallet with cash and some coin" />
      </ImgWrapper>
    </HeaderWrapper>
  )
}
