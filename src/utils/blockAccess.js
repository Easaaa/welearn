import React from 'react';
import { PageLoader } from 'components/atoms/page-loader';
import { Layout } from 'components/organism/layout';

export const blockAccess = (level, levelRequired, Component) => {
  /*   const regEx = /\d+/;
  const levelNum = level.match(regEx);
  const levelRequiredNum = levelRequired.match(regEx); */

  return Component;

  /* if (levelNum >= levelRequiredNum) return Component;
  else
    return (
      <Layout>
        <h5
          style={{
            fontWeight: '400',
            textAlign: 'center',
            color: 'var(--main-red)',
            lineHeight: '1.5em',
            paddingTop: '2em',
          }}>
          👮
          <br /> ALT <br /> Probabilmente non hai ancora le abilità per accedere
          a questo contenuto.
        </h5>
        <PageLoader />
      </Layout>
    ); */
};

export const checkBlockAccess = (level, levelRequired) => {
  /* const regEx = /\d+/;
  const levelNum = level.match(regEx);
  const levelRequiredNum = levelRequired.match(regEx); */

  /*  if (levelNum <= levelRequiredNum) return true
  else return false */
  return false;
};
