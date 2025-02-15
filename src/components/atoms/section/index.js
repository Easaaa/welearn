import styled from 'styled-components';
import { device } from 'styles/mediaQuery';

const layout = {
  full: {
    mobile: '100%',
    laptop: '1fr',
  },
  aside20: {
    mobile: '100%',
    laptop: '1fr 4fr',
  },
  twoElEnd: {
    mobile: 'repeat(auto-fit, minmax(300px, 500px))',
  },
};

export const Section = styled.section`
  display: grid;
  grid-template-columns: ${({ container }) =>
    container && `${layout[container].mobile}`};
  align-items: center;
  margin: var(--space-xl) var(--space-md);
  grid-gap: var(--space-xl);

  @media ${device.laptop} {
    grid-template-columns: ${({ container }) =>
      container && `${layout[container].laptop}`};
    margin: var(--space-xxl) var(--space-xl);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin: var(--space-md);
  grid-gap: var(--space-md);

  @media ${device.laptop} {
    margin: var(--space-xl) var(--space-xxl) 0 var(--space-xxl);
  }
`;
