import React, { useRef } from "react"
import {
  Container,
  SectionTitle,
  MediaWrapper,
  Description,
  Border,
  FunctionalityWrapper,
  Card,
} from "./style"

import DashboardImg from "assets/dashboard.png"
import ReactPlayer from "react-player"
import Video from "assets/video.mp4"

export const Dashboard = () => {
  return (
    <Container>
      <SectionTitle>
        <h4>Concentrati su ciò che conta</h4>
        <h1>
          Il centro <br /> operativo
        </h1>
        <Description>
          <p>
            Vogliamo aiutarti a far crescere i tuoi affari e a tener traccia di
            ogni dettaglio. Grazie all' applicazione dedicata solo visibile a
            te, hai la possibilità di risolvere i tuoi problemi.
            {/* We want help you grow your business and keep track of every details.
            Try new ways of manage your money, with a beautiful design, look at
            numbers were never so delightful. */}
          </p>
        </Description>
      </SectionTitle>
      <Border />
      <FunctionalityWrapper>
        <Card>
          <h4>Gestisci i tuoi utenti</h4>
          <p>
            Hai l'abilità di decicdere chi ha accesso al tuo prezioso materiale,
            crendo diversi livelli utente.
            {/* You have the ability to choose who can have access to what kind of
            materials, with severals levels of permissions. */}
          </p>
        </Card>
        <Card>
          <h4>Crea contenuti</h4>
          <p>
            Anche tu hai la sensazione di regalare soldi quando invii video alle
            persone senza averne il controllo? Ecco, noi siamo quelli che te ne
            danno il controllo.
            {/*  Create your content, upload videos and courses with a simple form.
            Videos and courses are protected and they cant' be downloaded. */}
          </p>
        </Card>
        <Card>
          <h4>Controlla il flusso di denaro</h4>
          <p>
            Immagina di avere un applicazione che tenga traccia di ogni aspetto
            finanziario aiutandoti nella visione globale della tua impresa. Bene
            sta arrivando.
            {/*   Essentially you have the ability to control every aspect of your
            business, including profit splitting, cash balances and much more,
            all with a nice graphic. */}
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
          light={(true, DashboardImg)}
        />
      </MediaWrapper>
    </Container>
  )
}
