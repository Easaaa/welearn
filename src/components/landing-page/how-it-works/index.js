import React from "react"

import { FiMonitor, FiUploadCloud } from "react-icons/fi"
import { BsWindow } from "react-icons/bs"
import HowItWorksImg from "assets/how-it-works.png"

import {
  Container,
  SectionTitle,
  StepsWrapper,
  Step,
  ColImg,
  ColTxt,
  SubTitle,
  StyledImage,
} from "./style"

export const HowItWorks = () => {
  return (
    <Container>
      <SectionTitle>
        <h4>È facile</h4>
        <h1>Come funziona?</h1>
      </SectionTitle>
      <StepsWrapper>
        <Step>
          <ColImg>
            <FiMonitor />
          </ColImg>
          <ColTxt>
            <SubTitle>Passo 1</SubTitle>
            <h4>App per Amministrazione</h4>
            <p>
              Crea la tua impresa / scuola senza dover spendere una montagna di
              denaro.
              {/*  Set up your school and create access to your materials for your
              students, see stats and other kind of stuff. */}
            </p>
          </ColTxt>
        </Step>
        <Step>
          <ColImg>
            <FiUploadCloud />
          </ColImg>
          <ColTxt>
            <SubTitle>Passo 2</SubTitle>
            <h4>Carica il tuo Contenuto</h4>
            <p>
              Abbiamo creato un proccesso semplice, per poter caricare il
              materiale velocemente e darti il controllo su ciò che è tuo di
              diritto.
              {/* It’s so easy, you can upload your videos or courses in less then 5
              minutes. */}
            </p>
          </ColTxt>
        </Step>
        <Step>
          <ColImg last>
            <BsWindow />
          </ColImg>
          <ColTxt>
            <SubTitle>Passo 3</SubTitle>
            <h4>App per gli Utenti</h4>
            <p>
              Questo è il prodotto finale, dove i tuoi utenti potranno consumare
              il tuo contenuto da computer o dal telefono, con un piacevole
              design e senza frizioni.
              {/*  With a cool style your students / clients can enjoy your content
              on our platform, open to every one you want, but it’s only up to
              you. You are the boss! */}
            </p>
          </ColTxt>
        </Step>
      </StepsWrapper>
      <StyledImage>
        <img src={HowItWorksImg} alt="abstract person walking on a map" />
      </StyledImage>
    </Container>
  )
}
