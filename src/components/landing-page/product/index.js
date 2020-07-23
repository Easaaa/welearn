import React, { useRef } from "react"
import {
  Container,
  SectionTitle,
  MediaWrapper,
  Description,
  Border,
  FunctionalityWrapper,
  Card,
} from "../dashboard/style"

import SchoolImg from "assets/school.png"
import ReactPlayer from "react-player"
import Video from "assets/video.mp4"

export const Product = () => {
  const brCode = { code: word => <br /> }
  return (
    <Container>
      <SectionTitle alignR>
        <h4 className="alignR">È figo</h4>
        <h1>
          Il <br /> Prodotto
        </h1>
        <Description alignR>
          <p>
            È più di ciò che sembra, il nostro goal non è solo portare il tuo
            contenuto ai tuoi utenti, ma cercare di ottimizzare il processo di
            apprendimento per loro, creando un sistema dove ognuno possa rendere
            al meglio.
            {/*  Is more then you think, with many tools to improve the user
            experience and the learning process, is rich of amazing content and
            awesome interaction. */}
          </p>
        </Description>
      </SectionTitle>
      <Border />
      <FunctionalityWrapper>
        <Card>
          <h4>La sezione Corsi</h4>
          <p>
            Abbiamo creato una sezione dove gli utenti hanno la possibilità di
            fare un percorso scolpito da te, fare domande e consumare ogni tipo
            di contenuto extra.
            {/* Your users can enjoy structured courses, where they have the ability
            to comments, ask question and use the material you decide to share
            with them. */}
          </p>
        </Card>
        <Card>
          <h4>Libreria Video</h4>
          <p>
            Immagina un you tube di video di poker, dove però non stai regalando
            la tua conoscenza, ma la stai concedendo solo a chi TU VUOI.
            {/*   Here, they can consume every kind of video you decide to upload,
            from a 5 min explanation to a entire session review. */}
          </p>
        </Card>
        <Card>
          <h4>La pratica rende perfetti</h4>
          <p>
            Creiamo dal più profondo che guardare video non è abbastanza, per
            questo lavoriamo constantemnte per creare nuove funzionalità utili
            al apprendimento.
            {/*  We fundamentally believes that watching videos is not enough, active
            learning is key, for that we are creating interactive quizzes and
            interactive charts for a unique learning experience. */}
          </p>
        </Card>
      </FunctionalityWrapper>

      <MediaWrapper>
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          url={Video}
          playing={true}
          light={(true, SchoolImg)}
        />
      </MediaWrapper>
    </Container>
  )
}
