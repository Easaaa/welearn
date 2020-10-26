import React, { useContext, useEffect } from "react"
import { SchoolContext } from "providers/school-provider"
import { graphql, navigate } from "gatsby"
import { PageLoader } from "components/atoms/page-loader"
import { Course } from "components/organism/course"
import { CoursePreview } from "components/organism/course-preview"
import { Layout } from "components/organism/layout/"
import { blockAccess } from "utils/blockAccess"
import useGetUser from "hooks/useGetUser"
import { CourseContainer } from "styles/courseContainer"

const CourseTemplate = ({ data, pageContext, location }) => {
  const { school } = useContext(SchoolContext)
  const { userData } = useGetUser()
  /* const role = userData && userData.role
  const requiredRole = data && data.course.role */

  /*  if (!school) {
    return (
      <Layout>
        <PageLoader />
      </Layout>
    )
  }

  if (pageContext && pageContext.course.node.schoolId !== school.id) {
    navigate("/")
    return (
      <Layout>
        <PageLoader />
      </Layout>
    )
  }

  return blockAccess(
    role,
    requiredRole,
    <Layout>s
      <CourseContainer>
        <Course item={pageContext.course.node} />
        <CoursePreview item={pageContext.course.node} />
      </CourseContainer>
    </Layout>
  ) */

  return (
    <Layout>
      <CourseContainer>
        <Course item={pageContext.course.node} />
        <CoursePreview item={pageContext.course.node} />
      </CourseContainer>
    </Layout>
  )
}

export default CourseTemplate
