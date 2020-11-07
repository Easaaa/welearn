import React from 'react';
import { navigate } from 'gatsby';
import useGetUser from 'hooks/useGetUser';
import { HomeContainer, Header, Img, MissingField } from './style';
import { Button } from 'components/atoms/button';
import SelectImg from 'assets/select-task.png';

export const SelectNew = () => {
  const { userData, userLoad } = useGetUser();
  const URL_ADMIN = 'https://loving-easley-893aaa.netlify.app';
  return (
    <HomeContainer>
      <Header>
        <h1>
          Choose an <span>action.</span>
        </h1>
        <p>
          You can create a video or a full course to share with your students.
        </p>
        <div>
          <Button bgColor='#f25f4c' onClick={() => navigate(URL_ADMIN)}>
            Add New Video
          </Button>
          <Button onClick={() => navigate(`${URL_ADMIN}/courses`)}>
            Add New Course
          </Button>
        </div>
      </Header>

      <Img src={SelectImg} alt='teacher with window' />
    </HomeContainer>
  );
};
