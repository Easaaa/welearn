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

import DevelopmentImg from "assets/development.png"

export const Development = () => {
  return (
    <Container noVideo>
      <SectionTitle>
        <h4>Siamo sul pezzo</h4>
        <h1>
          Molto in <br /> Costruzione
        </h1>
        <Description>
          <p>
            Stiamo costantemente lavorando per creare nuove funzioni, grazie al
            tuo aiuto porteremo a conclusione solo ciò che è utile a te. Per
            questo riteniamo super importanti le tue opinioni.
            {/*   We are constantly working to deliver new features, collaborating
            with our community to understand how to satisfy your needs. Write us
            if you have suggestions and feedback, your opinion is important. */}
          </p>
        </Description>
      </SectionTitle>
      <Border />
      <MediaWrapper noVideo>
        <img src={DevelopmentImg} alt="" />
      </MediaWrapper>
      <FunctionalityWrapper noCol>
        <Card>
          <h4>Grafici</h4>
          <p>
            Creati da voi e personalizzate al 100% in base ai tuoi bisogni.
            {/*   A chart where you can teach range and customize it at your needs. */}
          </p>
        </Card>
        <Card>
          <h4>Esercizi</h4>
          <p>
            Un' applicazione che permetterà di far svolgere esercizi
            personalizzati agli utenti, quando e come lo decidete voi.
            {/*  A quiz application where you can create every kind of test for your
            student. */}
          </p>
        </Card>
        <Card>
          <h4>Statistiche</h4>
          <p>
            Nell'applicazione privata troverai sempre più funzionalità che ti
            permetteranno di avere più chiarezza su ogni aspetto della tua
            attività.
            {/*     A feature for your private dashboard, with stats and everything you
            need to manage your investment. */}
          </p>
        </Card>
      </FunctionalityWrapper>
    </Container>
  )
}
