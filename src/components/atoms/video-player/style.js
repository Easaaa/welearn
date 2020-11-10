import styled from 'styled-components';
import ThumbImg from '../../../assets/image-video-thumb.png';

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

  .react-player__preview {
    background-image: url(${ThumbImg});
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    border: 4px solid var(--primary800);
    box-shadow: var(--shadow-xs);
    border-radius: 10px;
  }
`;
