import React, { useEffect } from 'react';
import { navigate, Link } from 'gatsby';
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
  Breadcrumb,
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
        <button className='back-mobile' onClick={() => navigate(ROUTES.VIDEOS)}>
          <BsArrowLeftShort /> Back
        </button>
        <Breadcrumb>
          <Link to={ROUTES.HOME}>Home</Link>
          <Link to={ROUTES.VIDEOS}>Videos List</Link>
          <span>Video</span>
        </Breadcrumb>
        <h1>{item.title}</h1>
        <p>Created by {item.madeByFullName}</p>
        {/* <p style={{ textTransform: "capitalize", fontStyle: "italic" }}>
          {" "}
          <TimeAgo date={item.createdAt} formatter={formatter} />
        </p> */}
      </Header>
      <VideoInfos>
        <p className='type'>
          {item && item.type && item.type.replace('_', ' ')}
        </p>
        <p className='role'>{convertRoleUI(item.role)}</p>
      </VideoInfos>
      <VideoContainer>
        <VideoPlayer id={item.wistiaId} useWistia={true} />
      </VideoContainer>
      <VideoContent item={item} />
    </ComponentContainer>
  );
};
