import React from "react"
import { navigate } from "gatsby"
import useGetUser from "hooks/useGetUser"
import { HomeContainer, Header, Img, MissingField } from "./style"
import { Button } from "components/atoms/button"
import GamingImg from "assets/gaming.svg"
import { RiErrorWarningLine } from "react-icons/ri"
import { PageLoader } from "components/atoms/page-loader"

export const Home = () => {
  const { userData, userLoad } = useGetUser()
  return (
    <HomeContainer>
      {userLoad ? (
        <PageLoader />
      ) : (
        <Header>
          <h1>
            <span>Benvenuto</span>{" "}
            {userData && userData.getUser.firstName
              ? userData.getUser.firstName
              : "sconosciuto"}
            !
          </h1>
          {(userData && !userData.getUser.firstName) ||
          !userData.getUser.lastName ? (
            <MissingField>
              <p>Ultimi due passi per diventare definitivamente un membro:</p>
              <h5>
                <span>1.</span> Completa il profilo cosi da poter accedere ad
                ogni funzionalità.
                <br />
                <br />
                <span>2.</span> Goditi la nostra applicazione, la stiamo creando
                con molto amore. 🤓
              </h5>
              <Button onClick={() => navigate("/app/school/profile")}>
                {" "}
                <RiErrorWarningLine />
                Completa ora
              </Button>
            </MissingField>
          ) : (
            <p>Scegli una categoria e buon apprendimento!</p>
          )}
        </Header>
      )}

      <Img src={GamingImg} alt="teacher with window" />
    </HomeContainer>
  )
}
