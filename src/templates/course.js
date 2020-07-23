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
  const role = userData && userData.getUser.role
  const requiredRole = data && data.course.role

  if (!school) {
    return (
      <Layout>
        <PageLoader />
      </Layout>
    )
  }

  if (data && data.course.schoolId !== school.id) {
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
    <Layout>
      <CourseContainer>
        <Course item={data.course} />
        <CoursePreview item={data.course} />
      </CourseContainer>
    </Layout>
  )
}

export default CourseTemplate

export const pageQuery = graphql`
  query courseQuery($id: String) {
    course(id: { eq: $id }) {
      schoolId
      madeByID
      madeByFullName
      title
      subtitle
      description
      role
      type
      coverLink
      createdAt
      id
      lessons {
        title
        wistiaId
        description
        notes
        lesson
        duration
      }
      store
    }
  }
`
