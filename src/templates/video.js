import React from "react"
import { Video } from "components/organism/video"
import { Layout } from "../components/organism/layout"
import PrivateRoute from "components/atoms/privateRoute"

const VideoTemplate = ({ data, pageContext, location }) => {
  return (
    <PrivateRoute>
      <Layout>
        <Video item={pageContext.video.node} />
      </Layout>
    </PrivateRoute>
  )
}

export default VideoTemplate
