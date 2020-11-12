import React from 'react';

import { PageLoader } from 'components/atoms/page-loader';
import useGetUser from 'hooks/useGetUser';

import PrivateRoute from 'components/atoms/privateRoute';
import { Course } from 'components/organism/course';
import { CoursePreview } from 'components/organism/course-preview';
import { Layout } from 'components/organism/layout/';

import { CourseContainer } from 'styles/courseContainer';

const CourseTemplate = ({ data, pageContext, location }) => {
  const { userData } = useGetUser();

  return (
    <PrivateRoute>
      <Layout>
        <CourseContainer>
          {(!userData && <PageLoader />) || (
            <>
              {' '}
              <Course item={pageContext.course.node} />
              <CoursePreview item={pageContext.course.node} />
            </>
          )}
        </CourseContainer>
      </Layout>
    </PrivateRoute>
  );
};

export default CourseTemplate;
