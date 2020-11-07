import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { FirebaseContext } from '../lib/firebase';
import { Layout } from '../components/organism/layout';
import { Login } from '../components/organism/login';
import { PageLoader } from '../components/atoms/page-loader';

const LandingPage = () => {
  const { currentUser, firebase, isDbLoading } = useContext(FirebaseContext);

  if (isDbLoading) {
    return <PageLoader />;
  }

  if (currentUser) {
    navigate(`/home`);
    return null;
  }

  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default LandingPage;
