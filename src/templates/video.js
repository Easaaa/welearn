import React, { useContext } from "react"
import { SchoolContext } from "providers/school-provider"
import { graphql, navigate } from "gatsby"
import { PageLoader } from "components/atoms/page-loader"
import { Video } from "components/organism/video"
import { Layout } from "../components/organism/layout"
import { blockAccess } from "utils/blockAccess"
import useGetUser from "hooks/useGetUser"

const VideoTemplate = ({ data, pageContext, location }) => {
  const { school } = useContext(SchoolContext)
  const { userData } = useGetUser()
  const role = userData && userData.role
  // const requiredRole = data && data.video.role

  /*  if (!school) {
    return (
      <Layout>
        <PageLoader />
      </Layout>
    )
  }

  if (school && data && data.video.schoolId !== school.id) {
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
      <Video item={data.video} />
    </Layout>
  ) */

  return (
    <Layout>
      <Video item={pageContext.video.node} />
    </Layout>
  )
}

export default VideoTemplate
