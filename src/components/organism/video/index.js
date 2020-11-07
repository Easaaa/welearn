import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { MdBookmarkBorder } from 'react-icons/md';
import { VideoContent } from 'components/organism/video-content';
import { VideoPlayer } from 'components/atoms/video-player';
import { convertRoleUI } from 'constants/roles';
import { BsArrowLeftShort } from 'react-icons/bs';
import {
  ComponentContainer,
  Header,
  VideoContainer,
  VideoInfos,
} from './style';
import * as ROUTES from 'constants/routes';

// time ago
import italianStrings from 'react-timeago/lib/language-strings/it';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import TimeAgo from 'react-timeago';

export const Video = ({ item }) => {
  const formatter = buildFormatter(italianStrings);

  return (
    <ComponentContainer>
      <Header>
        <button onClick={() => navigate(ROUTES.VIDEOS)}>
          <BsArrowLeftShort /> Back
        </button>
        <h1>{item.title}</h1>
        <p>Created by {item.madeByFullName}</p>
        {/* <p style={{ textTransform: "capitalize", fontStyle: "italic" }}>
          {" "}
          <TimeAgo date={item.createdAt} formatter={formatter} />
        </p> */}
      </Header>
      <VideoInfos>
        <p className='type'>
          {item && item.type && item.type.replace('_', ' ').toUpperCase()}
        </p>
        <p className='role'>{convertRoleUI(item.role)}</p>
      </VideoInfos>
      <VideoContainer>
        <VideoPlayer id={item.wistiaId} />
      </VideoContainer>
      <VideoContent item={item} />
    </ComponentContainer>
  );
};
