import React from 'react';
import { navigate } from 'gatsby';
import useGetUser from 'hooks/useGetUser';
import { HomeContainer, Header, Img, MissingField } from './style';
import { Button } from 'components/atoms/button';
import GamingImg from 'assets/creative.png';
import { RiErrorWarningLine } from 'react-icons/ri';
import { PageLoader } from 'components/atoms/page-loader';

export const Home = () => {
  const { userData, userLoad } = useGetUser();

  return (
    <HomeContainer>
      {userLoad ? (
        <PageLoader />
      ) : (
        <Header>
          <h1>
            <span>Welcome</span>{' '}
            {userData && userData.firstName ? userData.firstName : 'UNKNOWN'}!
          </h1>
          {(userData && !userData.firstName) || !userData.lastName ? (
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
              <Button onClick={() => navigate('/app/school/profile')}>
                {' '}
                <RiErrorWarningLine />
                Completa ora
              </Button>
            </MissingField>
          ) : (
            <p>Choose a path and good luck!</p>
          )}
        </Header>
      )}

      <Img src={GamingImg} alt='teacher with window' />
    </HomeContainer>
  );
};
