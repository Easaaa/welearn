import React, { useState, useContext, useEffect } from 'react';
import { CourseContext } from 'providers/course-provider';
import useGetUser from 'hooks/useGetUser';

import {
  Content,
  ContentNav,
  About,
  Comments,
  Notes,
  Comment,
  Text,
  Infos,
  Date,
  Role,
  Name,
  Actions,
  NewComment,
} from './style';

export const VideoContent = ({ item }) => {
  const { courseState, setCourseState } = useContext(CourseContext);
  const { userData } = useGetUser();
  const [contentNav, setContentNav] = useState({
    about: true,
    comments: false,
    notes: false,
  });

  const contentNavUI = () => {
    if (contentNav.about === true) {
      return <About>{item.description}</About>;
    }
    if (contentNav.comments === true) {
      return (
        <Comments>
          <Comment>
            <Infos>
              <Name>Leonardo T.</Name>
              <Role>Proprietario</Role>
              <Date>21/06/2020</Date>
            </Infos>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
              minima, veritatis expedita officia obcaecati velit magnam earum
              maiores nulla totam error.
            </Text>
            <Actions>
              <button>Modifica</button>
              <button>Elimina</button>
            </Actions>
          </Comment>
          <NewComment>
            <input type='text' placeholder='Commenta o rispondi...' />
            <div>
              <button>Cancella</button>
              <button>Rispondi</button>
            </div>
          </NewComment>
        </Comments>
      );
    }
    if (contentNav.notes === true) {
      return (
        <Notes>
          {item.notes && item.notes.length > 1
            ? item.notes
            : 'Il creatore non ha fornito nessuna nota, oppure non aveva voglia di aggiungere altro.'}
        </Notes>
      );
    }
  };

  return (
    <Content>
      <ContentNav>
        <button
          className={`${contentNav.about}`}
          onClick={() =>
            setContentNav({
              about: true,
              comments: false,
              notes: false,
            })
          }>
          Descriptions
        </button>
        {/*  <button
          className={`${contentNav.comments}`}
          onClick={() =>
            setContentNav({
              about: false,
              comments: true,
              notes: false,
            })
          }
        >
          Commenti
        </button> */}

        <button
          className={`${contentNav.notes}`}
          onClick={() =>
            setContentNav({
              about: false,
              comments: false,
              notes: true,
            })
          }>
          Notes & Resources
        </button>
      </ContentNav>

      {contentNavUI()}
    </Content>
  );
};
