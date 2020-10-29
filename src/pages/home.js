import React from "react"
import { Layout } from "components/organism/layout"
import { Home } from "components/organism/home"
import PrivateRoute from "components/atoms/privateRoute"

const HomePage = () => (
  <PrivateRoute>
    <Layout>
      <Home />
    </Layout>
  </PrivateRoute>
)

export default HomePage
