import React from "react"
import { Layout } from "components/organism/layout"
import { Profile } from "components/organism/profile"
import { PasswordReset } from "components/organism/password-reset"
import PrivateRoute from "components/atoms/privateRoute"

const ProfilePage = () => (
  <PrivateRoute>
    <Layout>
      <Profile />
      <PasswordReset />
    </Layout>
  </PrivateRoute>
)

export default ProfilePage
